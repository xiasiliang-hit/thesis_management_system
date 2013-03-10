using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;

public partial class manager_ManageNotice : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (this.IsPostBack == false)
        {
            countNumber();
            lblCurrentPage.Text = "1";
            paginate();
        }
    }

    private void countNumber()
    {
        int sum = 0;
        SqlConnection conn = new SqlConnection(db.connDB());
        string sql = "select count(*) from notice";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            conn.Open();
            sum = Convert.ToInt32(cmd.ExecuteScalar());
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            conn.Close();
        }
        lblNumber.Text = sum.ToString();
    }

    private void paginate()
    {
        SqlConnection conn = new SqlConnection(db.connDB());
        string sql = "select * from notice order by nid desc";
        SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);
        DataSet ds = new DataSet();
        try
        {
            conn.Open();
            adapter.Fill(ds, "notice");
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            conn.Close();
        }

        //对用于分页的类的引用
        PagedDataSource pds = new PagedDataSource();
        pds.DataSource = ds.Tables["notice"].DefaultView;//设置数据源(DataTable类型)
        pds.AllowPaging = true;
        //第页显示的行数
        pds.PageSize = 6;
        pds.CurrentPageIndex = Convert.ToInt32(lblCurrentPage.Text) - 1;//当前显示的页数
        rpNotice.DataSource = pds;

        lblAllPage.Text = pds.PageCount.ToString();//一共多少页
        lblCurrentPage.Text = (pds.CurrentPageIndex + 1).ToString();//显示页数
        this.lbFront.Enabled = true;
        this.lbPrev.Enabled = true;
        this.lbNext.Enabled = true;
        this.lbEnd.Enabled = true;

        if (pds.CurrentPageIndex < 1)
        {
            this.lbFront.Enabled = false;
            this.lbPrev.Enabled = false;
        }
        if (pds.CurrentPageIndex == pds.PageCount - 1)
        {
            this.lbNext.Enabled = false;
            this.lbEnd.Enabled = false;
        }
        rpNotice.DataBind();
    }
    protected void lbFront_Click(object sender, EventArgs e)
    {
        lblCurrentPage.Text = "1";
        paginate();
    }
    protected void lbPrev_Click(object sender, EventArgs e)
    {

        lblCurrentPage.Text = Convert.ToString(Convert.ToInt32(lblCurrentPage.Text) - 1);
        paginate();
    }

    protected void lbNext_Click(object sender, EventArgs e)
    {
        lblCurrentPage.Text = Convert.ToString(Convert.ToInt32(lblCurrentPage.Text) + 1);
        paginate();
    }

    protected void lbEnd_Click(object sender, EventArgs e)
    {
        lblCurrentPage.Text = lblAllPage.Text;
        paginate();
    }
}

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

public partial class manager_ViewMessage : System.Web.UI.Page
{
    protected string tid;
    protected String uidStr;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (this.IsPostBack == false)
        {
            uidStr = Request.QueryString["UID"];
            tid = Request.QueryString["tid"];
            countNumber();
            lblCurrentPage.Text = "1";
            paginate();
        }
    }

    private string findAdminName()
    {
        String name = null;
        string aid = null;
        SqlConnection conn = new SqlConnection(db.connDB());
        string sql = "select name from tutor where tid = @tid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@tid", tid = Request.QueryString["tid"]);
        try
        {
            conn.Open();
            name = Convert.ToString(cmd.ExecuteScalar());
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            conn.Close();
        }

        return name;
    }

    private void countNumber()
    {
        int sum = 0;
        SqlConnection conn = new SqlConnection(db.connDB());
        string sql = "select count(*) from message where mto = @mto or mfrom = @mfrom";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mto", findAdminName());
        cmd.Parameters.AddWithValue("@mfrom", findAdminName());
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
        //string sql = "select * from message where mto ='"+findAdminName()+"'or mfrom = '"+findAdminName()+"' order by mid desc";
        string sql = "select * from message where mto = '"+Request.QueryString["tid"]+ "' or mfrom = '"+Request.QueryString["tid"] + "'order by mid desc"; 
        SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);
   
        DataSet ds = new DataSet();
        try
        {
            conn.Open();
            adapter.Fill(ds, "message");
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
        pds.DataSource = ds.Tables["message"].DefaultView;//设置数据源(DataTable类型)
        pds.AllowPaging = true;
        //第页显示的行数
        pds.PageSize = 6;
        pds.CurrentPageIndex = Convert.ToInt32(lblCurrentPage.Text) - 1;//当前显示的页数
        rpMessage.DataSource = pds; 
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
        rpMessage.DataBind();
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

    protected void lbDetailButton_Click(object sender, EventArgs e)
    {
        signalReaded();
    }

    private void signalReaded()
    {
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "update message set mstate = '" + "已读" + " 'where mid = @mid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mid", Request.QueryString["mid"]);
        try
        {
            conn.Open();
            cmd.ExecuteNonQuery();
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            conn.Close();
        }
    }
}

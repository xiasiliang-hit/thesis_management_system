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

public partial class manager_ViewDetailMessage : System.Web.UI.Page
{
    protected string fromName;
    protected string messageDateTime;
    protected string messageTitle;


     protected void Page_Load(object sender, EventArgs e)
    {
        if (this.IsPostBack == false)
        {
            signalReaded();
            countNumber();
            lblCurrentPage.Text = "1";
            paginate();
            prepareBind();
            this.DataBind();
        }
    }

     private void signalReaded()
     {
         SqlConnection conn = new SqlConnection(db.connDB());
         String sql = "update message set mstate = '"+"已读"+" 'where mid = @mid";
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

    private void prepareBind()
    {
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "select * from message where mid = @mid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mid", Request.QueryString["mid"]);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                fromName = Convert.ToString(rd["mfromname"]);
                messageDateTime = Convert.ToString(rd["mdatetime"]);
                messageTitle = Convert.ToString(rd["mtitle"]);
            }
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


    private void countNumber()
    {
        int sum = 0;
        SqlConnection conn = new SqlConnection(db.connDB());
        string sql = "select count(*) from messagedetail where mid=@mid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mid", Request.QueryString["mid"]);
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
        string sql = "select * from messageDetail where mid=" + Request.QueryString["mid"] + " order by mseq";
        SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);
        DataSet ds = new DataSet();
        try
        {
            conn.Open();
            adapter.Fill(ds, "messageDetail");
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
        pds.DataSource = ds.Tables["messageDetail"].DefaultView;//设置数据源(DataTable类型)
        pds.AllowPaging = true;
        //第页显示的行数
        pds.PageSize = 6;
        pds.CurrentPageIndex = Convert.ToInt32(lblCurrentPage.Text) - 1;//当前显示的页数
        rpMessageDetail.DataSource = pds;

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
        rpMessageDetail.DataBind();
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

    protected void cmdReply_Click(object sender, EventArgs e)
    {
        int added = 0;
        int mseq = 0;
        mseq = getSeq() + 1;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "insert into messageDetail(mid, mseq, mreplyer, mreply) values(@mid, @mseq, @mreplyer, @mreply)";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mid", Request.QueryString["mid"]);
        cmd.Parameters.AddWithValue("@mseq", mseq);
        cmd.Parameters.AddWithValue("@mreplyer", getAdminName());
        cmd.Parameters.AddWithValue("@mreply", editorMessage.Text);
        try
        {
         conn.Open();
         added = cmd.ExecuteNonQuery();
        }
        catch (Exception err)
        {
         Console.Write(err.Message);
        }
        finally
        {
         conn.Close();
        }

        signalUnread();


        if (added > 0)
        {
         Response.Write("<script>alert('留言成功');location.href='ViewDetailMessage.aspx?mid=" + Request.QueryString["mid"] + "&" + "aid=" + Request.QueryString["aid"] + "';</script>");
        }
        else
        {
         Response.Write("<script>alert('留言失败');location.href='ViewDetailMessage.aspx?mid=" + Request.QueryString["mid"] + "&" + "aid=" + Request.QueryString["aid"] + "';</script>");
        }
    }
    private void signalUnread()
    {
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "update message set mstate = '" + "未读" + " 'where mid = @mid";
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

    private int getSeq()
    {
        int seq = 0;
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "select max(mseq) as mseq from messagedetail where mid=@mid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mid", Request.QueryString["mid"]);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                seq = Convert.ToInt32(rd["mseq"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            conn.Close();
        }
        return seq;
    }

    private string getAdminName()
    {
        string adminName = "";
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "select name from administrator where aid=@aid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@aid", Request.QueryString["aid"]);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                adminName = Convert.ToString(rd["name"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            conn.Close();
        }

        return adminName;
    }
    protected void cmdReturn_Click(object sender, EventArgs e)
    {
        Response.Redirect("ViewMessage.aspx?aid=" + Request.QueryString["aid"]);
    }
}

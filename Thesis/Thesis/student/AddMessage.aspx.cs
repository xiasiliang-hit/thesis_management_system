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

public partial class manager_AddMessage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (this.IsPostBack == false)
        {
            switch (Convert.ToInt32(ddlTargetRange.SelectedItem.Value))
            {
                case 0: bindStuInfo(); break;
                case 1: bindTutorInfo(); break;
                default: bindAdminInfo(); break;
            }
        }

    }
    protected void ddlTargetRange_SelectedIndexChanged(object sender, EventArgs e)
    {
        switch (Convert.ToInt32(ddlTargetRange.SelectedItem.Value))
        {
            case 0: bindStuInfo(); break;
            case 1: bindTutorInfo(); break;
            default: bindAdminInfo(); break;
        }
    }

    protected void bindStuInfo()
    {
        string sql = "select sid, name from student";
        SqlConnection conn = new SqlConnection(db.connDB());
        SqlCommand cmd = new SqlCommand(sql, conn);

        conn.Open();

        ddlTarget.DataSource = cmd.ExecuteReader();
        ddlTarget.DataTextField = "name";
        ddlTarget.DataValueField = "sid";

        ddlTarget.DataBind();

        conn.Close();
    }

    protected void bindTutorInfo()
    {
        string sql = "select tid, name from tutor";
        SqlConnection conn = new SqlConnection(db.connDB());
        SqlCommand cmd = new SqlCommand(sql, conn);

        conn.Open();

        ddlTarget.DataSource = cmd.ExecuteReader();
        ddlTarget.DataTextField = "name";
        ddlTarget.DataValueField = "tid";

        ddlTarget.DataBind();

        conn.Close();
    }

    protected void bindAdminInfo()
    {
        string sql = "select aid, name from administrator";
        SqlConnection conn = new SqlConnection(db.connDB());
        SqlCommand cmd = new SqlCommand(sql, conn);

        conn.Open();

        ddlTarget.DataSource = cmd.ExecuteReader();
        ddlTarget.DataTextField = "name";
        ddlTarget.DataValueField = "aid";

        ddlTarget.DataBind();

        conn.Close();
    }
    protected void cmdCommit_Click(object sender, EventArgs e)
    {
        if (txtTitle.Text.Trim() == "")
        {
            Response.Write("<script>alert('留言不能为空');location.href='AddMessage.aspx?uid=" + Request.QueryString["UID"] + "&sid=" + Request.QueryString["sid"] + "';</script>");
            return;
        }

        string mfromname = getName(Request.QueryString["sid"]);
        string mfrom = Request.QueryString["sid"];
        string mtoname = ddlTarget.SelectedItem.Text;
        string mtitle = txtTitle.Text.Trim();
        string mto = ddlTarget.SelectedItem.Value;
        string mstate = "未读";
        int mid = getMid()+1;//定义函数
        String sql = "insert into message(mid, mstate, mdatetime, mto, mfrom,mtoname, mfromname, mtitle) values(@mid, @mstate, @mdatetime, @mto, @mfrom, @mtoname, @mfromname, @title)";
        SqlConnection conn = new SqlConnection(db.connDB());
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@mid", mid);
        cmd.Parameters.AddWithValue("@mstate", mstate);
        cmd.Parameters.AddWithValue("@mdatetime", DateTime.Now);
        cmd.Parameters.AddWithValue("@mto", mto);
        cmd.Parameters.AddWithValue("@mfrom", mfrom);
        cmd.Parameters.AddWithValue("@mtoname", mtoname);
        cmd.Parameters.AddWithValue("@mfromname", mfromname);
        cmd.Parameters.AddWithValue("@title", mtitle);

        int added = 0;
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

        if (added > 0)
        {
            Response.Write("<script>alert('留言成功');location.href='ViewMessage.aspx?uid=" + Request.QueryString["UID"] + "&sid=" + Request.QueryString["sid"] + "';</script>");
        }
        else
        {
            Response.Write("<script>alert('留言失败');location.href='AddMessage.aspx?uid=" + Request.QueryString["UID"] + "&sid=" + Request.QueryString["sid"] + "';</script>");
        }
    }

    protected string getName(string id)//作废
    {
        string name = "";
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "select name from student where sid='"+id+"'";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                name = Convert.ToString(rd["name"]);
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

        return name;
    }

    protected int getMid()
    {
        int mid = 0;
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "select max(mid) as mid from message";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                mid = Convert.ToInt32(rd["mid"]);
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

        return mid;
    }

    protected void cmdReturn_Click(object sender, EventArgs e)
    {
        Response.Redirect("ViewMessage.aspx?uid=" + Request.QueryString["UID"] + "&sid=" + Request.QueryString["sid"]);
    }
}

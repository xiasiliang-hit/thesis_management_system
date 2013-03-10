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

public partial class manager_EditNotice : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (this.IsPostBack == false)
        {
            getData();
        }
    }

    private void getData()
    {
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        string sql = "select * from notice where nid = @nid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@nid", Request.QueryString["id"]);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                txtTitle.Text = Convert.ToString(rd["ntitle"]);
                ddlTarget.SelectedIndex = Convert.ToInt32(rd["ntarget"]);
                editorNotice.Text = Convert.ToString(rd["ncontent"]);
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



    protected void cmdCommit_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);

        String insertSQL = "update notice set ntitle=@title, ntarget=@target, ndatetime=@datetime, ncontent=@content where nid = @id";

        //连接DB
        SqlConnection conn = new SqlConnection(db.connDB());
        SqlCommand cmd = new SqlCommand(insertSQL, conn);
        cmd.Parameters.AddWithValue("@id", id);
        cmd.Parameters.AddWithValue("@title", txtTitle.Text.Trim());
        cmd.Parameters.AddWithValue("@datetime", DateTime.Now);
        cmd.Parameters.AddWithValue("@target", Convert.ToInt32(ddlTarget.SelectedItem.Value));
        cmd.Parameters.AddWithValue("@content", editorNotice.Text.Trim());

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
            Response.Write("<script>alert('更新成功');location.href='ViewDetailNotice.aspx?id=" + id + "';</script>");
        }
        else
        {
            Response.Write("<script>alert('更新失败');location.href='ViewDetailNotice.aspx?id=" + id + "';</script>");
        }
    }
}

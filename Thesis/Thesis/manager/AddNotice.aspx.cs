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

public partial class manager_AddNotice : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    
    }

    private int getId()
    {
        int id = 0;
        SqlDataReader rd;
        SqlConnection conn = new SqlConnection(db.connDB());
        String sql = "select max(nid) as nid from notice";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                id = Convert.ToInt32(rd["nid"]);
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

        return id;
    }
    protected void cmdCommit_Click(object sender, EventArgs e)
    {
        if(txtTitle.Text.Trim() =="" || editorNotice.Text.Trim() == "")
        {
            Response.Write("<script>alert('标题或内容不能为空白');location.href='AddNotice.aspx';</script>");
            return;
        }
        int id = getId()+1;
        String title = txtTitle.Text.Trim();
        int target = Convert.ToInt32(ddlTarget.SelectedItem.Value);
        String content = editorNotice.Text.Trim();
        String insertSQL = "insert into notice(nid, ntitle, ndatetime, ntarget, ncontent) values(@id, @title, @datetime, @target, @content)";

        //连接DB
        SqlConnection conn = new SqlConnection(db.connDB());
        SqlCommand cmd = new SqlCommand(insertSQL, conn);
        cmd.Parameters.AddWithValue("@id", id);
        cmd.Parameters.AddWithValue("@title", title);
        cmd.Parameters.AddWithValue("@datetime", DateTime.Now);
        cmd.Parameters.AddWithValue("@target", target);
        cmd.Parameters.AddWithValue("@content", content);

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
            Response.Write("<script>alert('发布成功');location.href='AddNotice.aspx';</script>");
        }
        else
        {
            Response.Write("<script>alert('发布失败');location.href='AddNotice.aspx';</script>");
        }
    }
}

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

public partial class manager_DeleteNotice : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        SqlConnection conn = new SqlConnection(db.connDB());
        conn.Open();
        string sql = "delete notice where nid='" + Request.QueryString["id"] + "'";
        SqlCommand cmd = new SqlCommand(sql, conn);
        int sum = Convert.ToInt32(cmd.ExecuteNonQuery());
        if (sum > 0)
        {
            Response.Write("<script>alert('删除成功！');location.href='ManageNotice.aspx';</script>");
        }
        else
        {
            Response.Write("<script>alert('删除失败！')</script>");
        }
    }
}

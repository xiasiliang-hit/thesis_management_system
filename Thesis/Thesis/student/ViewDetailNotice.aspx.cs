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

public partial class student_ViewDetailNotice : System.Web.UI.Page
{
    protected string title;
    protected string datetime;
    protected string content;

    protected void Page_Load(object sender, EventArgs e)
    {
        getData();
        this.DataBind();
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
                title = Convert.ToString(rd["ntitle"]);
                datetime = Convert.ToString(rd["ndatetime"]);
                content = Convert.ToString(rd["ncontent"]);
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
}

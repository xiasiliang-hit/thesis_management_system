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

public partial class student_ViewPaperTitle1 : System.Web.UI.Page
{
    private String uidStr;
    protected void Page_Load(object sender, EventArgs e)
    {
        uidStr = Request.QueryString["UID"];
        SqlConnection conn = new SqlConnection();
        conn = DBController.getConnection();
        if (conn.State == ConnectionState.Closed)
        {
            conn.Open();
        }
        else
        { }
        String ptname = null;
        String sid = "081110101";
        SqlDataReader rd;
        String sql = "select ptname from st_ptitle,papertitle where st_ptitle.ptid=papertitle.ptid and st_ptitle.sid=@sid";
        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@sid", sid);
        try
        {
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                //TextBox1.Text = ptname;
                ptname = Convert.ToString(rd["ptname"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        Label1.Text = ptname;


    }

    //修改选题
    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("ReselectPaperTitle.aspx" + "?uid=" + uidStr.ToString());
    }
}

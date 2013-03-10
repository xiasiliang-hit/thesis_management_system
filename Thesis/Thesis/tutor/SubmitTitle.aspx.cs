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
using System.Data;

public partial class tutor_SubmitTitle : System.Web.UI.Page
{
    private String uidStr;
    protected void Page_Load(object sender, EventArgs e)
    {
        uidStr = Request.QueryString["UID"];
    }
    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        
        int ptid = getNextptid();
        String ptname = TextBox1.Text;
        String tid = Request.QueryString["tid"];

        String conStr = ConfigurationSettings.AppSettings["conStrThesis"];
        SqlConnection con = new SqlConnection(conStr);
        con.Open();

        String strInsert = "insert into papertitle values(@ptid,@ptname)";
        SqlCommand statement = new SqlCommand(strInsert, con);
        statement.Parameters.AddWithValue("@ptid", ptid);
        statement.Parameters.AddWithValue("@ptname", ptname);
        statement.ExecuteNonQuery();
        

        String strInsert1 = "insert into tu_ptitle values(@tid,@ptid)";
        SqlCommand statement1 = new SqlCommand(strInsert1, con);
        statement1.Parameters.AddWithValue("@tid", tid);
        statement1.Parameters.AddWithValue("@ptid", ptid);
        statement1.ExecuteNonQuery();

        con.Close();

        Response.AddHeader("Refresh","0");
    }

    //自动生成下一个论文标题的序号
    protected int getNextptid()
    {
        int ptid = 0;
        SqlDataReader rd;
        String conStr = ConfigurationSettings.AppSettings["conStrThesis"];
        SqlConnection conn = new SqlConnection(conStr);

        String sql = "select max(ptid) as ptid from papertitle";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            conn.Open();
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                ptid=Convert.ToInt32(rd["ptid"]);
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

        return ptid+1;
    }
    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {

    }
}

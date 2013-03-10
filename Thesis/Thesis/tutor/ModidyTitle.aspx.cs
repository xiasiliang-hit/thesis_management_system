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

public partial class tutor_ModidyTitle : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    //删除
    protected void Button2_Click(object sender, EventArgs e)
    {
        SqlConnection conn = new SqlConnection();
        conn = DBController.getConnection();

        String ptname = RadioButtonList1.SelectedValue.ToString();
        String strDelete = "delete from papertitle where ptname=@ptname";
        SqlCommand statement = new SqlCommand(strDelete, conn);
        statement.Parameters.AddWithValue("@ptname", ptname);
        statement.ExecuteNonQuery();

        int ptid=0;
        SqlDataReader rd;
        String sql = "select ptid from papertitle where ptname=@ptname";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                TextBox1.Text = ptid.ToString();
                ptid = Convert.ToInt32(rd["ptid"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }


        String strDelete1 = "delete from tu_ptitle where ptid=@ptid";
        SqlCommand statement1 = new SqlCommand(strDelete1, conn);
        statement1.Parameters.AddWithValue("@ptid", ptid);
        statement1.ExecuteNonQuery();

        conn.Close();
        RadioButtonList1.Items.Remove(ptname);
    }

    //修改
    protected void Button1_Click(object sender, EventArgs e)
    {
        Label1.Visible = true;
        TextBox1.Visible = true;
        Button3.Visible = true;
        
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        SqlConnection conn = new SqlConnection();
        conn = DBController.getConnection();
        if (conn.State != ConnectionState.Open)
        {
            conn.Open();
        }
        else
        { }

        String ptname = RadioButtonList1.SelectedValue.ToString();
        String newname = TextBox1.Text;
        String strUpdate = "update papertitle set ptname=@newname where ptname=@ptname";
        SqlCommand statement = new SqlCommand(strUpdate, conn);
        statement.Parameters.AddWithValue("@ptname", ptname);
        statement.Parameters.AddWithValue("@newname", newname);
        statement.ExecuteNonQuery();

        int ptid = 0;
        SqlDataReader rd;
        String sql = "select ptid from papertitle where ptname=@ptname";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                TextBox1.Text = ptid.ToString();
                ptid = Convert.ToInt32(rd["ptid"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }


        conn.Close();
        Response.AddHeader("Refresh", "0");
    }
}

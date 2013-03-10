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

public partial class student_viewPaperTitle : System.Web.UI.Page
{
    private String uidStr;
    private String sid;
    protected void Page_Load(object sender, EventArgs e)
    {
        uidStr = Request.QueryString["UID"];
        SqlConnection conn = new SqlConnection();
        conn = DBController.getConnection();
        if (conn.State != ConnectionState.Open)
        {
            conn.Open();
        }
        else
        { }

        sid = Request.QueryString["sid"];
        int count = 0;
        SqlDataReader rd;
        String sql = "select count(*) as count from st_ptitle where sid=@sid";

        SqlCommand cmd = new SqlCommand(sql, conn);
        cmd.Parameters.AddWithValue("@sid", sid);
        try
        {
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                count = Convert.ToInt32(rd["count"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        conn.Close();

        if (count != 0)
        {
            Response.Redirect("ViewPaperTitle1.aspx" + "?uid=" + uidStr.ToString()+"&sid="+sid.ToString());
        }

    }

    //选题
    protected void Button1_Click(object sender, EventArgs e)
    {
        //该学生导师对应的题目列表 select papertile from tu_ptitle where tid=(select tid from stu_tu where sid=userid)
        //String pt;
        //pt = RadioButtonList1.SelectedItem[1];//获取选定的论文题目编号
        //insert into st_ptitle values(sid,pt)

        String ptname = RadioButtonList1.SelectedValue.ToString();

        SqlConnection conn = new SqlConnection();
        conn = DBController.getConnection();

        //获取选择的论文题目编号
        int ptid = 0;
        SqlDataReader rd;
        String sql = "select ptid from papertitle where ptname=@ptname";
        SqlCommand cmd = new SqlCommand(sql, conn);
        try
        {
            rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                ptid = Convert.ToInt32(rd["ptid"]);
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        finally
        {
            //conn.Close();
        }


        String strInsert = "insert into st_ptitle values(@sid,@ptid)";
        SqlCommand statement = new SqlCommand(strInsert, conn);
        statement.Parameters.AddWithValue("@sid", sid);
        statement.Parameters.AddWithValue("@ptid", ptid);
        int success =0;
        try
        {
            success = statement.ExecuteNonQuery();
        }
        catch(Exception ex)
        {
            Response.Redirect("..\\error.aspx" + "?err=no sid " + ex.Message);
        }
        if (success > 0)
        {
            Response.Write("<script>alert('选题成功');location.href='ViewPaperTitle1.aspx?uid=" + Request.QueryString["UID"] + "&sid=" + sid.ToString() + "';</script>");
        }
        else
        {
            Response.Write("<script>alert('选题失败');location.href='ViewPaperTitle1.aspx?uid=" + Request.QueryString["UID"] + "&sid=" + sid.ToString() + "';</script>");
        }

        conn.Close();
        


    }
}

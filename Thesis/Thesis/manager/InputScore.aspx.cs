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


public partial class manager_InputScore : System.Web.UI.Page
{
    protected System.Web.UI.WebControls.TextBox txtpid;
    protected System.Web.UI.WebControls.TextBox txtgrade;
    //protected System.Web.UI.WebControls.Button Button1;
    protected System.Web.UI.WebControls.RequiredFieldValidator RequiredFieldValidator1;
    protected System.Web.UI.WebControls.RequiredFieldValidator RequiredFieldValidator2;
    protected System.Web.UI.WebControls.RangeValidator RangeValidator1;

    private SqlConnection conn = new SqlConnection();

    //private SqlConnection conn = new SqlConnection(System.Configuration.ConfigurationSettings.AppSettings["GradeSys"]);
    private void Page_Load(object sender, System.EventArgs e)
    {
        /* if(!Page.IsPostBack)
         {
             GetData();
         }*/
        // 在此处放置用户代码以初始化页面
        //conn = DBController.getConnection();
        //TextBox1.Text = ((TextBox)(GridView1.Rows[0].Cells[5].Controls[0])).Text.ToString();
    }

    /*
     private void GetData()
     {
         string sql = string.Empty;
         sql = string.Format("select paper.pid from paper join st_ptitle on paper.pid = st_ptitle.pid");
         SqlDataAdapter da = new SqlDataAdapter(sql,conn);
         DataSet ds = new DataSet();
         try
         {
             da.Fill(ds,"t");
             this.GridView1.DataSource = ds.Tables["t"];
             this.GridView1.DataBind();
         }
         catch(Exception ex)
         {
             Response.Write(ex);
         }
     }*/



    protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
    {
        this.GridView1.EditIndex = e.NewEditIndex;
        //BindData();

    }

    //public void BindData()             //用来绑定数据到GridView
    //{
    //    conn = DBController.getConnection();

    //    SqlDataAdapter ada = new SqlDataAdapter("SELECT paper.pid AS 论文编号, paper.pname AS 论文题目, student.name AS 学生姓名, paper.dt AS 提交时间,paper.score AS 成绩 FROM paper, student WHERE paper.studentID=student.sid and paper.type = 3", conn);
    //    DataSet ds = new DataSet();
    //    ada.Fill(ds);
    //    this.GridView1.DataSource = ds;
    //    this.GridView1.DataBind();
    //    conn.Close();
    //}


    protected void GridView1_RowUpdating(object sender, GridViewUpdateEventArgs e)
    {
        
        int i = this.GridView1.EditIndex;　//e.RowIndex是当前被选中的行号．

        //DataKey key = this.GridView1.DataKeys[e.RowIndex];   //key是个数组,前提是要在属性DataKeyNames中设置数据库字段，通常是选主键．     
        //String pid = key[0].ToString(); //key[]就可以取得字段对应的值     
        String sid = ((TextBox)(GridView1.Rows[i].Cells[1].Controls[0])).Text;
        int score = int.Parse(((TextBox)GridView1.Rows[i].Cells[4].Controls[0]).Text);

        /*
         * 连接数据库，提交更新的资料
        */
        conn = DBController.getConnection();
        SqlCommand cmd = new SqlCommand("update paper set score='" + score + "' where studentID=" + sid, conn);
        cmd.ExecuteNonQuery();
        //Response.Write("<script>alert('更新成功！')</script>");
        //刷新页面
        Response.AddHeader("Refresh", "0");

        //回到编辑页面，准备下一次的修改
        this.GridView1.EditIndex = -1;
        //BindData();
        conn.Close();
    }
    protected void Button1_Click(object sender, EventArgs e)
    {

    }
}

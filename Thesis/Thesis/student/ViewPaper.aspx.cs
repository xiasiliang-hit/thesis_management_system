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
using System.IO;
using System.Data.SqlClient;

//using System.Data.SQL;

public partial class student_ViewPaper : System.Web.UI.Page
{
    private Boolean loginState = false;
    private SqlConnection myConnection;
    private SqlCommand myCommand;
    private DataSet ds;

    private string app_studentID = ConfigurationSettings.AppSettings["testID"];
    private string openTitleID;
    private string openTitleName;
    private string midExamName;
    private string midExamID;
    private string firstPaperName;
    private string firstPaperID;

    //protected System.Web.UI.WebControls.LinkButton OpenTitleLink;
    //protected System.Web.UI.WebControls.LinkButton MidExamLink;
    //protected System.Web.UI.WebControls.LinkButton FirstPaperLink;

    protected void Page_Load(object sender, EventArgs e)
    {
        //to check the authority of the user and get the student ID
        //checkAndGetStudentID();

        //connect to the database
        connectDB();
        //app_studentID = ConfigurationSettings.AppSettings["sid"];
        //search the database to see the paper the students have submitted
        showOpenTitlePaper();
        showMidExamPaper();
        showFirstPaper();

    }
    /*public void checkAndGetStudentID()
    {
        String uidStr = Request.QueryString["UID"];

        UserIdentifier.Identify user = new UserIdentifier.Identify();
        if (uidStr != null)
        {
            Guid uidGuid = new Guid(uidStr);
            studentId = UserIdentifier.getIDByUID(uidGuid);
            user = UserIdentifier.getIdentifierByID(studentId);
        }
        else
        {
            user = UserIdentifier.Identify.NONAUTHORITY;
        }
        //根据user值进行跳转
        if (user == UserIdentifier.Identify.STUDENT)
        {
            loginState = true;
        }
        else
        {
            Response.Write("<script>alert('您无权操作此页面');</script>");
        }
    }*/
    public void connectDB()//connect to the database
    {
        //connect to the database
        //DBController dbControl = new DBController();
        //myConnection = dbControl.getConnection();

        myConnection = new SqlConnection(ConfigurationSettings.AppSettings["conStrThesis"]);
        //myConnection = new SqlConnection("server=localhost; uid=; pwd=; database=thesis");
        myConnection.Open();
    }

    public void showOpenTitlePaper()
    {
        //myCommand = new SqlCommand("select pname from [paper] where studentID = studentId and type = '1'", myConnection);
        //myCommand.ExecuteReader();

        //myConnection = new SQLConnection("server=localhost;uid=sa;pwd=;database=thesis");
        //myCommand = new SqlCommand("select pname from [paper] where studentID = studentId and type = '1'", myConnection);
        //ds = new DataSet();
        //myCommand.ExecuteReader();
        //int iRowCount = myCommand.FillDataSet(ds, "paper");

        //int ptid = 0;
        SqlDataReader rd;
        String sql = "select pid, pname from paper where studentID=@app_studentID and type = 1";
        myCommand = new SqlCommand(sql, myConnection);
        myCommand.Parameters.AddWithValue("@app_studentID", app_studentID);
        //myCommand.Parameters.AddWithValue("@app_studentID", app_studentID);

        try
        {
            rd = myCommand.ExecuteReader();
            while (rd.Read())
            {
                openTitleName = Convert.ToString(rd["pname"]);
                openTitleID = Convert.ToString(rd["pid"]);
                //TextBox1.Text = openTitleID;
                //TextBox2.Text = openTitleName;
                OpenTitleLink.Text = openTitleName; 
            }
            rd.Close();
            
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }

        /*String sqlselect = "select pname from paper where studentID ='" + app_studentId + "' and type = 1";
        SqlDataAdapter myData = new SqlDataAdapter(sqlselect, myConnection);
        ds = new DataSet();*/
        //DataRow row;
        //sqlcon.Open();
        //myData.Fill(ds);
        //sqlcon.Close();
        /*for(int i=0; i< iRowCount; i++)
        {
            DataRow dr = ds.Tables[0].Rows[i];
            Console.WriteLine(dr["au_lname"]);
        }*/
        //DataRow row;
        /*if (ds.Tables[0].Rows.Count > 0)
        {
            row = ds.Tables[0].Rows[0];
            OpenTitleLink.Text = Server.HtmlEncode(row["pname"].ToString());
            openTitleName = Server.HtmlEncode(row["pname"].ToString());
            openTitleID = Server.HtmlEncode(row["pid"].ToString());
        }
        else
        {
            //Response.Write("<script>alert('没有搜索到对应的数据');</script>");
        }*/      
    }
    public void showMidExamPaper()
    {
        SqlDataReader rd;
        String sql = "select pname,pid from paper where studentID=@app_studentID and type = 2";
        myCommand = new SqlCommand(sql, myConnection);
        myCommand.Parameters.AddWithValue("@app_studentID", app_studentID);
        try
        {
            rd = myCommand.ExecuteReader();
            while (rd.Read())
            {
                midExamName = Convert.ToString(rd["pname"]);
                midExamID = Convert.ToString(rd["pid"]);
                MidExamLink.Text = midExamName;
            }
            rd.Close();
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }

        /*String sqlselect = "select pname from paper where studentID ='" + app_studentId + "' and type = 2";
        SqlDataAdapter myData = new SqlDataAdapter(sqlselect, myConnection);
        ds = new DataSet();*/
        //DataRow row;
        //sqlcon.Open();
        //myData.Fill(ds);
        //sqlcon.Close();
        /*for(int i=0; i< iRowCount; i++)
        {
            DataRow dr = ds.Tables[0].Rows[i];
            Console.WriteLine(dr["au_lname"]);
        }*/
        /*DataRow row;
        if (ds.Tables[0].Rows.Count > 0)
        {
            row = ds.Tables[0].Rows[0];
            MidExamLink.Text = Server.HtmlEncode(row["pname"].ToString());
            midExamName = Server.HtmlEncode(row["pname"].ToString());
            midExamID = Server.HtmlEncode(row["pid"].ToString());
        }
        else
        {
            //Response.Write("<script>alert('没有搜索到对应的数据');</script>");
        }*/      
    }
    public void showFirstPaper()
    {
        SqlDataReader rd;
        String sql = "select pname,pid from paper where studentID=@app_studentID and type = 3";
        myCommand = new SqlCommand(sql, myConnection);
        myCommand.Parameters.AddWithValue("@app_studentID", app_studentID);
        try
        {
            rd = myCommand.ExecuteReader();
            while (rd.Read())
            {
                firstPaperName = Convert.ToString(rd["pname"]);
                firstPaperID = Convert.ToString(rd["pid"]);
                FirstPaperLink.Text = firstPaperName;
            }
        }
        catch (Exception err)
        {
            Console.Write(err.Message);
        }
        /*String sqlselect = "select pname from paper where studentID ='" + app_studentId + "' and type = 3";
        SqlDataAdapter myData = new SqlDataAdapter(sqlselect, myConnection);
        ds = new DataSet();*/
        //DataRow row;
        //sqlcon.Open();
        //myData.Fill(ds);
        //sqlcon.Close();
        /*for(int i=0; i< iRowCount; i++)
        {
            DataRow dr = ds.Tables[0].Rows[i];
            Console.WriteLine(dr["au_lname"]);
        }*/
        //DataRow row;
        /*if (ds.Tables[0].Rows.Count > 0)
        {
            row = ds.Tables[0].Rows[0];
            FirstPaperLink.Text = Server.HtmlEncode(row["pname"].ToString());
            firstPaperName = Server.HtmlEncode(row["pname"].ToString());
            firstPaperID = Server.HtmlEncode(row["pid"].ToString());
        }
        else
        {
            //Response.Write("<script>alert('没有搜索到对应的数据');</script>");
        }  */
    }

    /*protected void downLoadFile(object sender, EventArgs e)   
    {   
        //using System.IO;   
        
        string fileName = openTitleName;//客户端保存的文件名    
        string filePath = Server.MapPath("DownLoad/" + openTitleID);//路径   

        FileInfo fileInfo = new FileInfo(filePath);   
        Response.Clear();   
        Response.ClearContent();   
        Response.ClearHeaders();   
        Response.AddHeader("Content-Disposition", "attachment;filename=" + fileName);   
        Response.AddHeader("Content-Length", fileInfo.Length.ToString());   
        Response.AddHeader("Content-Transfer-Encoding", "binary");
        Response.ContentType = "application/msword";   
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("gb2312");   
        Response.WriteFile(fileInfo.FullName);   
        Response.Flush();   
        Response.End();   
    }*/
    
    protected void OpenTitleLink_Click(object sender, EventArgs e)
    {
        //using System.IO;   

        string fileName = openTitleName;//客户端保存的文件名    
        string filePath = Server.MapPath("PaperUploads/" + openTitleID);//路径   

        FileInfo fileInfo = new FileInfo(filePath);
        Response.Clear();
        Response.ClearContent();
        Response.ClearHeaders();
        Response.AddHeader("Content-Disposition", "attachment;filename=" + fileName);
        Response.AddHeader("Content-Length", fileInfo.Length.ToString());
        Response.AddHeader("Content-Transfer-Encoding", "binary");
        Response.ContentType = "application/msword";
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("gb2312");
        Response.WriteFile(fileInfo.FullName);
        Response.Flush();
        Response.End(); 
    }
    protected void MidExamLink_Click(object sender, EventArgs e)
    {
        //using System.IO;   

        string fileName = midExamName;//客户端保存的文件名    
        string filePath = Server.MapPath("PaperUploads/" + midExamID);//路径   

        FileInfo fileInfo = new FileInfo(filePath);
        Response.Clear();
        Response.ClearContent();
        Response.ClearHeaders();
        Response.AddHeader("Content-Disposition", "attachment;filename=" + fileName);
        Response.AddHeader("Content-Length", fileInfo.Length.ToString());
        Response.AddHeader("Content-Transfer-Encoding", "binary");
        Response.ContentType = "application/msword";
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("gb2312");
        Response.WriteFile(fileInfo.FullName);
        Response.Flush();
        Response.End();
    }
    protected void FirstPaperLink_Click(object sender, EventArgs e)
    {
        //using System.IO;   


        //String path = ConfigurationSettings.AppSettings["tesisPath"];

        string fileName = firstPaperName;//客户端保存的文件名 
        //string savDir = 
        string filePath = Server.MapPath("PaperUploads/" + firstPaperID);//路径   

        FileInfo fileInfo = new FileInfo(filePath);
        Response.Clear();
        Response.ClearContent();
        Response.ClearHeaders();
        Response.AddHeader("Content-Disposition", "attachment;filename=" + fileName);
        Response.AddHeader("Content-Length", fileInfo.Length.ToString());
        Response.AddHeader("Content-Transfer-Encoding", "binary");
        Response.ContentType = "application/msword";
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("gb2312");
        Response.WriteFile(fileInfo.FullName);
        Response.Flush();
        Response.End();
    }
}

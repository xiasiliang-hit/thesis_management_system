using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;


public partial class student_SubmitPaper : System.Web.UI.Page
{
    //private string OpenTitleName = OpenTitleUpload.FileName;
    string connectionString;
    SqlConnection myConnection;
    DataSet ds;
    private SqlCommand myCommand;

    private string app_studentID = ConfigurationSettings.AppSettings["testID"];//the identifier of the student used in the application
    private string openTitleId;
    private string midExamId;
    private string firstPaperId;

    String UIDStr = null;
    String IDStr = null;
    UserIdentifier.Identify user = UserIdentifier.Identify.NONAUTHORITY;

    protected void Page_Load(object sender, EventArgs e)
    {

        //IDStr = ConfigurationSettings.AppSettings["testID"];
        //user = UserIdentifier.Identify.ADMINISTRATOR;

        UIDStr = Request.QueryString["UID"];
        user = new UserIdentifier.Identify();
        
        //if (UIDStr != null)
        //{
        //    IDStr = UserIdentifier.getIDByUID(UIDStr);
        //    user = UserIdentifier.getIdentifierByID(IDStr);
        //}
        //else
        //{
        //    //            user = UserIdentifier.Identify.NONAUTHORITY;
        //}

        //if (user == UserIdentifier.Identify.NONAUTHORITY)
        //{
        //    Response.Redirect("error.aspx");
        //}
        //else if (user == UserIdentifier.Identify.ADMINISTRATOR)
        //{
        //}
        //else if (user == UserIdentifier.Identify.TEACHER)
        //{
        //    Response.Redirect("error.aspx");
        //}
        //else if (user == UserIdentifier.Identify.STUDENT)
        //{
        //    Response.Redirect("error.aspx");
        //}

        app_studentID = Request.QueryString["sid"];
        //to check the authority of the user and get the student ID
        //checkAndGetStudentID();
    }

    /*public void checkAndGetStudentID()
    {
        String uidStr = Request.QueryString["UID"];

        UserIdentifier.Identify user = new UserIdentifier.Identify();
        if (uidStr != null)
        {
            Guid uidGuid = new Guid(uidStr);
            app_studentID = UserIdentifier.getIDByUID(uidGuid);
            user = UserIdentifier.getIdentifierByID(app_studentID);
        }
        else
        {
            user = UserIdentifier.Identify.NONAUTHORITY;
        }
        //根据user值进行跳转
        if (user == UserIdentifier.Identify.STUDENT)
        {
            //loginState = true;
        }
        else
        {
            Response.Write("<script>alert('您无权操作此页面');</script>");
        }
    }*/

    protected void OpenTitleText_TextChanged(object sender, EventArgs e)
    {

    }

    public void connectDB()//connect to the database
    {
        //connect to the database
        //DBController dbControl = new DBController();
        //myConnection = dbControl.getConnection();
        String conStr = ConfigurationSettings.AppSettings["conStrThesis"];
        myConnection = new SqlConnection(conStr);
        //myConnection = new SqlConnection("server=localhost; uid=; pwd=; database=thesis");
        myConnection.Open();
    }

    protected void OpenTitleSub_Click(object sender, EventArgs e)
    {
        if (Request.QueryString["sid"] == null)
        {
            Response.Redirect("..\\Error.aspx" + "?err=" + "no sid");
        }

        //the data that should be inserted into the database       
        //openTitleId = app_studentID + DateTime.Now.ToString();
        System.DateTime currentTime = new System.DateTime();
        currentTime = System.DateTime.Now;

        //还可以考虑只能够上传制定格式的文件
        // Save the uploaded file to an "Uploads" directory
        // that already exists in the file system of the 
        // currently executing ASP.NET application.  
        // Creating an "Uploads" directory isolates uploaded 
        // files in a separate directory. This helps prevent
        // users from overwriting existing application files by
        // uploading files with names like "Web.config".
        //string saveDir = @"\PaperUploads\";

        // Get the physical file system path for the currently
        // executing application.具体用处不太清楚
        //string appPath = Request.PhysicalApplicationPath;

        //string openTitleName = OpenTitleUpload.FileName;
        string openTitleName = this.OpenTitleUpload.FileName;
        string type = openTitleName.Substring(openTitleName.LastIndexOf(".") + 1);    
        //获取上传文件的后缀    

        if (openTitleName != "")    
        {
            string newName = app_studentID + DateTime.Now.Year.ToString() + DateTime.Now.Month.ToString() + DateTime.Now.Day.ToString() + DateTime.Now.Hour.ToString() + DateTime.Now.Minute.ToString() + DateTime.Now.Second.ToString() + "." + type;    
            //更改上传文件名
            openTitleId = newName;

            string path = Server.MapPath("PaperUploads") + "\\" + newName;
            OpenTitleUpload.SaveAs(path);    
        }  
        else
        {
            Response.Write("<script>alert('没有相应文件');</script>");
            return;
        }

        connectDB();//write the information of the file into the database,such as ID,name,time,type

        //insert into some record
        String strInsert = "insert into paper values(@pid,@pname,@studentID,@type,@dt,@score)";
        myCommand = new SqlCommand(strInsert, myConnection);
        myCommand.Parameters.AddWithValue("@pid", openTitleId);
        myCommand.Parameters.AddWithValue("@pname", openTitleName);
        myCommand.Parameters.AddWithValue("@studentID", app_studentID);
        myCommand.Parameters.AddWithValue("@type", 1);
        myCommand.Parameters.AddWithValue("@dt", currentTime);
        myCommand.Parameters.AddWithValue("@score", 0);
        myCommand.ExecuteNonQuery();

        Response.Write("<script>alert('文件上传成功！');</script>");
    }

    private void SqlCommand(string p, SqlConnection mySqlConnection)
    {
        throw new NotImplementedException();
    }

    protected void MidExamSub_Click1(object sender, EventArgs e)
    {
        //the data that should be inserted into the database       
        //midExamId = app_studentID + DateTime.Now.ToString();
        System.DateTime currentTime = new System.DateTime();
        currentTime = System.DateTime.Now;

        //还可以考虑只能够上传制定格式的文件
        // Save the uploaded file to an "Uploads" directory
        // that already exists in the file system of the 
        // currently executing ASP.NET application.  
        // Creating an "Uploads" directory isolates uploaded 
        // files in a separate directory. This helps prevent
        // users from overwriting existing application files by
        // uploading files with names like "Web.config".
        //string saveDir = @"\PaperUploads\";

        // Get the physical file system path for the currently
        // executing application.具体用处不太清楚
        //string appPath = Request.PhysicalApplicationPath;

        //string openTitleName = OpenTitleUpload.FileName;
        string midExamName = this.MidExamUpload.FileName;
        string type = midExamName.Substring(midExamName.LastIndexOf(".") + 1);
        //获取上传文件的后缀    

        if (midExamName != "")
        {
            string newName = app_studentID + DateTime.Now.Year.ToString() + DateTime.Now.Month.ToString() + DateTime.Now.Day.ToString() + DateTime.Now.Hour.ToString() + DateTime.Now.Minute.ToString() + DateTime.Now.Second.ToString() + "." + type;
            //更改上传文件名 
            midExamId = newName;

            string path = Server.MapPath("PaperUploads") + "\\" + newName;
            MidExamUpload.SaveAs(path);
        }
        else
        {
            Response.Write("<script>alert('没有相应文件');</script>");
        }
        // Before attempting to save the file, verify
        // that the FileUpload control contains a file.
        /*if (OpenTitleUpload.HasFile)
        {
            //string OpenTitleName = OpenTitleUpload.FileName;

            string savePath = appPath + saveDir +
                Server.HtmlEncode(openTitleId);
            //OpenTitleText.Text = OpenTitleName + "文档已正确上传";//add the new uploaded file to this link 

            //时间充裕的话添加一个超链接

            // Call the SaveAs method to save the 
            // uploaded file to the specified path.
            // This example does not perform all
            // the necessary error checking.               
            // If a file with the same name
            // already exists in the specified path,  
            // the uploaded file overwrites it.
            OpenTitleUpload.SaveAs(savePath);

            // Notify the user that the file was uploaded successfully.
            //UploadStatusLabel.Text = "Your file was uploaded successfully.";

        }
        else
        {
            // Notify the user that a file was not uploaded.
            //UploadStatusLabel.Text = "You did not specify a file to upload.";
        }*/

        connectDB();//write the information of the file into the database,such as ID,name,time,type

        //insert into some record
        String strInsert = "insert into paper values(@pid,@pname,@studentID,@type,@dt,@score)";
        myCommand = new SqlCommand(strInsert, myConnection);
        myCommand.Parameters.AddWithValue("@pid", midExamId);
        myCommand.Parameters.AddWithValue("@pname", midExamName);
        myCommand.Parameters.AddWithValue("@studentID", app_studentID);
        myCommand.Parameters.AddWithValue("@type", 1);
        myCommand.Parameters.AddWithValue("@dt", currentTime);
        myCommand.Parameters.AddWithValue("@score", 0);
        myCommand.ExecuteNonQuery();

        Response.Write("<script>alert('文件上传成功！');</script>");
    }
    protected void FirstPaperSub_Click1(object sender, EventArgs e)
    {
        //the data that should be inserted into the database       
        //midExamId = app_studentID + DateTime.Now.ToString();
        System.DateTime currentTime = new System.DateTime();
        currentTime = System.DateTime.Now;

        //还可以考虑只能够上传制定格式的文件
        // Save the uploaded file to an "Uploads" directory
        // that already exists in the file system of the 
        // currently executing ASP.NET application.  
        // Creating an "Uploads" directory isolates uploaded 
        // files in a separate directory. This helps prevent
        // users from overwriting existing application files by
        // uploading files with names like "Web.config".
        //string saveDir = @"\PaperUploads\";

        // Get the physical file system path for the currently
        // executing application.具体用处不太清楚
        //string appPath = Request.PhysicalApplicationPath;

        //string openTitleName = OpenTitleUpload.FileName;
        string firstPaperName = this.FirstPaperUpload.FileName;
        string type = firstPaperName.Substring(firstPaperName.LastIndexOf(".") + 1);
        //获取上传文件的后缀    

        if (firstPaperName != "")
        {
            string newName = app_studentID + DateTime.Now.Year.ToString() + DateTime.Now.Month.ToString() + DateTime.Now.Day.ToString() + DateTime.Now.Hour.ToString() + DateTime.Now.Minute.ToString() + DateTime.Now.Second.ToString() + "." + type;
            //更改上传文件名 
            firstPaperId = newName;

            string path = Server.MapPath("PaperUploads") + "\\" + newName;
            FirstPaperUpload.SaveAs(path);
        }
        else
        {
            Response.Write("<script>alert('没有相应文件');</script>");
        }

        connectDB();//write the information of the file into the database,such as ID,name,time,type

        //insert into some record
        String strInsert = "insert into paper values(@pid,@pname,@studentID,@type,@dt,@score)";
        myCommand = new SqlCommand(strInsert, myConnection);
        myCommand.Parameters.AddWithValue("@pid", firstPaperId);
        myCommand.Parameters.AddWithValue("@pname", firstPaperName);
        myCommand.Parameters.AddWithValue("@studentID", app_studentID);
        myCommand.Parameters.AddWithValue("@type", 1);
        myCommand.Parameters.AddWithValue("@dt", currentTime);
        myCommand.Parameters.AddWithValue("@score", 0);
        myCommand.ExecuteNonQuery();

        Response.Write("<script>alert('文件上传成功！');</script>");
        //myCommand = new SqlCommand("insert into [paper] values( '" + openTitleId + "', '" + openTitleName + "'," + "1" + "', '" + currentTime + "'," + "0" + ", '" + app_studentID + "')", myConnection);
        //myCommand.ExecuteNonQuery();
        //myCommand = new SqlCommand("insert into [paper] values( '" + firstPaperId + "', '" + firstPaperName + "'," + "1" + "', '" + currentTime + "'," + "0" + ", '" + app_studentID + "')", myConnection);
        //myCommand.ExecuteNonQuery();

        //add the paper to the view page
    }
    
}

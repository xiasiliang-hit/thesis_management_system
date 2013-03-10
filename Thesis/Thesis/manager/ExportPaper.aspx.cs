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
using System.Text;
using ICSharpCode.SharpZipLib.Checksums;
using ICSharpCode.SharpZipLib.Zip;
using ICSharpCode.SharpZipLib.GZip;

public partial class manager_ExportPaper : System.Web.UI.Page
{
    ZipOutputStream zos = null;
    String strBaseDir = "";

    String UIDStr = null;
    String IDStr = null;
    UserIdentifier.Identify user = UserIdentifier.Identify.NONAUTHORITY;

    protected void Page_Load(object sender, EventArgs e)
    {
//IDStr = ConfigurationSettings.AppSettings["falseID"];
//user = UserIdentifier.Identify.ADMINISTRATOR;


        UIDStr = Request.QueryString["UID"];
        IDStr = Request.QueryString["aid"];
    }
        
    protected void ExportButton_Click(object sender, EventArgs e)
    {
        String relativePathFromPage = ConfigurationSettings.AppSettings["tesisPath"];
        String path = Server.MapPath(relativePathFromPage);
        ExportFiles(path, "论文导出");
        //OutPutExcel();

    }

    public void OutPutExcel()
    {
        //定义文档类型、字符编码
        Response.Clear();
        Response.Buffer = true;
        Response.Charset = "GB2312";

        //attachment 参数表示作为附件下载
        Response.AppendHeader("Content-Disposition", "attachment;filename=PaperInfo.xls");
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("GB2312");
        Response.ContentType = "application/ms-excel";
        this.EnableViewState = false;

        //　定义一个输入流
        System.IO.StringWriter oStringWriter = new System.IO.StringWriter();
        System.Web.UI.HtmlTextWriter oHtmlTextWriter = new System.Web.UI.HtmlTextWriter(oStringWriter);

        GridView1.AllowPaging = false;
        GridView1.AllowSorting = false;
        GridView1.DataBind(); 
        GridView1.RenderControl(oHtmlTextWriter);

        Response.Write(oStringWriter.ToString());
        Response.End();
    }
    public override void VerifyRenderingInServerForm(Control control)
    {
    }




    public void ExportFiles(string strPath, string strFileName)
    {
        MemoryStream ms = null;
        
        Response.ContentType = "application/octet-stream";
        strFileName = HttpUtility.UrlEncode(strFileName).Replace('+', ' ');
        Response.AddHeader("Content-Disposition", "attachment;   filename=" + strFileName + ".zip");
        ms = new MemoryStream();
        zos = new ZipOutputStream(ms);
        strBaseDir = strPath + "\\";
        addZipEntry(strBaseDir);
        zos.Finish();
        zos.Close();
        Response.Clear();
        Response.BinaryWrite(ms.ToArray());
        Response.End();
    }
    void addZipEntry(string PathStr)
    {
        DirectoryInfo di = new DirectoryInfo(PathStr);
        foreach (DirectoryInfo item in di.GetDirectories())
        {
            addZipEntry(item.FullName);
        }
        foreach (FileInfo item in di.GetFiles())
        {
            FileStream fs = File.OpenRead(item.FullName);
            byte[] buffer = new byte[fs.Length];
            fs.Read(buffer, 0, buffer.Length);
            string strEntryName = item.FullName.Replace(strBaseDir, "");
            ZipEntry entry = new ZipEntry(strEntryName);
            zos.PutNextEntry(entry);
            zos.Write(buffer, 0, buffer.Length);
            fs.Close();
        }
    }
    protected void getName()
    {
 
    }
}
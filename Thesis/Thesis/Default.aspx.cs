using System;
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

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {

        String UIDStr = Request.QueryString["UID"];
        String IDStr = null;
        UserIdentifier.Identify user = new UserIdentifier.Identify();
///~
        //测试学生id，默认
        IDStr = ConfigurationSettings.AppSettings["testID"];
        user = UserIdentifier.Identify.STUDENT;

        //测试教师id
        //IDStr = "90001";
        //user = UserIdentifier.Identify.TEACHER;

        //测试管理员id
        //IDStr = "10000";
        //user = UserIdentifier.Identify.ADMINISTRATOR;


        if (UIDStr != null)
        {
            try
            {
                IDStr = UserIdentifier.getIDByUID(UIDStr);

            }
            catch (Exception ex)
            {
                Response.Redirect("error.aspx?" + "err=guid error:" + ex.Message);
            } 
            user = UserIdentifier.getIdentifierByID(IDStr);
        }
        else //uid == null
        {
//            user = UserIdentifier.Identify.NONAUTHORITY;
        }


        if (user == UserIdentifier.Identify.STUDENT)
		{
            Response.Redirect("student\\ViewNotice.aspx" + "?uid=" + UIDStr + "&sid=" + IDStr + "&tid=" + IDStr + "&aid=" + IDStr);
            //为了在没有拿到权限管理模块给的UID情况下，测试能够正常进行,把sid，aid，tid都加上了
        }
        else if (user == UserIdentifier.Identify.TEACHER)
        {
            Response.Redirect("tutor\\ViewNotice.aspx" + "?uid=" + UIDStr + "&tid=" + IDStr);
        }
        else if (user == UserIdentifier.Identify.ADMINISTRATOR)
        {
            Response.Redirect("manage\\ManageNotice.aspx" + "?uid=" + UIDStr + "&aid=" + IDStr);
        }
        else if (user == UserIdentifier.Identify.NONAUTHORITY)
        {
            Response.Redirect("Error.aspx");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.SqlClient;
using System.Data;
using System.Configuration;

/// <summary>
///UserIdentifier 的摘要说明
/// </summary>
public static class UserIdentifier
{
    //function: get real student id or tutor id 
    //parameter: unique id from querystring in url
    public static String getIDByUID(String pUID)
    {
        String IDStr = null;
        Guid uidGuid;

        if (pUID != null)
        {
            try
            {
                uidGuid = new Guid(pUID);
            }
            catch (Exception exGuid)
            {
                throw exGuid;
            }

            String conStr = ConfigurationSettings.AppSettings["conStrBasicInfo"];
            SqlConnection conn = new SqlConnection(conStr);//(ConfigurationManager.ConnectionStrings[constr].ConnectionString);

            if (conn != null)
            {
                conn.Close();
            }
            conn.Open();

            //invoke the procedure in other module
            SqlCommand cmd = new SqlCommand("give_basicinfo", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@uid", uidGuid);
            cmd.Parameters.Add("@StudentID", SqlDbType.VarChar, 50);
            cmd.Parameters["@StudentID"].Direction = ParameterDirection.Output;

            cmd.ExecuteNonQuery();

            IDStr = cmd.Parameters["@studentID"].Value.ToString();

            conn.Close();
        }
        else
        { }

        return IDStr;
    }

    //functon: get authority in this module
    //parameter: real id
    public static Identify getIdentifierByID(String pID)
    {
        String moduleId = "7";

        String conStr = ConfigurationSettings.AppSettings["conStrManage"];
        SqlConnection conn = new SqlConnection(conStr);

        if (conn != null)
        {
            conn.Close();
        }
        conn.Open();

        //invoke the procedure in other module
        SqlCommand cmd = new SqlCommand("get_authority", conn);
        cmd.CommandType = CommandType.StoredProcedure;


        cmd.Parameters.AddWithValue("@p_userid", pID);
        cmd.Parameters.AddWithValue("@p_moduleid", moduleId);

        cmd.Parameters.Add("@auth", SqlDbType.VarChar, 50);
        cmd.Parameters["@auth"].Direction = ParameterDirection.ReturnValue;

        cmd.ExecuteNonQuery();

        String authStr = cmd.Parameters["@auth"].Value.ToString();

        conn.Close();

        Identify tempIdentify = new Identify();

        if (authStr.Equals("student") )
        {
            tempIdentify = Identify.STUDENT;
        }

        else if (authStr.Equals("teacher"))
        {
            tempIdentify = Identify.TEACHER;
        }

        else if (authStr.Equals("administrator"))
        {
            tempIdentify = Identify.ADMINISTRATOR;
        }

        else if (authStr == null)
        {
            tempIdentify = Identify.NONAUTHORITY;
        }
         
        return tempIdentify;
    }
    public static String UID;
    public static String rid;
    public enum Identify { NONAUTHORITY = 0, STUDENT = 1, TEACHER = 2, ADMINISTRATOR = 3 };
}

/*
需要根据用户身份跳转的时候如下
在该页的load事件中取uid字段
调用UserIdentifier.IsLogin(uidGuid)，返回用户身份，


protected void Page_Load(object sender, EventArgs e)
    {
 
        String uidStr = Request.QueryString["UID"];

        UserIdentifier.Identify user = new UserIdentifier.Identify();
        if (uidStr != null)
        {
            Guid uidGuid = new Guid(uidStr);
            String IDStr = UserIdentifier.getIDByUID(uidGuid); 
            user = UserIdentifier.(IDStr);
        }
        else
        {
            user = UserIdentifier.Identify.NONAUTHORITY;
        }

        //根据user值进行跳转
		if(user == UserIdentifier.Identify.STUDENT)
		{}
		else if()
		{}
		...




    }
	*/

	//模块内部的页面跳转redirect的时候url后面一直带着uid信息
	//如 aspx？uid=。。。
    //Response.Redirect("default2.aspx" + "?uid=" + uidStr.ToString());
//uid 就是pageload时候在Request.QueryString取得的
﻿using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;

/// <summary>
///db 的摘要说明
/// </summary>
public class db
{
	public db()
	{
		//
		//TODO: 在此处添加构造函数逻辑
		//
	}

    public static string connDB()
    {
        string connectionStrings = System.Configuration.ConfigurationManager.ConnectionStrings["ThesisConnectionString"].ConnectionString;
        return connectionStrings;
    }
}

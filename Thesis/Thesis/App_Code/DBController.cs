using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data;
using System.Data.SqlClient;
using System.Configuration;

/// <summary>
///DBController 的摘要说明
/// </summary>


public static class DBController

{
    /*
    public DBController()
    {
        //
        //TODO: 在此处添加构造函数逻辑
        //
    }*/
    /*
    public static void test()
    {
        String rs; 

        SqlDataAdapter adapter = new SqlDataAdapter();
        String queryString = "select * from papertitle";

        adapter.SelectCommand = new SqlCommand(queryString, con);
        DataSet ds = new DataSet();
        adapter.Fill(ds, "ptid");

        foreach(DataRow dr in ds.Tables["Admin"].Rows)
        {
            rs = dr["ptid"].ToString();
            Console.WriteLine(rs);
        }
        
        //return dataset;
    }*/

    public static SqlConnection getConnection()
    {
        conStr = ConfigurationSettings.AppSettings["conStrThesis"];
        SqlConnection con = new SqlConnection(conStr);

        if (con != null)
        {
            con.Close();
        }
        else 
        { }

        con.Open();

        if (con == null)
        {
            Console.WriteLine("con fail");
        }
        else
        { }

        return con;
    }
    static String conStr;

    //static SqlConnection con;
    //SqlCommand statement;
}

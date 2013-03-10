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

public partial class SMasterPage : System.Web.UI.MasterPage
{
    String UIDStr = "";
    String sidStr = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        UIDStr = Request.QueryString["UID"];
        sidStr = Request.QueryString["sid"];
        //String uidStr = Request.QueryString["UID"]; 
        //((HyperLink)(this.Master.FindControl("TreeView1").FindControl("ViewTutorInfo"))).NavigateUrl = "~/manager/ViewTutorInfo.aspx?" + uidStr;
    }
    protected void TreeView1_SelectedNodeChanged(object sender, EventArgs e)
    {
        foreach (TreeNode node in this.TreeView1.Nodes)
        {
            node.NavigateUrl += "?UID=" + UIDStr + "&sid=" + sidStr;
            foreach (TreeNode cnode in node.ChildNodes)
            {
                cnode.NavigateUrl += "?UID=" + UIDStr + "&sid=" + sidStr;
            }
        }
    }
}

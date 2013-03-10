<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="ViewMessage.aspx.cs" Inherits="manager_ViewMessage" Title="查看留言" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            height: 30px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
 <table border="1" width="100%"> 
        <asp:Repeater ID="rpMessage" runat="server">
            <HeaderTemplate>
                    <tr>
            <th colspan="5">
                <a href="AddMessage.aspx?uid=<%# uidStr %>&sid=<%# Request.QueryString["sid"] %>">&#26032;&#30041;&#35328;</a>
            </th>
        </tr>
                    <tr>
                        <th width="50%">&#26631;&#39064;</th>
                        <th width="15%">&#21457;&#36215;&#32773;</th>
                        <th width="15%">&#25509;&#25910;&#32773;</th>
                        <th width="15%">&#21457;&#34920;&#26102;&#38388;</th>
                        <th>&#29366;&#24577;</th>
                    </tr>
            </HeaderTemplate>
        
            <ItemTemplate>
                <tr>
                    <td><a href="ViewDetailMessage.aspx?uid=<%# uidStr %>&sid=<%# Request.QueryString["sid"] %>&mid=<%#Eval("mid") %>"><%#DataBinder.Eval(Container.DataItem, "mtitle")%></a></td>
                    <th><%#Eval("mfromname")%></th>
                    <th><%#Eval("mtoname")%></th>
                    <td><%#Eval("mdatetime")%></td>
                    <td><%#Eval("mstate")%></td>
                </tr>
            </ItemTemplate>    
        </asp:Repeater>
        <tr>
            <th colspan="5">
                
                <asp:LinkButton ID="lbFront" runat="server" onclick="lbFront_Click">&#39318;&#39029;</asp:LinkButton>
                <asp:LinkButton ID="lbPrev" runat="server" onclick="lbPrev_Click">&#19978;&#39029;</asp:LinkButton>
                <asp:LinkButton ID="lbNext" runat="server" onclick="lbNext_Click">&#19979;&#19968;&#39029;</asp:LinkButton>
                <asp:LinkButton ID="lbEnd" runat="server" onclick="lbEnd_Click">&#23614;&#39029;</asp:LinkButton>
                &#31532;<asp:Label ID="lblCurrentPage" runat="server" Text="Label"></asp:Label>
                &#39029;/&#20849;<asp:Label ID="lblAllPage" runat="server" Text="Label"></asp:Label>
                &#39029;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#19968;&#20849;<asp:Label 
                    ID="lblNumber" runat="server" Text="Label"></asp:Label>
                 &#26465;&#35760;&#24405;
            </th>
        </tr>

    </table>
</asp:Content>


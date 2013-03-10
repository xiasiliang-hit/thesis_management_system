<%@ Page Language="C#" MasterPageFile="~/TMasterPage.master" AutoEventWireup="true" CodeFile="ViewDetailNotice.aspx.cs" Inherits="tutor_ViewDetailNotice" Title="&#26080;&#26631;&#39064;&#39029;" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table width="100%" border=1>
        <tr>
            <th height="15px">
               <h1><b><%# title %></b></h1>
            </th>
        </tr>
        <hr />
        <tr>
            <th height="5px">
               <i>&#21457;&#24067;&#26102;&#38388;<%# datetime %></i>
            </th>
        </tr>
        <tr>
            <td height="220px">
               <%# content %>
            </td>
        </tr>
    </table>
</asp:Content>


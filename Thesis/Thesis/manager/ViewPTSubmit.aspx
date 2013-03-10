<%@ Page Language="C#" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="ViewPTSubmit.aspx.cs" Inherits="manager_ViewPTSubmit" Title="查看论文拟题情况" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 365px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
        <table class="style1">
            <tr>
                <td class="style3">
                    &#26597;&#30475;&#35770;&#25991;&#25311;&#39064;&#24773;&#20917;<br />
                </td>
            </tr>
            <tr>
                <td class="style3">
                    <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" 
                        onselectedindexchanged="GridView1_SelectedIndexChanged" Width="713px">
                    </asp:GridView>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                        ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" 
                        
                        SelectCommand="SELECT tutor.name AS '&#23548;&#24072;', papertitle.ptname AS '&#35770;&#25991;&#39064;&#30446;' FROM papertitle INNER JOIN tu_ptitle ON papertitle.ptid = tu_ptitle.ptid INNER JOIN tutor ON tu_ptitle.tid = tutor.tid">
                    </asp:SqlDataSource>
                </td>
            </tr>
            <tr>
                <td class="style3">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style3">
                    &nbsp;</td>
            </tr>
        </table>
        <br />
    </p>
</asp:Content>


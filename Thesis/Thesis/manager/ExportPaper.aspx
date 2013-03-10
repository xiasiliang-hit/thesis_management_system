<%@ Page Language="C#" Debug="true" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="ExportPaper.aspx.cs" Inherits="manager_ExportPaper" Title="导出论文" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h3 align="center">&#35770;&#25991;&#20449;&#24687;&#21015;&#34920;<br />
    </h3>
    <table class="style1">
        <tr>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" 
                    Width="586px" AllowPaging="True">
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" SelectCommand="SELECT paper.pid AS &#35770;&#25991;&#32534;&#21495;, paper.pname AS &#35770;&#25991;&#39064;&#30446;, student.name AS &#23398;&#29983;&#22995;&#21517;, paper.type AS &#35770;&#25991;&#31867;&#22411;, paper.dt AS &#25552;&#20132;&#26102;&#38388;, paper.score AS &#26368;&#32456;&#24471;&#20998; 
FROM paper, student
WHERE paper.studentID=student.sid"></asp:SqlDataSource>
            </td>
        </tr>
        <tr>
            <td>
        <asp:Button ID="ExportButton" runat="server" Height="26px" 
            onclick="ExportButton_Click" Text="&#23548;&#20986;&#20840;&#37096;&#35770;&#25991;" 
            Width="96px" Font-Bold="False" Font-Names="&#40657;&#20307;" />
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
        </tr>
    </table>
    </asp:Content>


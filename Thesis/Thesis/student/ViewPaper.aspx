<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="ViewPaper.aspx.cs" Inherits="student_ViewPaper" Title="查看论文" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 100%;
        }
        .style4
        {
            width: 85px;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">

                    <table class="style3">
                        <tr>
                            <td class="style4">
                        <asp:Label ID="Label1" runat="server" Text="&#24320;&#39064;&#25253;&#21578;"></asp:Label>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
        <asp:LinkButton ID="OpenTitleLink" runat="server" onclick="OpenTitleLink_Click">&#24320;&#39064;&#25253;&#21578;</asp:LinkButton>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                                &nbsp;</td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
        <asp:Label ID="Label2" runat="server" Text="&#20013;&#26399;&#26816;&#26597;"></asp:Label>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                        <asp:LinkButton ID="MidExamLink" runat="server" onclick="MidExamLink_Click">&#20013;&#38388;&#25253;&#21578;</asp:LinkButton>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                                &nbsp;</td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                        <asp:Label ID="Label3" runat="server" Text="&#35770;&#25991;&#25552;&#20132;"></asp:Label>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                        <asp:LinkButton ID="FirstPaperLink" runat="server" 
                            onclick="FirstPaperLink_Click">&#35770;&#25991;&#19968;</asp:LinkButton>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                    </table>
    <p>
        &nbsp;</p>
    
</asp:Content>



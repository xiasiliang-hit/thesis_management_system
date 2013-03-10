<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="SubmitPaper.aspx.cs" Inherits="student_SubmitPaper" Title="&#26080;&#26631;&#39064;&#39029;" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 100%;
            float: left;
        }
        .style4
        {
            width: 133px;
        }
        .style5
        {
            width: 193px;
        }
        .style6
        {
            width: 145px;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">



    <table align="left" class="style3">
        <tr>
            <td class="style4">
        <asp:Label ID="OpenTitle" runat="server" Text="&#35770;&#25991;&#24320;&#39064;"></asp:Label>
            </td>
            <td class="style5">
                &nbsp;</td>
            <td class="style6">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
        <asp:Label ID="Label2" runat="server" Text="&#24320;&#39064;&#25253;&#21578;&#25552;&#20132;&#65306;"></asp:Label>
            </td>
            <td class="style5">
                <asp:FileUpload ID="OpenTitleUpload" runat="server" />
                               </td>
            <td class="style6">
                <asp:Button ID="OpenTitleSub" runat="server" 
            Height="20px" onclick="OpenTitleSub_Click" Text="&#19978;&#20256;&#27492;&#25991;&#20214;" Width="75px" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
                &nbsp;</td>
            <td class="style5">
                &nbsp;</td>
            <td class="style6">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
        <asp:Label ID="Label1" runat="server" Text="&#20013;&#26399;&#26816;&#26597;"></asp:Label>
                               </td>
            <td class="style5">
                &nbsp;</td>
            <td class="style6">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
        <asp:Label ID="Label7" runat="server" Text="&#20013;&#26816;&#25253;&#21578;&#25552;&#20132;&#65306;"></asp:Label>
            </td>
            <td class="style5">
                <asp:FileUpload ID="MidExamUpload" runat="server" />
            </td>
            <td class="style6">
        <asp:Button ID="MidExamSub" runat="server" Height="20px" Text="&#19978;&#20256;&#27492;&#25991;&#20214;" 
            Width="75px" onclick="MidExamSub_Click1" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
                &nbsp;</td>
            <td class="style5">
                &nbsp;</td>
            <td class="style6">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
        <asp:Label ID="Label4" runat="server" Text="&#26368;&#32456;&#35770;&#25991;"></asp:Label>
            </td>
            <td class="style5">
                &nbsp;</td>
            <td class="style6">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style4">
                                   <asp:Label ID="Label6" runat="server" Text="&#35770;&#25991;&#25552;&#20132;"></asp:Label>
                                   </td>
            <td class="style5">
                <asp:FileUpload ID="FirstPaperUpload" runat="server" />
                                   </td>
            <td class="style6">
                <asp:Button ID="FirstPaperSub" runat="server" Height="20px" 
                                       onclick="FirstPaperSub_Click1" Text="&#19978;&#20256;&#27492;&#25991;&#20214;" Width="75px" />
                                   </td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
    <p align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               </p>
    <p>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
    


</asp:Content>



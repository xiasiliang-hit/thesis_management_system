<%@ Page Language="C#" MasterPageFile="~/TMasterPage.master" AutoEventWireup="true" CodeFile="ReplyPaper.aspx.cs" Inherits="tutor_ReplyPaper" Title="批复论文" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>

<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">

    <p>
        <asp:Label ID="Label1" runat="server" Text="&#24320;&#39064;&#25253;&#21578;&#65306;"></asp:Label>
        <asp:LinkButton ID="TutorTitleLink" runat="server" onclick="LinkButton1_Click">&#26174;&#31034;&#23398;&#29983;&#25552;&#20132;&#24320;&#39064;&#25253;&#21578;</asp:LinkButton>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
    <p>
        <asp:Label ID="Label2" runat="server" Text="&#28155;&#21152;&#25209;&#22797;&#65306;"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p>
                        &nbsp;</p>
    <p>
        <asp:Label ID="Label4" runat="server" Text="&#20013;&#26816;&#25253;&#21578;&#65306;"></asp:Label>
        <asp:LinkButton ID="TutorMidLink" runat="server" onclick="TutorMidLink_Click">&#26174;&#31034;&#23398;&#29983;&#25552;&#20132;&#20013;&#38388;&#25253;&#21578;</asp:LinkButton>
                    </p>
    <p>
        <asp:Label ID="Label5" runat="server" Text="&#28155;&#21152;&#25209;&#22797;&#65306;"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;</p>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
    <p>
        <asp:Label ID="Label6" runat="server" Text="&#35770;&#25991;&#65306;"></asp:Label>
    </p>
    <p>
        <asp:LinkButton ID="TutorPaperLink" runat="server" 
            onclick="TutorPaperLink_Click">&#23398;&#29983;&#25552;&#20132;&#35770;&#25991;</asp:LinkButton>
                    </p>
    <p>
        <asp:Label ID="Label7" runat="server" Text="&#28155;&#21152;&#25209;&#22797;&#65306;"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</p>
    <p>
        &nbsp;</p>
    <p>
        &nbsp;</p>
    <p>
    </p>
    <p>
    </p>

</asp:Content>



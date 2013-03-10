<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="ViewDetailMessage.aspx.cs" Inherits="manager_ViewDetailMessage" Title="&#26080;&#26631;&#39064;&#39029;" %>
<%@ Register TagPrefix="CE" Namespace="CuteEditor" Assembly="CuteEditor" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
     <table align="center" border="1px" width="100%">
     <asp:Repeater runat="server" ID="rpMessageDetail">
     <HeaderTemplate>
        <tr>
            <td colspan="2">
                <%# fromName %>&#20110;<%# messageDateTime %> &#21457;&#34920;&#30041;&#35328;
            </td>
        </tr>
        <tr>
            <td colspan = "2">
                <b>&#30041;&#35328;&#20869;&#23481;&#65306;    </b><%# messageTitle %>
            </td>
        </tr>
     </HeaderTemplate>
     
     <ItemTemplate>
        <tr>
            <td colspan = "2">
                <%# DataBinder.Eval(Container.DataItem, "mseq")%>&#27004;
            </td>
        </tr>
        <tr>
            <td width="15%">
                <%# Eval("mreplyer") %>&#35828;&#65306;
            </td>
            <td>
                <%# Eval("mreply") %>
            </td>
        </tr>
     </ItemTemplate>
     
     <FooterTemplate>
       
     </FooterTemplate>
     </asp:Repeater>
       <tr>
        <th colspan="2">
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
     <tr>
            <td colspan="2">
                <CE:Editor id="editorMessage" runat="server" ThemeType="Office2007" Width="100%" 
            Height="200px" AutoConfigure="Minimal" MaxTextLength="500" TabIndex="3"/>
            </td>
        </tr>

                <tr>
            <th colspan="2">
                <asp:Button runat="server" ID="cmdReply" Text="&#30041;&#35328;" 
                    onclick="cmdReply_Click" /><asp:Button runat="server" ID="cmdReturn" 
                    Text="&#36820;&#22238;" onclick="cmdReturn_Click" />
            </th>
        </tr>
     </table>
</asp:Content>


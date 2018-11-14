Ext.Ajax.cors = true;

Ext.define("TutorialApp.view.mailbox.MflDataModel", {
  extend: "Ext.data.TreeModel",
  proxy: {
    //type: "ajax",
    //url: "../../../resources/data/data1.json"
    type: "ajax",
    url:
      "https://morning-lowlands-10589.herokuapp.com/api/emailclient/ajax/5bc5581f2fe1400f3d447182/email_accounts/0/folders",
    reader: "json",
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    success: function(response) {
      console.log(response);
      //console.log(response.status + ' ' + response.statusText);
      //console.dir(Ext.decode(response.responseText));
    }
  }
});

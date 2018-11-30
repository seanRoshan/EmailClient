Ext.Ajax.cors = true;

Ext.define("TutorialApp.store.email.Friends", {
  extend: "Ext.data.Store",

  alias: "store.emailfriends",

  model: "TutorialApp.model.email.Friend",

  autoLoad: true,

  proxy: {
    //type: "ajax",
    //url: "../../../resources/data/data1.json"
    type: "ajax",
    url:
      "https://morning-lowlands-10589.herokuapp.com/api/emailclient/ajax/5bc5581f2fe1400f3d447182/email_accounts/0/contacts",
    reader: "json",
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    success: function(response) {}
  },

  sorters: {
    direction: "DESC",
    property: "online"
  }
});

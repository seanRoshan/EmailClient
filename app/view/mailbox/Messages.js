Ext.define("TutorialApp.view.mailbox.Messages", {
  extend: "Ext.tab.Panel",
  xtype: "messages",

  layout: "fit",
  height: "100%",

  items: [
    {
      xtype: "panel",
      title: "+",
      items: [
        {
          xtype: "form-register"
        }
      ]
    },
    {
      xtype: "panel",
      title: "SeanGmail",

      items: [
        {
          xtype: "mailview",
          params: {
            resourceUrl:
              "https://morning-lowlands-10589.herokuapp.com/api/emailclient/ajax/5bc5581f2fe1400f3d447182/email_accounts/0/folders"
          }
        }
      ]
    }
  ]
});

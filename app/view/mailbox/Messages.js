Ext.define("TutorialApp.view.mailbox.Messages", {
  extend: "Ext.tab.Panel",
  xtype: "messages",

  layout: "fit",
  height: "100%",

  items: [
    {
      xtype: "panel",
      title: "Mailbox 1",

      items: [
        {
          xtype: "mailview"
        }
      ]
    },
    {
      xtype: "panel",
      title: "+",

      items: [
        {
          xtype: "mailview"
        }
      ]
    }
  ]
});

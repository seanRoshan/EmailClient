Ext.define("TutorialApp.view.mailbox.Messages", {
  extend: "Ext.tab.Panel",
  xtype: "messages",
  items: [
    {
      xtype: "panel",
      title: "Mailbox 1",

      items: [
        {
          xtype: "mailview"
        }
      ]
    }
    // {
    //   xtype: "panel",
    //   title: "Mailbox 2",

    //   items: [
    //     {
    //       xtype: "mailview"
    //     }
    //   ]
    // }
  ]
});

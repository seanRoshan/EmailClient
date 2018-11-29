Ext.define("TutorialApp.view.mailbox.MailView", {
  extend: "Ext.panel.Panel",
  xtype: "mailview",

  controller: "email",
  layout: {
    type: "hbox",
    align: "left"
  },
  items: [
    {
      xtype: "container",

      itemId: "navigationPanel",

      cls: "email-navigation-panel",

      layout: {
        type: "vbox",
        align: "stretch"
      },

      width: "20%",

      items: [
        {
          xtype: "mailboxes",
          //flex: 0.2,
          margin: 5,
          listeners: {
            itemclick: "onItemClick"
          }
        },
        {
          xtype: "emailfriendslist",
          //flex: 0.2,
          margin: 5,
          listeners: {
            itemclick: "onItemClick"
          }
        }
      ]
    },

    {
      xtype: "container",
      itemId: "contentPanel",
      flex: 0.8,
      layout: {
        type: "anchor",
        anchor: "100%"
      }
    }
    // {
    //   xtype: "msgdatagrid",
    //   flex: 0.8,
    //   margin: 5
    // }
  ]
});

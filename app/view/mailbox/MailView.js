Ext.define("TutorialApp.view.mailbox.MailView", {
  extend: "Ext.panel.Panel",
  xtype: "mailview",

  controller: "email",
  //width: 1200,
  //height: 800,
  flex: 1,
  layout: {
    type: "hbox",
    align: "left"
  },
  items: [
    {
      xtype: "container",

      itemId: "navigationPanel",

      layout: {
        type: "vbox",
        align: "stretch"
      },

      width: "30%",
      minWidth: 180,
      maxWidth: 240,

      defaults: {
        cls: "navigation-email",
        margin: "0 20 20 0"
      },

      items: [
        {
          xtype: "mailboxes",
          flex: 0.15,
          margin: 5,
          listeners: {
            itemclick: "onItemClick"
          }
        },
        {
          xtype: "mailboxes",
          flex: 0.15,
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
      flex: 0.85,
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

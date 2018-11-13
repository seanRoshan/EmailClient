Ext.define("TutorialApp.view.mailbox.MailView", {
  extend: "Ext.panel.Panel",
  xtype: "mailview",
  width: 800,
  height: 800,
  layout: {
    type: "hbox",
    align: "stretch"
  },
  items: [
    {
      xtype: "mailboxes",
      flex: 0.5,
      margin: 5,
      listeners: {
        itemclick: function() {
          var me = this,
            store = Ext.create("TutorialApp.view.mailbox.MsgDataStore"),
            grid = me
              .getView()
              .up("mailview")
              .down("msgdatagrid"),
            oldStore = grid.store;
          if (oldStore) {
            oldStore.destroy();
          }
          store.load({
            callback: function(records, operation, success) {
              if (success === true) {
                grid.setStore(store);
              }
            },
            scope: me
          });
        }
      }
    },
    {
      xtype: "msgdatagrid",
      flex: 1,
      margin: 5
    }
  ]
});

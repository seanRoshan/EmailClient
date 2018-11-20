Ext.define("TutorialApp.view.mailbox.MailView", {
  extend: "Ext.panel.Panel",
  xtype: "mailview",
  //width: 1200,
  //height: 800,
  flex: 1,
  layout: {
    type: "hbox",
    align: "left"
  },
  items: [
    {
      xtype: "mailboxes",
      flex: 0.15,
      margin: 5,
      listeners: {
        itemclick: function(node, rec) {
          //console.log(rec.data);
          //console.log(rec.data.foldername);
          const folderName = rec.data.foldername;

          if (folderName !== "Compose") {
            const resourseURL = rec.data.resourceUrl;

            let storeObj = Ext.create("TutorialApp.view.mailbox.MsgDataStore");
            storeObj
              .getModel()
              .getProxy()
              .setUrl(resourseURL);

            storeObj.load(function(data) {
              console.log(data);
            });

            var me = this,
              store = storeObj,
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
      }
    },
    {
      xtype: "msgdatagrid",
      flex: 0.8,
      margin: 5
    }
  ]
});

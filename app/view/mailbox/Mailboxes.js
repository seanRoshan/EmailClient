Ext.define("TutorialApp.view.mailbox.Mailboxes", {
  extend: "Ext.tree.Panel",
  xtype: "mailboxes",
  store: Ext.create("TutorialApp.view.mailbox.MflDataStore"),
  useArrows: false,
  align: "stretch",
  rootVisible: false,
  hideHeaders: true,
  columns: [
    {
      xtype: "treecolumn",
      dataIndex: "foldername",
      flex: 1
    }
  ]
});

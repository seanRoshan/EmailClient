Ext.define("TutorialApp.view.mailbox.Mailboxes", {
  extend: "Ext.tree.Panel",
  xtype: "mailboxes",
  name: "mailboxesTreePanel",

  store: Ext.create("TutorialApp.view.mailbox.MflDataStore"),

  controller: "mailboxes",

  params: {},

  useArrows: false,
  align: "stretch",
  rootVisible: false,
  hideHeaders: true,
  viewConfig: {
    plugins: {
      ptype: "treeviewdragdrop",
      ddGroup: "EmailDragZone",
      enableDrag: false,
      enableDrop: true,
      appendOnly: true
    }
  },
  columns: [
    {
      xtype: "treecolumn",
      dataIndex: "foldername",
      flex: 1
    }
  ],
  listeners: {
    beforedrop: "processDrop"
  }
});

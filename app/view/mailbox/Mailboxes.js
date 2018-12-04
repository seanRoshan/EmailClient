Ext.define("TutorialApp.view.mailbox.Mailboxes", {
  extend: "Ext.tree.Panel",
  xtype: "mailboxes",
  name: "mailboxesTreePanel",
  itemID: "mailboxesTreePanel",

  store: Ext.create("TutorialApp.view.mailbox.MflDataStore"),

  controller: "mailboxes",

  useArrows: false,
  align: "stretch",
  rootVisible: false,
  hideHeaders: true,

  viewConfig: {
    plugins: {
      ptype: "treeviewdragdrop",
      ddGroup: "EmailDragZone",
      //dragGroup: "EmailDragZone",
      enableDrag: false,
      enableDrop: true,
      allowContainerDrops: true,
      forceFit: false
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
    beforedrop: function(node, data, dropRec, dropPosition) {
      console.log("Before Drop!");
      console.log(node);
      console.log(data);
      console.log(dropRec);
      console.log(dropPosition);
      this.viewConfig.plugins.enableDrop = false;
      stop();
    },

    drop: function(node, data, dropRec, dropPosition) {
      console.log("Drop!");
      //dropRec = "";
    },

    onNodeDrop: function(targetNode, dragZone, e, data) {
      console.log("dropped!");
    }
  }
});

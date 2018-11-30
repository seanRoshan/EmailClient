Ext.define("TutorialApp.view.mailbox.MsgDataGrid", {
  extend: "Ext.grid.Panel",
  xtype: "msgdatagrid",
  loadMask: true,

  multiSelect: true,
  viewConfig: {
    plugins: {
      ptype: "gridviewdragdrop"
    }
  },
  //store: Ext.create("TutorialApp.view.mailbox.MsgDataStore"),
  selModel: {
    type: "checkboxmodel"
  },

  bind: {
    store: "TutorialApp.view.mailbox.MsgDataStore"
  },

  listeners: {
    cellclick: "onGridCellItemClick"
  },

  columns: {
    defaults: {
      align: "left",
      menuDisabled: false
    },
    items: [
      {
        header: "From",
        dataIndex: "sender",
        flex: 0.5
      },
      // {
      //   header: "To",
      //   dataIndex: "recipientlist",
      //   flex: 0.5
      // },
      {
        header: "Subject",
        dataIndex: "subject",
        flex: 1
      },
      {
        header: "Sent",
        dataIndex: "created",
        width: 200
      }
    ]
  }
});

Ext.define("TutorialApp.view.mailbox.MsgDataGrid", {
  extend: "Ext.grid.Panel",
  xtype: "msgdatagrid",

  cls: "email-data-grid",

  //controller: "msgdatagrid",

  requires: ["Ext.toolbar.Paging", "Ext.ux.ProgressBarPager"],

  //height: 1024,
  scrollable: true,

  viewConfig: {
    plugins: {
      ptype: "gridviewdragdrop",
      ddGroup: "EmailDragZone",
      enableDrop: false
    },

    getRowClass: function(record, rowIndex, rowParams, store) {
      return "emailRecord";
    }
  },
  enableDragDrop: true,
  multiSelect: true,

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
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
    plugins: {
      "ux-progressbarpager": true
    },
    listeners: {
      beforechange: function(view, currentPage) {
        //console.log("nbMessages", view.up().nbMessages);
        let store = view.getStore();
        let storeProxy = store.getModel().getProxy();
        storeProxy.setExtraParams({
          offset: currentPage * 25,
          limit: 25,
          total: view.nbMessages
        });
      }
    }
  }
});

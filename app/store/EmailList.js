Ext.define("TutorialApp.store.EmailList", {
  extend: "Ext.data.Store",

  alias: "store.EmailList",

  model: "TutorialApp.model.EmailList",

  data: {
    items: [
      {
        iconCls: "x-fa fa-edit",
        text: "Compose"
      },
      {
        iconCls: "x-fa fa-inbox",
        text: "Inbox"
      },
      {
        iconCls: "x-fa fa-check-circle",
        text: "Sent Mail"
      },
      {
        iconCls: "x-fa fa-exclamation-circle",
        text: "Spam"
      },
      {
        iconCls: "x-fa fa-trash-o",
        text: "Trash"
      }
    ]
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items"
    }
  }
});

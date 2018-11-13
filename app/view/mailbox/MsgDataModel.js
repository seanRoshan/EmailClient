Ext.define("TutorialApp.view.mailbox.MsgDataModel", {
  extend: "Ext.data.Model",
  fields: [
    {
      name: "recordid",
      type: "string"
    },
    {
      name: "created",
      type: "date"
    },
    {
      name: "sender",
      type: "string"
    },
    {
      name: "senderid",
      type: "string"
    },
    {
      name: "recipientlist",
      type: "string"
    },
    {
      name: "subject",
      type: "string"
    },
    {
      name: "priority",
      type: "int"
    },
    {
      name: "messagetext",
      type: "string"
    }
  ],
  idProperty: "recordid",
  proxy: {
    type: "ajax",
    url: "../../../resources/data/data2.json",
    reader: {
      type: "json",
      rootProperty: "records"
    }
  }
});

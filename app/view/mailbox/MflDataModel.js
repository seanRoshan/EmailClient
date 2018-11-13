Ext.define("TutorialApp.view.mailbox.MflDataModel", {
  extend: "Ext.data.TreeModel",
  fields: [
    {
      name: "recordid",
      type: "string"
    },
    {
      name: "foldername",
      type: "string"
    },
    {
      name: "foldertype",
      type: "int"
    },
    {
      name: "system",
      type: "int"
    }
  ],
  idProperty: "recordid",
  proxy: {
    type: "ajax",
    url: "../../../resources/data/data1.json"
  }
});

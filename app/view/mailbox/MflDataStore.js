Ext.define("TutorialApp.view.mailbox.MflDataStore", {
  extend: "Ext.data.TreeStore",
  model: "TutorialApp.view.mailbox.MflDataModel",
  sorters: [
    {
      property: "foldername",
      direction: "ASC"
    }
  ]
});

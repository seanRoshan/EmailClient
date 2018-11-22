Ext.define("TutorialApp.view.mailbox.MsgDataStore", {
  extend: "Ext.data.Store",
  alias: "store.inbox",
  model: "TutorialApp.view.mailbox.MsgDataModel"
  //pageSize: 20,
  //autoLoad: true
});

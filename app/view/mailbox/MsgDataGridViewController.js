Ext.define("TutorialApp.view.mailbox.MsgDataGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.msgdatagrid",

  onGridCellItemClick: function(view, td, cellIndex, record) {
    if (cellIndex > 0) {
      view
        .up()
        .up()
        .up()
        .getController()
        .setCurrentView(
          "emaildetails",
          { record: record, openWindow: true },
          "",
          "Details"
        );
    }
  }
});

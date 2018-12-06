Ext.define("TutorialApp.view.mailbox.MsgDataGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.msgdatagrid",

  afterRender: function(view) {
    console.log("afterRender MsgDataGridView!");
    console.log(view.getXType());
    console.log(view.el.down(".emailRecord"));
    console.log(view);
    console.log(view.up());
    console.log(view.up().up());
    console.log(
      view
        .up()
        .up()
        .up()
    );
  },

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

Ext.define("TutorialApp.view.mailbox.MsgDataGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.msgdatagrid",

  afterRender: function(view) {
    console.log("afterRender MsgDataGridView!");
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
  }
});

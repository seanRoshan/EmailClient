Ext.define("TutorialApp.view.mailbox.ComposeViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.emailcompose",

  onComposeDiscardClick: function(bt) {
    var win = bt.up("window");
    if (win) {
      win.close();
    }
  }
});

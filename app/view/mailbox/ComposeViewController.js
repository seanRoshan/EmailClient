Ext.define("TutorialApp.view.mailbox.ComposeViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.emailcompose",

  onComposeDiscardClick: function(bt) {
    var win = bt.up("window");
    if (win) {
      win.close();
    }
  },

  onComposeSaveClick: function(bt) {
    let contentPanel = this.getView();

    let toAddress = contentPanel.down("#to").value;
    console.log("To Address: " + toAddress);
    let subject = contentPanel.down("#subject").value;
    console.log("Subject: " + subject);
    let emailText = contentPanel.down("#htmlEditor").value;
    console.log(emailText);

    let attachments = contentPanel.down("#attachments").down("#FileData");
    console.log(attachments);

    // var win = bt.up("window");
    // if (win) {
    //   win.close();
    // }
  },

  onUploadClick: function() {
    let myView = this.getView()
      .down("#attachments")
      .down("#FileData")
      .getForm();
    console.log(myView);
  }
});

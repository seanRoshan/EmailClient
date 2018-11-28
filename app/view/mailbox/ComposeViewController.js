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

    let attachments = contentPanel.down("#attachments").down("#fileNames")
      .value;
    console.log(attachments);

    // let directory = contentPanel.down("#attachments").down("#uploads").value;
    // console.log(directory);

    // var win = bt.up("window");
    // if (win) {
    //   win.close();
    // }
  },

  onComposeBrowseClick: function(filefield) {
    var displayFileNames = filefield
        .up("form")
        .getForm()
        .findField("fileNames"),
      fileList = filefield.getFileList(),
      fileNames = Ext.Array.pluck(fileList, "name");
    displayFileNames.setValue(fileNames.join(", "));
  }
});

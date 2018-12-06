Ext.define("TutorialApp.view.mailbox.MailboxesViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mailboxes",

  afterRender: function(view) {
    console.log("MAILBOX AFTER RENDER");
    console.log(this.getView().name);
    let mailboxpanel = this.getView();
    console.log("____________________");
    // var panelDropTarget = new Ext.dd.DropTarget(this.getView(), {
    //   notifyDrop: function(dragsource, event, data) {
    //     // do something with the dragsource
    //   }
    // });
  },
  init: function(view) {
    //console.log("Mailbox initialized!");
    // console.log(this);
    // console.log(view);
    // let myView = this.getView();
    // console.log(myView);
  }
});

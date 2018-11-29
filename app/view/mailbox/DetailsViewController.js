Ext.define("TutorialApp.view.mailbox.DetailsViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.emaildetail",

  beforeDetailsRender: function(view) {
    let obj = view.obj ? view.obj : {};

    // Fix the issue if the first Email body is in just plain text
    // Example: Emails from the indeed.com
    if (obj.bodies.length >= 2) {
      if (obj.bodies[0].type === "text/plain") {
        view.down("#mailBody").setHtml(obj.bodies[1].content);
      }
    } else {
      view.down("#mailBody").setHtml(obj.bodies[0].content);
    }

    view
      .down("#emailSubjectContainer")
      .setData({ title: obj.subject, from: obj.addresses.from[0].name });
    view.down("#userImage").setSrc("resources/images/" + "profile_mask_2x.png");
  },

  onBackBtnClick: function(bt) {
    var win = bt.up("window");
    if (win) {
      win.close();
    }
  }
});

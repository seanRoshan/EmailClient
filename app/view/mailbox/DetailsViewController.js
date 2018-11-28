Ext.define("TutorialApp.view.mailbox.DetailsViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.emaildetail",

  beforeDetailsRender: function(view) {
    var record = view.record ? view.record : {};

    view.down("#mailBody").setHtml(record.get("contents"));
    view.down("#attachments").setData(record.get("attachments"));
    view.down("#emailSubjectContainer").setData(record.data ? record.data : {});
    view.down("#userImage").setSrc("resources/images/user-profile/" + "1.png");
  },

  onBackBtnClick: function(bt) {
    var win = bt.up("window");
    if (win) {
      win.close();
    }
  },

  ajaxCall: function(emailID) {
    Ext.Ajax.request({
      url: "ajax_demo/sample.json",

      success: function(response, opts) {
        var obj = Ext.decode(response.responseText);
        console.dir(obj);
      },

      failure: function(response, opts) {
        console.log("server-side failure with status code " + response.status);
      }
    });
  }
});

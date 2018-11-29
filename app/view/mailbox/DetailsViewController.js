Ext.define("TutorialApp.view.mailbox.DetailsViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.emaildetail",

  beforeDetailsRender: function(view) {
    var record = view.record ? view.record : {};
    this.ajaxCall(record.data.resource_url, view);
    //view.down("#attachments").setData(record.get("attachments"));
  },

  onBackBtnClick: function(bt) {
    var win = bt.up("window");
    if (win) {
      win.close();
    }
  },

  ajaxCall: function(resource_url, view) {
    //console.log("Window");

    let windows = this.getView().up();

    //console.log(windows.up());

    //new Ext.LoadMask(this.view.el, { msg: "Please wait..." });

    // let myWindowMask = new Ext.LoadMask({
    //   msg: "Please wait...",
    //   padding: 100,
    //   target: windows
    // });
    //myWindowMask.show();

    Ext.Ajax.request({
      url: resource_url,

      success: function(response, opts) {
        var obj = Ext.decode(response.responseText);
        view.down("#mailBody").setHtml(obj.bodies[0].content);
        view
          .down("#emailSubjectContainer")
          .setData({ title: obj.subject, from: obj.addresses.from[0].name });
        view
          .down("#userImage")
          .setSrc("resources/images/" + "profile_mask_2x.png");

        //myWindowMask.hide();

        return response;
      },

      failure: function(response, opts) {
        console.log("server-side failure with status code " + response.status);
      }
    });
  }
});

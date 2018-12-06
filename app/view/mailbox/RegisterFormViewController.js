Ext.define("TutorialApp.view.mailbox.RegisterFormViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.form-register",

  submitRegistration: function() {
    console.log("Form Registered!");
    let form = this.getView().getForm();
    if (form.isValid()) {
      let values = form.getValues(true);
      let params = {};
      Ext.Object.each(form.getValues(), function(key, value) {
        params[key] = value;
      });
      this.sendAjaxRequest(params, form);
    }
  },

  sendAjaxRequest: function(paramsObj, form) {
    console.log(paramsObj);
    Ext.Ajax.request({
      url:
        "https://morning-lowlands-10589.herokuapp.com/api/emailclient/create",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      params: Ext.JSON.encode(form.getValues()),
      //   params: {
      //     ajax_req: Ext.util.JSON.encode(params)
      //   },
      success: function(response, opts) {
        console.log(response);
        // var obj = Ext.decode(response.responseText);
        // var cfg = Ext.apply(
        //   {
        //     xtype: "emailwindow",
        //     items: [
        //       Ext.apply(
        //         {
        //           xtype: view,
        //           obj: obj
        //         },
        //         params.targetCfg
        //       )
        //     ]
        //   },
        //   params.windowCfg
        // );
        // myMask.hide();
        // Ext.create(cfg);
      },

      failure: function(response, opts) {
        console.log("server-side failure with status code " + response.status);
      }
    });
    return;
  }
});

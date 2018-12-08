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
      this.sendAjaxRequest(params, form, this.getView());
    }
  },

  sendAjaxRequest: function(paramsObj, form, view) {
    //console.log(paramsObj);
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
        responseObj = Ext.JSON.decode(response.responseText);
        console.log(responseObj);

        let newViewObj = {
          xtype: "panel",
          title: responseObj.title,
          items: [
            {
              xtype: "mailview",
              params: {
                resourceUrl: responseObj.resourceUrl
              }
            }
          ]
        };

        let messagesView = view.up().up();
        messagesView.add(newViewObj);
      },

      failure: function(response, opts) {
        console.log("server-side failure with status code " + response.status);
      }
    });
    return;
  }
});

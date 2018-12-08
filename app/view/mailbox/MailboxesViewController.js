Ext.define("TutorialApp.view.mailbox.MailboxesViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mailboxes",

  beforeRender: function(view) {
    let resourceUrl = view.up().up().params.resourceUrl;
    view
      .getStore()
      .getModel()
      .getProxy()
      .setUrl(resourceUrl);
    view.getStore().load();
  },

  processDrop: function(node, data, dropRec, dropPosition) {
    //let target = dropRec.data.foldername;
    //console.log(dropPosition);
    let target = dropRec.data.serverFolderName;
    for (let i = 0; i < data.records.length; i++) {
      let source = data.records[i].data.folder;
      if (target === "Compose") {
        this.openDetail(data.records[0]);
        break;
      } else if (source.toLowerCase() !== target.toLowerCase()) {
        let resource_url = data.records[i].data.resource_url;
        //console.log(resource_url);
        this.moveMail(resource_url, target);
      } else {
        // DO nothing!
      }
    }
    return false;
  },

  moveMail: function(resource_url, target) {
    let viewPanel = this.view.up().up();
    let myMask = new Ext.LoadMask({
      msg: "Please wait...",
      padding: 100,
      target: viewPanel
    });
    myMask.show();

    Ext.Ajax.request({
      url: resource_url,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      params: Ext.JSON.encode({ new_folder_id: target }),
      success: function(response, opts) {
        //responseObj = Ext.JSON.decode(response.responseText);
        //console.log(responseObj);
        Ext.Msg.alert("Success", "Email Moved SuccessFully");
        myMask.hide();
      },

      failure: function(response, opts) {
        myMask.hide();
        Ext.Msg.alert("Error", "Could not move the Email!");
        //console.log("server-side failure with status code " + response.status);
      }
    });
  },
  openDetail: function(record) {
    let viewControl = this.view
      .up()
      .up()
      .getController();
    viewControl.setCurrentView(
      "emaildetails",
      { record: record, openWindow: true },
      "",
      "Details"
    );
  }
});

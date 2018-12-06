Ext.define("TutorialApp.view.mailbox.EmailController", {
  extend: "Ext.app.ViewController",

  alias: "controller.email",

  afterRender: function(view) {
    //let contentPanel = this.getView().down("#contentPanel");
    console.log("After Enger");
    console.log(this.getView());
    console.log(
      this.getView()
        .down("#navigationPanel")
        .down("#mailboxesTreePanel")
    );
    console.log(this.getView().down("#navigationPanel"));
    // var panelDropTarget = new Ext.dd.DropTarget(contentPanel, {
    //   notifyDrop: function(dragsource, event, data) {
    //     // do something with the dragsource
    //   }
    // });
  },

  init: function() {
    //this.setCurrentView("inbox");
    //this.setCurrentView("msgdatagrid");
  },

  onItemClick: function(node, rec) {
    const folderName = rec.data.foldername;
    if (folderName !== "Compose") {
      const resourceURL = rec.data.resourceUrl;
      const nbMessages = rec.data.nb_messages;
      this.setCurrentView("msgdatagrid", nbMessages, resourceURL, folderName);
    } else {
      this.setCurrentView(rec.data.routeId, rec.data.params, folderName);
    }
  },

  setCurrentView: function(view, params, resourceURL, folderName) {
    let contentPanel = this.getView().down("#contentPanel");

    //We skip rendering for the following scenarios:
    // * There is no contentPanel
    // * view xtype is not specified
    // * current view is the same
    if (
      !contentPanel ||
      view === "" ||
      (contentPanel.down() && contentPanel.down().viewName === folderName)
    ) {
      console.log("false");
      return false;
    }

    if (folderName == "Details") {
      let myMask = new Ext.LoadMask({
        msg: "Please wait...",
        padding: 100,
        target: contentPanel
      });

      myMask.show();

      Ext.Ajax.request({
        url: params.record.data.resource_url,
        success: function(response, opts) {
          var obj = Ext.decode(response.responseText);
          var cfg = Ext.apply(
            {
              xtype: "emailwindow",
              items: [
                Ext.apply(
                  {
                    xtype: view,
                    obj: obj
                  },
                  params.targetCfg
                )
              ]
            },
            params.windowCfg
          );

          myMask.hide();
          Ext.create(cfg);
        },

        failure: function(response, opts) {
          console.log(
            "server-side failure with status code " + response.status
          );
        }
      });

      return;
    }

    if (params && params.openWindow) {
      var cfg = Ext.apply(
        {
          xtype: "emailwindow",
          items: [
            Ext.apply(
              {
                xtype: view
              },
              params.targetCfg
            )
          ]
        },
        params.windowCfg
      );

      Ext.create(cfg);
    } else {
      if (resourceURL) {
        Ext.suspendLayouts();
        contentPanel.removeAll(true);
        contentPanel.add(
          Ext.apply({
            xtype: view,
            viewName: folderName,
            itemId: "inboxPanel",
            nbMessages: params
          })
        );
        let inboxPanel = contentPanel.down("#inboxPanel");

        let myMask = new Ext.LoadMask({
          msg: "Please wait...",
          padding: 100,
          target: contentPanel
        });

        myMask.show();

        Ext.resumeLayouts(true);
        let storeObj = Ext.create("TutorialApp.view.mailbox.MsgDataStore");
        storeObj
          .getModel()
          .getProxy()
          .setUrl(resourceURL);

        storeObj
          .getModel()
          .getProxy()
          .setExtraParams({
            offset: 0,
            limit: 25,
            total: params
          });

        storeObj.load(function(data, operation, success) {
          if (success === true) {
            inboxPanel.setStore(storeObj);
            myMask.hide();
          }
        });
      } else if (folderName === "Details") {
        Ext.suspendLayouts();

        contentPanel.removeAll(true);
        contentPanel.add(
          Ext.apply(
            {
              xtype: view
            },
            params
          )
        );

        Ext.resumeLayouts(true);
      }
    }
  }
});

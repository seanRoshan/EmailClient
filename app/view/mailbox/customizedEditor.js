Ext.define("TutorialApp.view.mailbox.customizedEditor", {
  extend: "Ext.form.field.HtmlEditor",
  xtype: "customizededitor",
  getToolbarCfg: function() {
    // get original toolbar:
    var toolbar = this.callParent(arguments);
    // add custom item:
    toolbar.items.push({
      xtype: "button",
      iconCls: "x-fa fa-question-circle",
      handler: function() {
        Ext.Msg.alert("Dear user!", "No, we won't help you!");
      }
    });

    // return toolbar to calling function
    return toolbar;
  }
});

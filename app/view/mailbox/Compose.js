Ext.define("TutorialApp.view.mailbox.Compose", {
  extend: "Ext.form.Panel",
  alias: "widget.emailcompose",
  requires: [
    "Ext.button.Button",
    "Ext.form.field.Text",
    "Ext.form.field.File",
    "Ext.form.field.HtmlEditor"
  ],

  viewModel: {
    type: "emailcompose"
  },

  controller: "emailcompose",

  cls: "email-compose",

  layout: {
    type: "vbox",
    align: "stretch"
  },

  bodyPadding: 10,
  scrollable: true,

  defaults: {
    labelWidth: 60,
    labelSeparator: ""
  },

  items: [
    {
      xtype: "textfield",
      fieldLabel: "To",
      itemId: "to"
    },
    {
      xtype: "textfield",
      fieldLabel: "Cc",
      itemId: "cc"
    },
    {
      xtype: "textfield",
      fieldLabel: "Bcc",
      itemId: "bcc"
    },
    {
      xtype: "textfield",
      fieldLabel: "Subject",
      itemId: "subject"
    },
    {
      xtype: "customizededitor",
      itemId: "htmlEditor",

      // Make tips align neatly below buttons.
      buttonDefaults: {
        tooltip: {
          align: "t-b",
          anchor: true
        }
      },
      flex: 1,
      minHeight: 100,
      labelAlign: "top",
      fieldLabel: "Message"
    }
  ],

  bbar: {
    overflowHandler: "menu",
    items: [
      {
        xtype: "filefield",
        width: 400,
        labelWidth: 80,
        multiple: true,
        fieldLabel: "Attachment",
        labelSeparator: "",
        buttonConfig: {
          xtype: "filebutton",
          glyph: "",
          iconCls: "x-fa fa-cloud-upload",
          text: "Browse"
        }
      },
      "->",
      {
        xtype: "button",
        //ui: "soft-red",
        text: "Discard",
        handler: "onComposeDiscardClick"
      },
      {
        xtype: "button",
        //ui: "gray",
        handler: "onComposeSaveClick",
        text: "Save"
      },
      {
        xtype: "button",
        //ui: "soft-green",
        text: "Send"
      }
    ]
  }
});

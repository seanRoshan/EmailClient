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
    itemId: "attachments",
    items: [
      {
        xtype: "filefield",
        itemId: "uploads",
        name: "fileNames",
        width: 800,
        labelWidth: 80,
        multiple: true,
        fieldLabel: "Attachment",
        labelSeparator: "",
        buttonConfig: {
          xtype: "filebutton",
          glyph: "",
          iconCls: "x-fa fa-cloud-upload",
          text: "Browse"
        },
        listeners: {
          change: function(filefield, newFileName, oldFileName) {
            var displayFileNames = this.up("form")
                .getForm()
                .findField("fileNames"),
              fileList = filefield.getFileList(),
              fileNames = Ext.Array.pluck(fileList, "name");
            displayFileNames.setValue(fileNames.join(","));
            console.log(fileList);
            console.log(fileNames);
            console.log(displayFileNames);
          }
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

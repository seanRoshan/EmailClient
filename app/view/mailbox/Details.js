Ext.define("TutorialApp.view.mailbox.Details", {
  extend: "Ext.form.Panel",
  xtype: "emaildetails",
  itemId: "emaildetails",

  requires: [
    "TutorialApp.view.mailbox.DetailsViewModel",
    "Ext.container.Container",
    "Ext.form.field.HtmlEditor",
    "Ext.layout.container.Anchor",
    "Ext.layout.container.HBox"
  ],

  autoScroll: true,

  viewModel: {
    type: "emaildetails"
  },

  controller: "emaildetail",

  cls: "shadow",

  bodyPadding: 10,

  layout: {
    type: "anchor",
    anchor: "100%"
  },

  listeners: {
    beforerender: "beforeDetailsRender"
  },

  tbar: [
    // Default item type for toolbar is button, thus we can skip it's definition in
    // the array items
    {
      iconCls: "x-fa fa-angle-left",
      listeners: {
        click: "onBackBtnClick"
      }
    },
    {
      iconCls: "x-fa fa-trash"
    },
    {
      iconCls: "x-fa fa-exclamation-circle"
    },
    {
      iconCls: "x-fa fa-print"
    },
    {
      iconCls: "x-fa fa-forward"
    }
  ],

  bbar: {
    cls: "single-mail-action-button",
    defaults: {
      margin: "0 15 0 0"
    },
    items: [
      "->",
      {
        //ui: "gray",
        text: "Save"
      },
      {
        //ui: "soft-green",
        text: "Send"
      }
    ]
  },

  items: [
    {
      xtype: "container",
      height: 82,
      layout: {
        type: "hbox",
        align: "stretch"
      },
      items: [
        {
          xtype: "image",
          itemId: "userImage",
          cls: "email-sender-img",
          alt: "profileImage",
          height: 80,
          width: 80,
          margin: "0 0 5 0"
        },
        {
          xtype: "component",
          flex: 1,
          cls: "single-mail-email-subject",
          data: {},
          itemId: "emailSubjectContainer",
          padding: 10,
          tpl: [
            '<div class="user-name"><b>From: </b>{from}</div>',
            '<div class="user-info"><b>Subject: </b>{title}</div>'
          ]
        }
      ]
    },
    {
      xtype: "box",
      cls: "mail-body",
      itemId: "mailBody"
    },
    {
      xtype: "box",
      itemId: "attachments",
      cls: "attachment-container",
      data: null,
      tpl: [
        '<tpl for=".">',
        '<img class="single-mail-attachment" src="resources/images/{.}" ',
        'alt="profile image">',
        "</tpl>"
      ]
    },
    {
      xtype: "customizededitor",
      height: 250,
      fieldLabel: "Reply",
      labelAlign: "top",
      labelSeparator: ""
    }
  ]
});

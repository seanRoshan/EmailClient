Ext.define("TutorialApp.view.email.Email", {
  extend: "Ext.menu.Menu",
  xtype: "emailmenu",

  requires: ["TutorialApp.store.EmailList"],

  title: "Email",

  store: {
    type: "EmailList"
  },

  iconCls: "x-fa fa-inbox",

  floating: false,
  width: "auto",

  items: [
    {
      routeId: "emailcompose", //xtype and used for url routing

      params: {
        openWindow: true, // Let the controller know that we want this component in the window,

        targetCfg: {
          //put any extra configs for your view here
        },

        windowCfg: {
          // Any configs that you would like to apply for window popup goes here

          title: "Compose Message"
        }
      },

      iconCls: "x-fa fa-edit",

      text: "Compose"
    },

    {
      routeId: "",

      iconCls: "x-fa fa-inbox",

      text: "Inbox"
    },

    {
      routeId: "",

      iconCls: "x-fa fa-check-circle",

      text: "Sent Mail"
    },

    {
      routeId: "",

      iconCls: "x-fa fa-exclamation-circle",

      text: "Spam"
    },

    {
      routeId: "",

      iconCls: "x-fa fa-trash-o",

      text: "Trash"
    }
  ]
});

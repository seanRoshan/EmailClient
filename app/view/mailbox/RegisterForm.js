Ext.define("TutorialApp.view.mailbox.RegisterForm", {
  extend: "Ext.form.Panel",
  xtype: "form-register",

  controller: "form-register",

  frame: true,
  title: "Add a new Account",
  margin: "10 auto",
  bodyPadding: 10,
  scrollable: true,
  width: "100%",

  fieldDefaults: {
    labelAlign: "right",
    labelWidth: 115,
    msgTarget: "side"
  },

  items: [
    {
      xtype: "fieldset",
      title: "Personal Info",
      defaultType: "textfield",
      defaults: {
        anchor: "100%"
      },

      items: [
        {
          allowBlank: false,
          fieldLabel: "First Name",
          emptyText: "First Name",
          name: "first",
          anchor: "40%"
        },
        {
          allowBlank: false,
          fieldLabel: "Last Name",
          emptyText: "Last Name",
          name: "last",
          anchor: "40%"
        }
      ]
    },
    {
      xtype: "fieldset",
      title: "Account Information",
      defaultType: "textfield",
      defaults: {
        anchor: "100%"
      },

      items: [
        {
          allowBlank: false,
          fieldLabel: "Email",
          name: "email",
          vtype: "email",
          emptyText: "Email"
        },
        {
          allowBlank: false,
          fieldLabel: "Username",
          name: "username",
          emptyText: "Username",
          anchor: "50%"
        },
        {
          allowBlank: false,
          fieldLabel: "Password",
          name: "pass",
          inputType: "password",
          emptyText: "Password",
          anchor: "50%"
        },
        {
          allowBlank: false,
          fieldLabel: "Server",
          name: "server",
          emptyText: "Server"
        },
        {
          allowBlank: false,
          fieldLabel: "Port [SSL]",
          name: "port",
          emptyText: "993",
          vtype: "portNumber",
          anchor: "25%"
        }
      ]
    }
  ],

  buttons: [
    {
      text: "Register",
      disabled: true,
      formBind: true,
      handler: "submitRegistration"
    }
  ]
});

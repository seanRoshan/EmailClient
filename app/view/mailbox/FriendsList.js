Ext.define("TutorialApp.view.mailbox.FriendsList", {
  extend: "Ext.menu.Menu",

  alias: "widget.emailfriendslist",

  viewModel: {
    type: "emailfriendslist"
  },

  controller: "emailfriendslist",

  title: "Friends",

  cls: "navigation-email",

  iconCls: "x-fa fa-group",

  floating: false
});

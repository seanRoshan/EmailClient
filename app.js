/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "TutorialApp.Application",

  name: "TutorialApp",

  requires: [
    // This will automatically load all classes in the TutorialApp namespace
    // so that application classes do not need to require each other.
    "TutorialApp.*"
  ]

  // The name of the initial view to create.
  //mainView: 'TutorialApp.view.main.Main'
});

// custom Vtype for vtype:'time'
Ext.define("TutorialApp.overrides.form.field.VTypes", {
  override: "Ext.form.field.VTypes",

  portNumber: function(value) {
    return this.portNumberRe.test(value);
  },

  // RegExp for the value to be tested against within the validation function
  portNumberRe: /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/,
  // vtype Text property: The error text to display when the validation function returns false
  portNumberText: "Not a valid port number.  Must be in Range 0 to 65535."
});

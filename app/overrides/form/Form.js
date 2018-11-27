/**
 * Overrides to the File field.
 */
Ext.define("TutorialApp.overrides.form.Form", {
  override: "Ext.form.field.File",
  /**
   * @cfg {Boolean} multiple
   */

  /**
   * Override that adds the multiple config to the fileInputEl.dom
   */
  onRender: function() {
    this.callParent(arguments);
    this.fileInputEl.dom.setAttribute("multiple", this.multiple);
  },

  /**
   * Convenience method that will return the files in the fileInputEl.dom
   */
  getFileList: function() {
    return this.fileInputEl.dom.files;
  }
});

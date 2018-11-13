Ext.application({
  name: "Fiddle",

  launch: function() {
    let url =
      "https://morning-lowlands-10589.herokuapp.com/api/emailclient/users/5bc5581f2fe1400f3d447182/email_accounts/0/folders";
    // Set up a model to use in our Store
    Ext.define("User", {
      extend: "Ext.data.Model",

      proxy: {
        type: "rest",
        reader: {
          type: "json"
        }
      }
    });

    Ext.define("MyStore", {
      extend: "Ext.data.Store",
      model: "User"
    });

    let store = new MyStore();
    //Set the dynamic url here
    //This {url} will be dynamic whatever you want to pass
    store.getProxy().setUrl(url);

    var myVar = [];

    store.load(function(data) {
      //
      myVar = data;

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].data.name);
      }

      //return data;
    });

    //console.log((array)(myVar.data.items.length));
    //console.log(myVar.data.items.length);
    //console.log(typeof(myVar.data.items));
    //console.log(myVar.data.items[0]);

    /*
         You can also pass url inside of load funtion
        */
    //new MyStore().get();
  }
});

var urlStr = val.url;
            colums = val.columns;
            fields = val.fields;
            Ext.Ajax.request({
                url: urlStr,
                scope: this,
                method: 'GET',
                success: function(response) {
                    try {
                        var responseStr = Ext.decode(response.responseText);
                        var dataObj = responseStr[val.datasourceval];
                        var store = Ext.create('Ext.data.Store', {
                                fields: fields,
                                data: dataObj
                            });
                        _container = Ext.create('Ext.grid.Panel', {
                            store: store,
                            columns: colums,
                            extraParams: val,
                            forceFit: true,
                            layout: 'fit'
                        });
                        view.addView({
                            type: 'universalView',
                            title: val.title,
                            content: _container,
                            values: val
                        });
                        return true;
                    } catch (err) {
                        util.ConfigData.log('fail');
                        util.ConfigData.showToast("Try To Save DataSource Fail");
                    }
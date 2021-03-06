/*
 * File: app/controller/LearningObjectController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Cookbool_yPBL.controller.LearningObjectController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main'
        },

        control: {
            "main learningObjectList": {
                disclose: 'onListDisclose'
            }
        }
    },

    onListDisclose: function(list, record, target, index, e, options) {
        var me = this;

        if(record){

            var store = Ext.data.StoreManager.lookup('Feedback');

            store.getProxy().setExtraParams({
                id: record.get('id'),
                filter: store.filter('learningObjectId', record.get('id'))
            });

            store.load();

            me.getMain().push({
                xtype:'feedbackList' ,
                title: 'Feedbacks of ' + record.get('title')

            });
            console.log('title:' + record.get('title'));
            console.log('learningObId:' + record.get('learningObjectId'));
            console.log('id' + record.get('id'));

        }


        //learningObjectId
    }

});
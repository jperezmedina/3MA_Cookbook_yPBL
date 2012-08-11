/*
 * File: app/view/LearningObjectsList.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
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

Ext.define('Cookbool_yPBL.view.LearningObjectsList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.learningobjectslist',

    config: {
        loadingText: 'Loading Learning Objects...',
        store: 'LearningObjectStore',
        onItemDisclosure: true,
        itemTpl: [
            '<section class="LearningObjectListItem">',
            '<h2>{title}</h2>',
            '<div class="others">',
            '<span class="date">Date Creation: {dateCreation:date("M d, Y")}</span>',
            '</div>',
            '<img src="{rating_img_url_small}"/>&nbsp;',
            '</section>'
        ]
    }

});
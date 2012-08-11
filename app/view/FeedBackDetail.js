/*
 * File: app/view/FeedBackDetail.js
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

Ext.define('Cookbool_yPBL.view.FeedBackDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.feedbackdetail',

    config: {
        ui: 'light',
        scrollable: true,
        tpl: [
            '{title}</br>',
            '{comment}</br>',
            '{rating_img_url_small}</br>',
            '<div class="others">',
            '<span class="date">Date: {date:date("M d, Y")}</span>',
            '</div>'
        ]
    }

});
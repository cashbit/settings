/*
*   Vortex
*   local and remote queue management
 *
 *   See example
 *
 *   Yuo can create a communication queue between different meteor apps
 *
 *
*
*
* */

var settingCollection = new Meteor.Collection("cashbitsettings") ;

settings = function (){

    return {
        read: function(settingName,defaultDoc){
            var setting = settingCollection.findOne({name:settingName}) ;

            if (!setting){
                defaultDoc.name = settingName ;
                settingCollection.insert(defaultDoc) ;
                setting = settingCollection.findOne({name:settingName}) ;
            }

            return setting ;
        }
    }
}
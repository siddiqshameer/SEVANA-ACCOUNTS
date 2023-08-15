// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput5")
                .setLeft("0em")
                .setTop("1.5238095238095237em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Counter")
                .setType("dropbutton")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "1"
                    },
                    {
                        "id" : "2",
                        "caption" : "2"
                    },
                    {
                        "id" : "3",
                        "caption" : "3"
                    },
                    {
                        "id" : "4",
                        "caption" : "4"
                    },
                    {
                        "id" : "5",
                        "caption" : "5"
                    },
                    {
                        "id" : "6",
                        "caption" : "6"
                    },
                    {
                        "id" : "7",
                        "caption" : "7"
                    },
                    {
                        "id" : "8",
                        "caption" : "8"
                    },
                    {
                        "id" : "9",
                        "caption" : "9"
                    },
                    {
                        "id" : "10",
                        "caption" : "10"
                    }
                ])
                .setValue("1")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});
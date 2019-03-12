
Sagar.Mali
(14:51:34) var systemLocales = resourceValues;
var dataLength = 0;
msApp.controller("SystemController", ['$scope', '$http','CatalogService',function($scope, $http,catalogService) {
$scope.system_grid_config = {
rows
      {
view:"form",
borderless : true,
rows : [
        {
cols
                      { view:"button", labelystemLocales.createbutton, type:'icon', icon:'plus', autowidth:true,css:'brix_button customiconbutton', id:'addSystemButtonId',
                      	click:function(id, ev){
                      	 $$('addSystemWindow').show();
                      	},
                     },
                     { view:"button", label: systemLocales.deletebutton, /*disabled : true,*/ id:'deleteSystemButton', type:'icon', icon:'trash', autowidth:true,
                    	 	css : 'brix_button customiconbutton', 
                      	 click:function(e, id, trg){ 
                      	 webix.confirm({
    	 ok : systemLocales.yes,
    	 cancel : systemLocales.no,
    	 type : "confirm-error",
    	 text : systemLocales.sure,
    	 callback : function(result) { //setting callback
    	 if (result) {
//	    	 $.LoadingOverlay("show", spinner);
//	    	 CatalogService.remove('deleteUser', username, username).then(function(response) {
//	    	
//	    	 });
    	 }
    	 }
    	 });
                     }                    
                     },{
                    	   view:"button", labelystemLocales.editbutton, /*disabled : true,*/ id : 'editSystemButton', type:'icon', icon:'edit', autowidth:true,
                        	 css : 'brix_button customiconbutton', 
                          	click:function(e, id, trg){
                          	 $$('editSystemWindow').show();
                          	 }
                     },
                     {}
                     ],
}]
},
{ 
id:'systemGrid',	
view:'datatable',
tooltip : true,
borderless:true,
select:true,
height : 280,
resizeColumn: { headerOnly:true },
fixedRowHeight : false,
scrollX:false,
visibleBatch:1,
css:'brix_datatable_2',
columns
         { id : "systemId", editor : "text", header:"Id", fillspace : true, batch: 2},
         	 { id: "index", header: [{text: "Sr. No."}], sort: "int", batch: 1},
         { id:"systemname", header: "System Name",fillspace:1, batch: 1},
         { id:"systemdescription", header: "Description", fillspace:2, batch: 1},
         ],
data : [{"systemId" : "1", "systemname" : "System A", "systemdescription" : "System A Description"},
        {"systemId" : "2", "systemname" : "System B", "systemdescription" : "System B Description"},
        {"systemId" : "3", "systemname" : "System C", "systemdescription" : "System C Description"},
        {"systemId" : "4", "systemname" : "System D", "systemdescription" : "System D Description"},
        {"systemId" : "5", "systemname" : "System E", "systemdescription" : "System E Description"},
        {"systemId" : "6", "systemname" : "System F", "systemdescription" : "System F Description"},
        {"systemId" : "7", "systemname" : "System G", "systemdescription" : "System G Description"},
        {"systemId" : "8", "systemname" : "System H", "systemdescription" : "System H Description"},
        {"systemId" : "9", "systemname" : "System I", "systemdescription" : "System I Description"},
        {"systemId" : "10", "systemname" : "System J", "systemdescription" : "System J Description"}],
        on : {
        	"onItemDblClick" : function(id, ev){
        	 $$("editSystemWindow".show();
        	}, 
        	"data->onStoreUpdated":function(){
        	 this.data.each(function(obj, i){
        	 obj.index = i+1;
        	 })
        	},
        	"onAfterSelect" : function(data, preserve){
        	 var formData = $$('systemGrid').getSelectedItem();
        	 $$("system_detail".clearAll();
        	 $$("system_detail".add({ parameter: systemLocales.name, value: formData.systemname},0);
        	 $$("system_detail".add({ parameter: systemLocales.description, value: formData.systemdescription},1);
        	 $$("system_detail".adjustRowHeight("value", true); 
    	 $$("system_detail".refresh();
        	},
        	"onAfterRender" : webix.once(function() {
        	 $.LoadingOverlay("show", spinner);
catalogService.catalogLoadService("getAttrParaSetCatListByName".then(function(response){
alert();
System
console.log("system list= ", response);
//	      	     $$('systemGrid').clearAll();
//      	 $$('systemGrid').parse(response.result, 'json');
//      	 $$("systemGrid".adjustRowHeight();
//	     $$("systemGrid".refresh();
//      	 $$("systemGrid".select($$('developmentStageGrid').getFirstId());
$.LoadingOverlay("hide", spinner);
      	 });
        	 /*dataLength = data.length;
        	 if(dataLength == 0){
        	 $$('editSystemButton').disable();
        	 $$('deleteSystemButton').disable();
        	 }else{
        	 $$('editSystemButton').enable();
        	 $$('deleteSystemButton').enable();
        	 }*/
//	         	 $$('systemGrid').clearAll();
//	         	 $$('systemGrid').parse(data);
//	         	 $$("systemGrid".adjustRowHeight();
//	         	 $$("systemGrid".select($$('systemGrid').getFirstId());
        	})
       }
},{
height : 20,
},{
template:  "System Details",
            css: 'customer_grid_style',
            borderless : true
},{
view:'datatable',
borderless:true,
select:true,
id : 'system_detail',
height : 120,
scrollX : false,
resizeColumn: { headerOnly:true },
tooltip : true,
css : 'brix_datatable_2',
gravity:0.3,
columns
         { id: "index", header: [{text: "Sr. No."}], sort: "int", batch: 1},
         { id:"parameter",header:"<span id='user_para_id'>" +systemLocales.parameter+ "</span>",fillspace:true, labelWidth : 150},
         { id:"value",header:"<span id='user_val_id'>" +systemLocales.value+ "</span>",fillspace:true,sort:"string", labelWidth : 150}
     ],
on :{
"data->onStoreUpdated":function(){
        	 this.data.each(function(obj, i){
        	 obj.index = i+1;
        	 })
        	},
},
}]
},

webix.ui({ 
 	view:"window",
    id:"addSystemWindow",
    head : "Add System",
    css:'brix_popup loggingModalCss',
    modal:true,
    position: "center", 
    heightetHeightInPercentage(25),
    widthetWidthInPercentage(35), 
    move:true, 
    resize:true,
    headHeight:28,
    body:{
    	rows : [{
    	 gravity : 9,
    	 view:"form",
    	 id:"add-system-form", 
    	 scroll:'auto',
    	 css:"brix_form user_add_form",
    	 rows{
    	 view:"flexlayout", 
gravity:1,
cols : [{
view : 'label',
label:"<span class='brix_form_label'>" + systemLocales.name + "</span> <span style='color : red;'> *</span>", 
width: 180,
minWidth : 250,
},{
view:"text", 
name:"name", 
id : "systemName",
minWidth:140,
invalidMessage: systemLocales.thisfield,
required : true,
}]
    	 },{
    	 view:"flexlayout", 
gravity:1,
cols : [{
view : 'label',
label:"<span class='brix_form_label'>" +systemLocales.description+ "</span>", 
width: 180,
minWidth : 250,
},{
view:"text", 
name:"description", 
minWidth:140,
id : "descriptionId",
}]
    	 }],
    	           rules:{
    	         	  "name": webix.rules.isNotEmpty,
//    	         	  "description" : function(value){
//    	         	   
//    	         	  }
    	           } 
    	},{
    	 cols : [{},{
        	  view:"button", 
        	  type:"htmlbutton",
        	  label: systemLocales.add,
        	  css : 'buttonCss',
        	  autowidth : true,
        	  click : function(){
        	   var formData = $$('add-system-form').getValues();
        	   if($$('add-system-form').validate()){
        	   
        	   }
        	  }
          },{
        	  view:"button",
        	  type:'htmlbutton',
        	  css : 'buttonCss',
        	  autowidth : true,
        	  label: systemLocales.cancel,
        	  click : function(){
        	   $$('add-system-form').clear();
    	   $$('addSystemWindow').define('height', setHeightInPercentage(25));
        	   $$('addSystemWindow').define('width', setWidthInPercentage(35));
        	   $$('addSystemWindow').define('position',"center";
        	   $$('addSystemWindow').hide();
        	  } 
          },{}]
    	}]
    },
    on:{
    	'onShow' : function(){
    	 $$('addSystemWindow').resize();
    	},
      	 'onBeforeShow' : function(){
      	 $$('add-system-form').clearValidation();
      	 },
      	}
});


webix.ui({ 
 	view:"window",
    id:"editSystemWindow",
    head : "Edit System",
    css:'brix_popup loggingModalCss',
    modal:true,
    position: "center", 
    heightetHeightInPercentage(25),
    widthetWidthInPercentage(35), 
    move:true, 
    resize:true,
    headHeight:28,
    body:{
    	rows : [{
    	 gravity : 9,
    	 view:"form",
    	 id:"edit-system-form", 
    	 scroll:'auto',
    	 css:"brix_form user_add_form",
    	 rows{
    	 view:"flexlayout", 
gravity:1,
cols : [{
view : 'label',
label:"<span class='brix_form_label'>" + systemLocales.name + "</span> <span style='color : red;'> *</span>", 
width: 180,
minWidth : 250,
},{
view:"text", 
name:"name", 
id : "systemName",
minWidth:140,
invalidMessage: systemLocales.thisfield,
required : true,
}]
    	 },{
    	 view:"flexlayout", 
gravity:1,
cols : [{
view : 'label',
label:"<span class='brix_form_label'>" +systemLocales.description+ "</span>", 
width: 180,
minWidth : 250,
},{
view:"text", 
name:"description", 
minWidth:140,
id : "descriptionId",
}]
    	 }],
    	           rules:{
    	         	  "name": webix.rules.isNotEmpty,
//    	         	  "description" : function(value){
//    	         	   
//    	         	  }
    	           } 
    	},{
    	 cols : [{},{
        	  view:"button", 
        	  type:"htmlbutton",
        	  label: systemLocales.edit,
        	  css : 'buttonCss',
        	  autowidth : true,
        	  click : function(){
        	   var formData = $$('edit-system-form').getValues();
        	   if($$('edit-system-form').validate()){
        	   
        	   }
        	  }
          },{
        	  view:"button",
        	  type:'htmlbutton',
        	  css : 'buttonCss',
        	  autowidth : true,
        	  label: systemLocales.cancel,
        	  click : function(){
        	   $$('edit-system-form').clear();
    	   $$('editSystemWindow').define('height', setHeightInPercentage(25));
        	   $$('editSystemWindow').define('width', setWidthInPercentage(35));
        	   $$('editSystemWindow').define('position',"center";
        	   $$('editSystemWindow').hide();
        	  } 
          },{}]
    	}]
    },
    on:{
    	'onShow' : function(){
    	 $$('editSystemWindow').resize();
    	},
      	 'onBeforeShow' : function(){
      	 $$('edit-system-form').clearValidation();
      	 selectedRoleItem = $$('systemGrid').getSelectedItem();
      	 $.LoadingOverlay("show", spinner);
  	 $$('edit-system-form').setValues({
  	 id : selectedRoleItem.systemId,
  	 name : selectedRoleItem.systemname,
description : selectedRoleItem.systemdescription,
});
  	 $.LoadingOverlay("hide", spinner);
      	 },
      	}
});


webix.event(window, 'resize',function() {
    $$("addSystemWindow".config.height = setHeightInPercentage(25);
    $$("addSystemWindow".config.width = setWidthInPercentage(35);
    $$('addSystemWindow').resize(); 
    $$("editSystemWindow".config.height = setHeightInPercentage(25);
    $$("editSystemWindow".config.width = setWidthInPercentage(35);
    $$('editSystemWindow').resize();
});


}]);




//////Solution1

var json_data = [
        {json content }
];
 
webix.ui({
    view:"datatable",
    columns:[..],
    data: json_data
});





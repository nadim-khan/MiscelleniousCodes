var status;
function onBodyLoad(){
	var name = window.localStorage.getItem("Name");
	var address = window.localStorage.getItem("Address");
	
	
	if(name == null && address == null){
		document.getElementById("addButton").disabled = false;
	}
	else{
		document.getElementById("syncButton").disabled = false;
	}
}

function addIt(){
	
	var name = document.getElementById("name").value;
	var addr = document.getElementById("addr").value;
	
	$.ajax({
		url:"shootIt",
		type:'GET',
		data:{
			name : name,
			address : addr,
		},
		contentType:'application/json',
		success:function(resp){
			status=resp.status;
			$("#statusId").html(status);
			
		},error:function(err){
			status=err.status;
			$("#statusId").html(status);
			window.localStorage.setItem("Name",name);
			window.localStorage.setItem("Address",addr);
		}
	});
	
}

function syncIt(){
	
	var name = window.localStorage.getItem("Name");
	var address = window.localStorage.getItem("Address");
	
	$.ajax({
		url:"shootIt",
		type:'GET',
		data:{
			name : name,
			address : addr,
		},
		contentType:'application/json',
		success:function(resp){
			status=resp.status;
			$("#statusId").html(status);
			
		},error:function(err){
			status=err.status;
			$("#statusId").html(status);
			window.localStorage.setItem("Name",name);
			window.localStorage.setItem("Address",addr);
		}
	});
	
}



function checkList(){
var endPoint= "https://cors-anywhere.herokuapp.com/http://www.iamodin.com/mobile/functions.php?function=checkList";
var xhr = new XMLHttpRequest();
		xhr.open('GET', endPoint, true);
		xhr.onload = function(){
			if (this.status == 200){
				var data = JSON.parse(this.response);
				var info = '';

				for (i=0; i<data.length; i++) {
					info += '<br><div class="forms" id="'+data[i].id+'">'+data[i].list+'</div>';
					// info += '<div class="fa-2x"><i class="fas fa-times-circle fa-spin"></i><button class="buttons" onclick="delList('+data[i].id+')">Delete</button><i class="fas fa-pen-square fa-spin"></i><button class="buttons" onclick="editList('+data[i].id+')">Edit</button></div>';
					info += '<div class="fa-2x"><button class="buttons" title="delete" onclick="delList('+data[i].id+')"><i class="fas fa-times-circle fa-spin"></i></button><button class="buttons" title="edit" onclick="editList('+data[i].id+')"><i class="fas fa-pen-square fa-pulse"></i></button></div>';
					// info += '<button class="buttons" onclick="delList('+data[i].id+')">Delete</button>';
					// info += '<button class="buttons" onclick="editList('+data[i].id+')">Edit</button>';
     			}
				document.getElementById('todo').innerHTML = info;
			};
		};
		xhr.send();
};

function addList(){
	var x = '';
	x += '<br> <div class="forms"> Add to List: <input class="forms" type="text" name="list"></div><br>';
	x += '<button class="buttonzxc buttons" onclick="addTodo()">Add</button>';
	document.getElementById('todo').innerHTML = x;
}

function addTodo(){
	var endPoint = "https://cors-anywhere.herokuapp.com/http://www.iamodin.com/mobile/functions.php?function=addTodo";

	var formData = new FormData();
	formData.append("list", document.getElementsByName("list")[0].value);

	var xhr = new XMLHttpRequest();
		xhr.open('POST', endPoint, true);
		xhr.onload = function(){
			if (this.status == 200){
				checkList();
			};
		};
		xhr.send(formData);
}

function delList(id){
	var endPoint = "https://cors-anywhere.herokuapp.com/http://www.iamodin.com/mobile/functions.php?function=delList&id="+id;
	var xhr = new XMLHttpRequest();
		xhr.open('GET', endPoint, true);
		xhr.onload = function(){
			if (this.status == 200){
				checkList();
			};
		};
		xhr.send();
		
};


function editList(id){
var x = '';
	x += '<br><div class="forms"> Add to List: <br><input class="forms" type="text" name="listEDIT"></div><br>';
	x += '<button class="buttons" onclick="updateList('+id+')">Update List</button>';
	document.getElementById('todo').innerHTML = x;
};
function updateList(id){
	var endPoint = "https://cors-anywhere.herokuapp.com/http://www.iamodin.com/mobile/functions.php?function=updateList&id="+id;
	var formData = new FormData();
	formData.append("list", document.getElementsByName("listEDIT")[0].value);

	var xhr = new XMLHttpRequest();
		xhr.open('POST', endPoint, true);
		xhr.onload = function(){
			if (this.status == 200){
				viewUser(id);
			};
		};
		xhr.send(formData);
}

function aboutus(){
var x = '';
	x += '<br> <div class="forms"><ul><li>Author</li><li>Odin Malong</li><li></li><li><a href="www.iamodin.com" style="text-decoration:none;color:inherit;">Visit my Portfolio</a></li></ul> </div><br>';
	document.getElementById('todo').innerHTML = x;

}
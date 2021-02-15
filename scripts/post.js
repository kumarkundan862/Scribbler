
//call editFun() to edit and save the post
function editFun(button) {
	

  var initialTitle = document.getElementById("titleline");
  var initialPara = document.getElementById("para");
  
  if (initialTitle.contentEditable == "true" && initialPara.contentEditable == "true") {
    initialTitle.contentEditable = "false";
	initialPara.contentEditable = "false";
    button.innerHTML = "Edit <i class='fa fa-edit'></i>";
	//set the color of the border to none after clicking on save button
	initialTitle.style.border = "none";	
	initialPara.style.border = "none";	
  } 
  
  else {
    initialTitle.contentEditable = "true";
	initialPara.contentEditable = "true";
    button.innerHTML = "Save <i class='fa fa-save'></i>";
	
	//set the color of the border after clicking on edit button
	initialTitle.style.border = "solid #FFB6C1";
    initialPara.style.border = "solid #FFB6C1";
  }
  
}


//set the count like to 0
var countLike = 0;
//call the like function to get the number of likes count 
 function likeFun(likeId){
	document.getElementById(likeId).innerHTML="<i class='fa fa-thumbs-up'></i> Liked";
	countLike++;
	if(countLike==1){
	document.getElementById('likes-count').innerText=countLike +' person likes this!';
	}
	else{
		document.getElementById('likes-count').innerText=countLike +' people like this!';
	}

	   	
}

//call comment fun to comment
function addComment(id){
	
	
  var newItem = document.createElement("LI");
  var getText = document.getElementById("userComment").value;
  var textnode = document.createTextNode(getText);
  newItem.appendChild(textnode);

  var list = document.getElementById("addedCommentSection");
  list.insertBefore(newItem, list.childNodes[0]);
  document.getElementById('userComment').value='';
	  	  
}



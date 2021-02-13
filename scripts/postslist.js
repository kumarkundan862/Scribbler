var deleteModal = document.getElementById("deletePostModal");

var cardNumber;

function trashPost(trashId){
	deleteModal.style.display = "block";
	
	cardNumber = trashId;
	//console.log(cardNumber);
	
    //get the yes button to delete the postId
	var yesButton = document.getElementById("confirmDeleteRequest");
	
    //get post Id to be deleted
    var postId = "post"+cardNumber;
    
    
    yesButton.onclick = function() {
    document.getElementById(postId).remove();
    deleteModal.style.display = "none";
    
     }
     
	//get the yes button to delete the postId 
    var noButton = document.getElementById("revertDeleteRequest");
    
     noButton.onclick = function() {
    deleteModal.style.display = "none";
    
     }
}





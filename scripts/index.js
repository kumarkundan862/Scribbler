// Get the modal
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");
var createPostModal = document.getElementById("createPostModal");


// Get the <span> element that closes the modal
var signUpSpan = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
signUpSpan.onclick = function() {
  signUpModal.style.display = "none";
}



// Get the <span> element that closes the modal
var signInSpan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
signInSpan.onclick = function() {
  signInModal.style.display = "none";
}
//when New member clicks on signup from the modal 
function newMemberSignUp(){
	signInModal.style.display = "none";
	signUpModal.style.display = "block";
	
}

// Get the button that opens the modal
var createPostBtn = document.getElementById("createPost");

// Get the <span> element that closes the modal
var createPostSpan = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
createPostBtn.onclick = function() {
  createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
createPostSpan.onclick = function() {
  createPostModal.style.display = "none";
}


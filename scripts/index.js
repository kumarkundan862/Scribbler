// Get the modal

var createPostModal = document.getElementById("createPostModal");




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


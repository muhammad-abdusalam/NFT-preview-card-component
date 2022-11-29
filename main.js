const card = document.querySelector("article.card");
const signPost = document.querySelector(".signpost");
const showSignBtn = document.querySelector(".show-signpost");

card.style.display = "flex";
showSignBtn.onclick = function () {
  this.classList.toggle("clicked");
  if (card.style.display === "flex") {
    // Hide The Card
    card.style.display = "none";
    // Show The Signpost
    signPost.style.opacity = "1";
  } else {
    // Show The Card
    card.style.display = "flex";
    // Hide The Signpost
    signPost.style.opacity = "0";
  }
};

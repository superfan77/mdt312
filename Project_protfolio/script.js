document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio loaded successfully!");

    const profileImg = document.querySelector(".profile-img");
    
    if(profileImg) {
        profileImg.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        
        profileImg.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    }
});
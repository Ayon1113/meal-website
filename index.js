let mainButton = document.querySelector(".hero-btn");
mainButton.addEventListener("click",function(){
    mainButton.classList.add("clicked")
    setTimeout(() => {

        mainButton.classList.remove("clicked");

    },100);

});




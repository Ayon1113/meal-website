let mainButton = document.querySelector(".hero-btn");
mainButton.addEventListener("click",function(){
    mainButton.classList.add("clicked")
    setTimeout(() => {

        mainButton.classList.remove("clicked");

    },100);

});

let footerButtons = document.querySelectorAll(".footer-button");
for(i = 0; i < footerButtons.length; i++){
    footerButtons[i].addEventListener("mouseover", function(){
        this.classList.add("footer-button-pressed");


    });
    footerButtons[i].addEventListener("mouseout",function(){
        this.classList.remove("footer-button-pressed");
    });

}




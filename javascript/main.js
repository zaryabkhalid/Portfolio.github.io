const btnscrollup = document.querySelector("#btn-scroll-up");
btnscrollup.addEventListener("click", function () {
    window.scrollTo(0,0);
});

const btnscrolldown = document.querySelector("#btn-scroll-down");
btnscrolldown.addEventListener("click",function(){
    window.scrollTo(0,document.body.scrollHeight);
})
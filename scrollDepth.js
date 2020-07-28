function callbackFn(activate, options) {
document.addEventListener('DOMContentLoaded', function(event) {
  function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
 
var docheight = getDocHeight();

function amountscrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
    var docheight = getDocHeight();
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var trackLength = docheight - winheight;
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);
    console.log(pctScrolled + '% scrolled');
    // add logic to execute activate() when user scrolls past 62% of the page
}
 
window.addEventListener("scroll", function(){
    amountscrolled();
}, false);
});
}

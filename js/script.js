function manageScroll() {
    if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) {
        topButton.style.display = "block";
    } 
    else {
        topButton.style.display = "none";
    }
}
  
  function jumpToTop() {
    document.body.scrollTop= 0;
    document.documentElement.scrollTop = 0;
  }
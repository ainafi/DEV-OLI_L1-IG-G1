document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        document.querySelector(".loading-container").style.display = 'none';
        document.querySelector(".content").style.display = 'block';
    }, 3000); 


    var cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", function(e) {
        cursor.style.left=(e.pageX-25)+"px"
        cursor.style.top=(e.pageY-25)+"px"
        
    });
});

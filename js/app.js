
// Scroll interaction for about section.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Scroll interaction for best sellers and recent blogs sections.
window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// Overlay on click interaction for best sellers items.
    document.getElementById("overlay1").addEventListener("click", function(){
    var e =document.getElementsByClassName("modalbox");
   
           e[0].style.display = 'inline-block';
      
   })	;
   document.getElementById("close1").addEventListener("click", function(){
      var e =document.getElementsByClassName("modalbox");
    e[0].style.display= 'none';
   });


   document.getElementById("overlay2").addEventListener("click", function(){
    var e =document.getElementsByClassName("modalbox");
   
           e[1].style.display = 'inline-block';
      
   })	;
   document.getElementById("close2").addEventListener("click", function(){
      var e =document.getElementsByClassName("modalbox");
    e[1].style.display= 'none';
   });

   document.getElementById("overlay3").addEventListener("click", function(){
    var e =document.getElementsByClassName("modalbox");
   
           e[2].style.display = 'inline-block';
      
   })	;
   document.getElementById("close3").addEventListener("click", function(){
      var e =document.getElementsByClassName("modalbox");
    e[2].style.display= 'none';
   });

   document.getElementById("overlay4").addEventListener("click", function(){
    var e =document.getElementsByClassName("modalbox");
   
           e[3].style.display = 'inline-block';
      
   })	;
   document.getElementById("close4").addEventListener("click", function(){
      var e =document.getElementsByClassName("modalbox");
    e[3].style.display= 'none';
   });

   document.getElementById("overlay5").addEventListener("click", function(){
    var e =document.getElementsByClassName("modalbox");
   
           e[4].style.display = 'inline-block';
      
   })	;
   document.getElementById("close5").addEventListener("click", function(){
      var e =document.getElementsByClassName("modalbox");
    e[4].style.display= 'none';
   });



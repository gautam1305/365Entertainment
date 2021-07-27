var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var length=slides.length;
function plusSlides(n) {
   slideIndex += n
   if (slideIndex > length) {slideIndex = 1;}    
  if (slideIndex < 1) {slideIndex = length;}
  for (let i = 0; i < length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  }

  function changefunc(){
      var selectBox=document.getElementById("selectBox");
      var selectedValue=selectBox.options[selectBox.selectedIndex].value;
      
      if(selectedValue=='all')
      {
         const movies=document.getElementsByClassName("movie");
           for(let i=0;i<movies.length;i++)
          {
            movies[i].style.display="block";// we are accessing complete div and not img
           }
           /*whenever we have to retrieve single element always use id*/ 
          document.getElementById("movie1").style.display="block";//we are accessing complete div and not img
          document.getElementById("movie2").style.display="block";// we are accessing complete div and not img
          document.getElementById("movie3").style.display="block";// we are accessing complete div and not img
        }
        if(selectedValue=='action')
      {
         const movies=document.getElementsByClassName("movie");
           for(let i=0;i<movies.length;i++)
          {
            movies[i].style.display="none";
           }
           document.getElementById("movie1").style.display="block";
           document.getElementById("movie2").style.display="block";
           document.getElementById("movie3").style.display="block";
    }
    if(selectedValue=='drama')
    {
       const movies=document.getElementsByClassName("movie");
         for(let i=0;i<movies.length;i++)
        {
          movies[i].style.display="none";
         }
         document.getElementById("movie1").style.display="block";
         document.getElementById("movie2").style.display="none";
         document.getElementById("movie3").style.display="block";
  }
  if(selectedValue=='sci')
  {
     const movies=document.getElementsByClassName("movie");
       for(let i=0;i<movies.length;i++)
      {
        movies[i].style.display="none";
       }
       document.getElementById("movie1").style.display="none";
       document.getElementById("movie2").style.display="block";
       document.getElementById("movie3").style.display="none";
}
}
function search(){
    const search=document.getElementById("search").value;
    if(search=='movie1')
    {
      document.getElementById("movie1").style.display="block"; 
      }
    if(search=='movie2')
    {
      document.getElementById("movie2").style.display="block"; 
    }
    if(search=='movie3')
    {
      document.getElementById("movie3").style.display="block"; 
    }
}

button=document.querySelector(".toggle-btn")
link=document.querySelector(".links")

button.addEventListener("click",function(){
   // console.log(link.classList.contains("show-links"))
   link.classList.toggle("show-links")
})
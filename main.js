// Get all the links under list class
const links = document.querySelectorAll(".list > li > a");
// check for individual link
links.forEach(link => {
    // check the current path if its match the window pth
   if (link.pathname === window.location.pathname)
   {
       link.classList.add("active");// add the active classname the the current path
   }
});

// handle on click on explore btn

const explore = document.querySelector(".explore-btn");
if(explore)
{
    explore.addEventListener("click", ()=>{
        window.location.pathname = "/gallery.html";
    })
}


const logo = document.querySelector(".logo-container");
console.log(logo);
if(logo)
{
    logo.addEventListener("click", ()=>{
        console.log("logo is clicked")
        window.location.pathname = "/index.html";
    })
}


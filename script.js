let button = document.getElementById("icon")
let links = document.getElementById("links")
let svgHero = document.getElementById("svgHero") 
let itemsButton = document.getElementsByClassName("skillsItem")
let count = 0

button.addEventListener("click", function(){
    if(count===0){
        links.className = ("links active")
        svgHero.classList = ("svgHeroInactive")
        count = 1
    }else{
        links.classList.remove("active")
        links.className = ("links inactive")
        svgHero.classList.remove("svgHeroInactive")
        count = 0
    }
})

itemsButton[0].addEventListener("click", function(){
    if(count===0){
        links.className = ("links active")
        svgHero.classList = ("svgHeroInactive")
        count = 1
    }else{
        links.classList.remove("active")
        links.className = ("links inactive")
        svgHero.classList.remove("svgHeroInactive")
        count = 0
    }
})
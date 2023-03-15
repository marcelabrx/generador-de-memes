//overall constant
const $ = (selector) => document.querySelector(selector) 

// dark and light mode
$("#light-theme").addEventListener("click", () =>{
    const changeTheme = $("body").getAttribute("data-theme")
    if ("body" != changeTheme){
        $("#dark-theme").classList.remove("hidden")
        $("#light-theme").classList.add("hidden")
        $("body").removeAttribute("data-theme", "dark_theme")
    } else{
        $("#dark-theme").classList.add("hidden")
        $("#light-theme").classList.remove("hidden")
        $("body").setAttribute("data-theme", "dark_theme")
    }
})
$("#dark-theme").addEventListener("click", () =>{
    const addTheme = $("body").getAttribute("data-theme")
    if ("body" != addTheme){
        $("#dark-theme").classList.add("hidden")
        $("#light-theme").classList.remove("hidden")
        $("body").setAttribute("data-theme", "dark_theme")
    } else{
        $("#dark-theme").classList.remove("hidden")
        $("#light-theme").classList.add("hidden")
        $("body").removeAttribute("data-theme", "dark_theme")
    }
})

//panel image
$("#image_btn").addEventListener("click", () =>{
    const regAction = $("body").getAttribute("hidden")
    if ("body" === regAction){
        $(".edition__image").classList.add("hidden")
        $(".btn__xmark").classList.add("hidden")
        $(".edition__text").classList.remove("hidden")
        $("body").setAttribute("hidden", "flex")
    } else {
        $(".edition__image").classList.remove("hidden")
        $(".btn__xmark").classList.remove("hidden")
        $(".edition__text").classList.add("hidden")
        $("body").removeAttribute("hidden", "flex")
    }
})
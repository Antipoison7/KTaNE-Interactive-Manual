let manualSwitch = document.getElementById("advanced-toggle");
document.getElementById("advanced-toggle").addEventListener("click", switchManual);

if(localStorage.getItem("manualType") !== "advanced" && localStorage.getItem("manualType") !== "basic"){
    localStorage.setItem("manualType", "basic");
}

if(localStorage.getItem("manualType") === "advanced"){
    manualSwitch.checked = true;
}

function switchManual(){
    if(manualSwitch.checked){
        localStorage.setItem("manualType", "advanced");
        updateLinks("advanced");
    }
    else{
        localStorage.setItem("manualType", "basic");
        updateLinks("basic");
    }
}

function updateLinks(mType){
    let links = document.getElementsByClassName("footerLink");

    if(mType === "advanced"){
        for(let link of links){
            let fileName = link.pathname.substring(link.pathname.lastIndexOf("/") + 1);
            link.setAttribute("href", `${window.location.href.substring(0, window.location.href.length-10)}advanced/${fileName}`);
        }
    }
    else{
        for(let link of links){
            let fileName = link.pathname.substring(link.pathname.lastIndexOf("/") + 1);
            link.setAttribute("href", `${window.location.href.substring(0, window.location.href.length-10)}basic/${fileName}`);
        }
    }
}

updateLinks(localStorage.getItem("manualType")|| "basic")

function updateLinks(mType){
    let links = document.getElementsByClassName("footerLink");

    if(mType === "advanced"){
        for(let link of links){
            let fileName = link.pathname.substring(link.pathname.lastIndexOf("/") + 1);
            link.setAttribute("href", `${window.location.href.substring(0, window.location.href.length-10)}advanced/${fileName}`);
        }
    }
    else{
        for(let link of links){
            let fileName = link.pathname.substring(link.pathname.lastIndexOf("/") + 1);
            link.setAttribute("href", `${window.location.href.substring(0, window.location.href.length-10)}basic/${fileName}`);
        }
    }
}
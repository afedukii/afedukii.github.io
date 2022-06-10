function global() {
    
    setTimeout(function(){
        document.getElementById("autoWrite1").style.visibility = "visible";
    }, 1100);
    setTimeout(function(){
        document.getElementById("autoWrite2").style.visibility = "visible";
    }, 2100);
    setTimeout(function(){
        document.getElementById("autoWrite3").style.visibility = "visible";
    }, 3100);
    setTimeout(function(){
        document.getElementById("autoWrite4").style.visibility = "visible";
    }, 4100);
}
resizeWindow();
window.addEventListener('resize', resizeWindow);

function resizeWindow(){
    if(window.innerWidth < 710){
        document.getElementById("deskMenuLogo").classList.remove("col-sm-6");
        document.getElementById("deskMenuLogo").classList.add("col-sm-12");
        document.getElementById("textPres").classList.remove("col-sm-6");
        document.getElementById("textPres").classList.add("col-sm-12");
    }else{
        document.getElementById("deskMenuLogo").classList.remove("col-sm-12");
        document.getElementById("deskMenuLogo").classList.add("col-sm-6");
        document.getElementById("textPres").classList.remove("col-sm-12");
        document.getElementById("textPres").classList.add("col-sm-6");
    }
}

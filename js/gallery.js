resizeWindow();
window.addEventListener('resize', resizeWindow);
function resizeWindow(){
    if(window.innerWidth < 770){
        document.getElementById("spanCopyFooter").style.marginTop = "15px";
		document.getElementById("spanSocialFooter").style.marginTop = "15px";
		document.getElementById("copyrightBar").style.height = "100px";
		document.getElementById("copyrightBar").classList.remove("align-items-center");
		document.getElementById("copyrightBar").classList.add("align-items-start");
		var txtDescriptionElements = document.getElementsByClassName("project_description");
		for(var i=0;i<txtDescriptionElements.length;i++){
			txtDescriptionElements[i].style.textAlign = "justify";
		}
		document.getElementById('navBarHead').style.zIndex = 5;
		document.getElementById('navBarBottom').style.zIndex = 5;
    }else{
		document.getElementById("spanCopyFooter").style.marginTop = "0px";
		document.getElementById("spanSocialFooter").style.marginTop = "0px";
		document.getElementById("copyrightBar").style.height = "50px";
		document.getElementById("copyrightBar").classList.remove("align-items-start");
		document.getElementById("copyrightBar").classList.add("align-items-center");
		var txtDescriptionElements = document.getElementsByClassName("project_description");
		for(var i=0;i<txtDescriptionElements.length;i++){
			txtDescriptionElements[i].style.textAlign = "center";
		}
		
		document.getElementById('navBarHead').style.zIndex = 5;
    }
}
window.onload = function () {
	$('#loader').fadeOut();
	$('body').removeClass('hidden');
    var flagsElements = document.querySelectorAll('.flags')
    for (i = 0; i < flagsElements.length; i++) {
    	flagsElements[i].addEventListener("click",(e)=>{
			changeLanguage(e.target.parentElement.dataset.language);
			if(e.target.parentElement.dataset.language == "gb"){
				document.getElementById('i-es').style.display = 'none';
				document.getElementById('i-en').style.display = 'block';
			}else{
				document.getElementById('i-en').style.display = 'none';
				document.getElementById('i-es').style.display = 'block';
			}
    	});
    }
	if(window.innerWidth < 770){
		document.getElementById('navBarHead').style.zIndex = 5;
		document.getElementById('navBarBottom').style.zIndex = 5;
    }else{		
		document.getElementById('navBarHead').style.zIndex = 5;
    }
}
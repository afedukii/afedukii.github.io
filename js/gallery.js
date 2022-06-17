
const textsToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async (language) => {
	const requesJson = await fetch('https://afedukii.github.io/languages/'+language+'.json');
	const texts = await requesJson.json();
	for(const textToChange of textsToChange){
		const section = textToChange.dataset.section;
		const value = textToChange.dataset.value;
		textToChange.innerHTML = texts[section][value];
	}
};


window.onload = function () {
	$('#loader').fadeOut();
	$('body').removeClass('hidden');
    var flagsElements = document.querySelectorAll('.flags')
    for (i = 0; i < flagsElements.length; i++) {
    	flagsElements[i].addEventListener("click",(e)=>{
			changeLanguage(e.target.parentElement.dataset.language);
    	});
    }
	if(window.innerWidth < 770){
		document.getElementById('navBarHead').style.zIndex = 5;
		document.getElementById('navBarBottom').style.zIndex = 5;
    }else{		
		document.getElementById('navBarHead').style.zIndex = 5;
    }
}

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
/* icon bar rotation */
function rotateIcon(x) {
    x.classList.toggle("change");
	var mobileMenu = document.getElementById("mobileMenu");
	if(mobileMenu.style.display == "block"){
		mobileMenu.style.display = "none";
	}else{
		mobileMenu.style.display = "block";
	}
}


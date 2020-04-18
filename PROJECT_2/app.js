function toLink(section) {
	const link = document.createElement('a');
	const text = document.createTextNode(section.dataset.nav);
	link.appendChild(text);
	link.href = `#${section.id}`;
	return link;
}

const sections = Array.from(document.getElementsByTagName('section'));
const links = sections.map(toLink);

const navigation = document.getElementById('navbar_list');
links.forEach(link => navigation.appendChild(link));

links.addEventListener('click', function(){
	sections.scrollIntoView();
});


function triggerView(){
	const femdisplay = document.querySelector("#displaySales")
	if(femdisplay.style.display === 'none'){
		femdisplay.style.display = 'block';
	}else{
		femdisplay.style.display = 'none';
	}
}

function salesMen(){
	const salesman = document.getElementById("displayMens");
	salesman.style.cssText = "color:maroon; font-weight:bold";
	salesman.textContent ='$15.25';
}

function salesMen2(){
	const newSalesMan = document.getElementById("displaynewItem");
	newSalesMan.style.cssText = "color:maroon; font-weight:bold";
	newSalesMan.textContent = "$17.18";
}

function kidsview(){
	const kidsShow = document.querySelector("#kidsDisplay");
	kidsShow.textContent = "Sorry kids, there are no sales"

}

function checkMen(){
	const maleSale = document.querySelector("#SalesDispay");
	maleSale.style.cssText = 'color:white; font-style:italic';
	maleSale.textContent = "Appy 25% on new Arrivals";

	if(maleSale.style.display = 'color:white; font-style:italic'){
		maleSale.style.display = 'block';
	}else{
		maleSale.style.display = 'none';
	}
}


/*** 
 function navBarfunction (){
    const ulorder = document.querySelectorAll(".Navbar");
    ulorder = [a href = "#Home", a href = "#men",  a href = "#women"]
    for(let i = 0; i < ulorder.lenght; i++){
        let link1 = ulorder[0];
        let link2 = ulorder[1];
        let link3 = ulorder[2];
    }

}




 */
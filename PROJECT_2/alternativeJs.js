<ul id = "Navbar">
<li id = "homeSector"><a href = "#Home">Home</a></li>
<li id = "maleSector"><a href= "#mens">Men</a></li>
<li id = "femaleSector"><a href= "#womens">Women</a></li> 
<li id = "kidsSector"><a href= "#kids">Children</a></li>
</ul>

function dynamicBar(){
let navLink = document.getElementById("Navbar");
for (let i = 0; i < navLink.lenght; i++){
let newLinkHome = document.getElementById("homeSector");
newLinkHome.document.body.append;
let newLinkMens = document.getElementById("maleSector");
newLinkMens.document.body.append;
let newLinkWomens = document.getElementById("femalSector");
newLinkWomens.document.body.append;
let newLinkKids = document.getElementById("kidsSector");
newLinkKids.document.body.append;
    }

}

//Here, I am going to select the links and attach eventlistener function to each link 
function newdynamicLink(){
    let navLink1 = document.querySelector("#homeSector");
        navLink1.addEventListener('click', function(){
            let homeSection = str.link("index.html");
            navLink1.innerHTML = homeSection; 
        });

    let navLink2 = document.querySelector("#maleSector");
        navLink2.addEventListener('click', function(){
            let menSection = str.link("index.html#mens");
            navLink2.innerHMTL = menSection;
        });

    let navLink3 = document.querySelector("#femaleSector");
        navLink3.addEventListener('click', function(){
            let womenSection = str.link("index.html#womens");
            navLink3.innerHTML = womenSection;
        });

    let navLink4 = document.querySelector("#kidsSector");
        navLink4.addEventListener('click', function(){
            let KidSection = str.link("index.html#kids");
            navLink4.innerHTML = KidSection;
        });
}

/**someone else's code
 function myFunction(){
  const sections= document.getElementsByTagName("section");
  let i;
    for ( i = 0; i < sections.length; i++){
      var node = document.createElement("LI");
      var aTag = document.createElement('a');
      var atag = aTag.setAttribute('href',"#"+sections[i].id);
      aTag.innerText= sections[i].id
      var newAnchor = node.appendChild(aTag);
      document.getElementById("navbar__list").appendChild(newAnchor);
    };
}
myFunction()
 */

function pagebar(){
  let NavMenu = document.getElementById("Navbar");
  for (var i=0; i < links.length; i++){
    let listSection = document.createElement("li")
    let label = document.createTextNode("Section Name")
    listSection.appendChild(label)
    let myLink = document.createElement('a');
    let newLinkAnrch = NavMenu.appendChild(myLink);

    newLinkAnrch.addEventListener('click' function(){
        let scrollSection = document.
    });
  }
}

/**or *
 * 
 * Let us use navbar as a nodelist containing links
 * when we loop through the node list, the links are display
 * the links we have an eventlistener
 * the eventlistener will contain the scroll function/
 * 
 * 
 function dynamicLink(){
     let navBar = document.querySelectorAll("navLinkCollections");
     for(let i = 0; i < navBar.lenght; i++){
         let newLinksConnection = narBar[i];
         newLinksConnection.addEventListener('click', function(){
             var sectionId = document.getElementById("homepageSection");
             sectionId.scrollIntoView();
             var sectionId = document.getElementById("mensSection");
             sectionId.scrollIntoView();
         })
     }
 }

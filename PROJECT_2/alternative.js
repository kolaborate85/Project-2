/*
<ul id = "navbar">
    <li id = "homeSector"><a href = "#Home">Home</a></li>
    <li id = "maleSector"><a href= "#mens">Men</a></li>
    <li id = "femaleSector"><a href= "#womens">Women</a></li>
    <li id = "kidsSector"><a href= "#kids">Children</a></li>
</ul>
*/

function dynamicBar() {
    let navLink = document.getElementById('navbar');
    for (let i = 0; i < navLink.length; i++) {
        const newLinkHome = document.getElementById('home-sector');
        // newLinkHome.document.body.append;
        const newLinkMen = document.getElementById('male-sector');
        // newLinkMen.document.body.append;
        const newLinkWomen = document.getElementById('female-sector');
        // newLinkWomen.document.body.append;
        const newLinkKids = document.getElementById('kids-sector');
        // newLinkKids.document.body.append;
    }
}

//Here, I am going to select the links and attach event listener function to each link
function newDynamicLink() {
    let navLink1 = document.querySelector('#homeSector');
    navLink1.addEventListener('click', function () {
        // navLink1.innerHTML = str.link('index.html');
    });

    let navLink2 = document.querySelector('#maleSector');
    navLink2.addEventListener('click', function () {
        // navLink2.innerHMTL = str.link('index.html#mens');
    });

    let navLink3 = document.querySelector('#femaleSector');
    navLink3.addEventListener('click', function () {
        // navLink3.innerHTML = str.link('index.html#womens');
    });

    let navLink4 = document.querySelector('#kidsSector');
    navLink4.addEventListener('click', function () {
        // navLink4.innerHTML = str.link('index.html#kids');
    });
}

/*someone else's code
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

function pagebar() {
    const NavMenu = document.getElementById('navbar');
    for (let i = 0; i < links.length; i++) {
        const listSection = document.createElement('li');
        const label = document.createTextNode('Section Name');
        listSection.appendChild(label);
        const myLink = document.createElement('a');
        const newLinkArch = NavMenu.appendChild(myLink);

        newLinkArch.addEventListener('click', function () {
            // let scrollSection = document.
        });
    }
}

/*
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
*/

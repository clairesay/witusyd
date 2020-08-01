// //Social Media Icons
// // var social = document.getElementsByClassName('social');
// // var socialIconNum = social.length;

// // function socialIconSize() {
// //     if (screen425.matches) {
// //         for (let i = 0; i < socialIconNum; i ++) {
// //             social[i].setAttribute('width', '24');
// //         }
// //     } else {
// //         for (let i = 0; i < socialIconNum; i ++) {
// //             social[i].setAttribute('width', '28'); 
// //         }
// //     }
// // }

// // var screen425 = window.matchMedia("(max-width: 425px)")
// // socialIconSize(screen425);
// // screen425.addListener(socialIconSize);


// /* SLIDE IN MENU */
// /*var menuSelect = document.getElementById('home');
// let hamburgerMenu = document.createElement('input');
// hamburgerMenu.setAttribute('type', 'checkbox');
// hamburgerMenu.style.display = 'none';
// menuSelect.appendChild(hamburgerMenu);*/

// /* Move the above into CSS!!! */

// var mobileMenuButton = document.getElementById('mobile-menu-button');
// var mobileMenuSelection = document.getElementById('mobile-menu-selection');

// function mobileMenu() {
//     mobileMenuButton.checked = false;

//     if (screen650.matches) {
//         mobileMenuButton.setAttribute('class', 'show');
//         mobileMenuSelection.setAttribute('class', 'show');
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 
//         document.getElementById('footer-logo').style.display = 'none';

//         document.getElementById('wit-logo').style.width = '150px';

// //moving the mobile iconss

// document.getElementById('logo-container').appendChild(document.getElementById('contact'));
// // document.getElementById('contact').style.gridArea = 'Contact';
// // document.getElementById('logo-container').style.gridTemplateColumns = '1fr 1fr 70px';
// // document.getElementById('logo-container').style.gridTemplateAreas = 'HomeLink Contact MobileMenu'

// //moving the mobile iconss

//         // document.getElementsByTagName('footer')[0].appendChild(document.getElementById('title'));
//         // document.getElementById('home').style.gridTemplateRows = '"90px" "1fr"'
//         // document.getElementById('home').style.gridTemplateAreas = '"Logo Container" "Main"'


// /////////////////HEYYY SHADOW ON SCROLL/////////////////////////

//         document.addEventListener('scroll', function scrollCheck() {
//             if ((pageYOffset > 5) && (screen650.matches)) {
//                 document.getElementsByTagName('header')[0].style.boxShadow = '0px 2px 3px #aaa';
//                 // document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
//                 // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-active');
//             } else if (pageYOffset < 100) {
//                 document.getElementsByTagName('header')[0].style.boxShadow = '0px 0px 4px #aaa';
//                 // document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
//                 // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
//             }
//         })
//     } else {
//         mobileMenuButton.setAttribute('class', 'hidden');
//         mobileMenuSelection.setAttribute('class', 'hidden')
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'visible');
//         document.getElementById('footer-logo').style.display = 'flex';
//         document.getElementById('home').appendChild(document.getElementsByTagName('nav')[0]);

//         document.getElementById('home').style.overflow = "auto"
        
//         document.getElementById('wit-logo').style.width = '175px';



// //moving the mobile iconss

// document.getElementById('menu-items').appendChild(document.getElementById('contact'));

// //moving the mobile iconss



// /////////////////HEYYY SHADOW ON SCROLL/////////////////////////


//         document.addEventListener('scroll', function scrollCheck() {
//             if (pageYOffset > 1) {
//                 document.getElementsByTagName('nav')[0].style.boxShadow = '0px 2px 3px #aaa';
//                 // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-active');
//             } else if (pageYOffset < 1) {
//                 document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 4px #aaa';
//                 // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
//             }
//         })
//     }
// }

// var screen650 = window.matchMedia("(max-width: 650px)")
// mobileMenu(screen650);
// screen650.addListener(mobileMenu);

// var modlShowing = false;

// document.getElementById('mobile-menu-arrow').addEventListener('click', function decipher() {
//   // var targetElement = evt.target;
//   if (mobileMenuButton.checked) {
//     console.log('heyho');
//     // event.stopPropagation();
//     document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible');
        
//     document.getElementById('mobile-menu-button').style.justifySelf = 'flex-end';
//     document.getElementById('home').style.overflow = "auto"
//   } else if (mobileMenuButton.checked !== true) {
//     console.log('hihi');
//     document.getElementsByTagName('nav')[0].setAttribute('class', 'visible'); 

//     document.getElementById('mobile-menu-button').style.justifySelf = 'space-around';
//     document.getElementById('home').style.overflow = "hidden"
//   }
// })

// // document.getElementsByTagName('header')[0].addEventListener('click', informalMenuExit);
// document.getElementsByTagName('main')[0].addEventListener('click', informalMenuExit);
// document.getElementsByTagName('footer')[0].addEventListener('click', informalMenuExit);

// function informalMenuExit() {
//   if (mobileMenuButton.checked) {
//     mobileMenuButton.checked = false;
//     document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible');
        
//     document.getElementById('mobile-menu-button').style.justifySelf = 'flex-end';
//     document.getElementById('home').style.overflow = "auto"
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// mobileMenuButton.addEventListener('click', function displayMenu(evt) {
//   var targetElement = evt.target;
//     if (mobileMenuButton.checked) {

//         document.getElementsByTagName('nav')[0].setAttribute('class', 'visible');
        
//         document.getElementById('mobile-menu-button').style.justifySelf = 'space-around';
//         document.getElementById('home').style.overflow = "hidden"

//     } else if ((mobileMenuButton.checked !== true)) {
//         console.log('notactive');
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 

//         document.getElementById('mobile-menu-button').style.justifySelf = 'flex-end';
//         document.getElementById('home').style.overflow = "auto"
//     } else if (targetElement !== mobileMenuButton) {
//       console.log('getthis');
//     }
// });

// document.addEventListener('click', function exitMenu(evt) {

//   var navMenu = document.getElementById('menu-items');
//   var targetElement = evt.target;

//   if ((targetElement !== navMenu) && (targetElement !== mobileMenuButton)) {
//     mobileMenuButton.checked = false;
//     document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 

//     document.getElementById('mobile-menu-button').style.justifySelf = 'flex-end';
//     document.getElementById('home').style.overflow = "auto"
// }
// });


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let currentPage = document.getElementsByTagName('title')[0];

// if (currentPage == 'News & Events - Women in Technology') {
//     console.log('hdafhs');
// }

//FINDING THE FILE NAME TO HIGHLIGHT NAV

var path = window.location.pathname;
var currentPage = path.split("/").pop();

switch(currentPage) {
    case 'index.html':
      break;
    case 'about.html':
        document.getElementById('about').style.fontWeight = "600";
      break;
    case 'careers.html':
        document.getElementById('careers').style.fontWeight = "600";
      break;
    case 'news-events.html':
        document.getElementById('news-events').style.fontWeight = "600";
      break;
    case 'newsletters.html':
        document.getElementById('newsletters').style.fontWeight = "600";
      break;
    case 'resources.html':
        document.getElementById('resources').style.fontWeight = "600";
      break;
    case 'careers-opportunity-1.html':
        document.getElementById('careers').style.fontWeight = "600";
      break;
    case 'news-article-1.html':
        document.getElementById('news-events').style.fontWeight = "600";
      break;
    default:

  }




//////////////////////////////// SLIDER /////////////////////////////////
// for(let i = 0; i < 5; i ++) {
// document.getElementsByClassName('slide-link')[i].addEventListener('click', function preventAnchorLinkJump(event) {
//     event.preventDefault();
//     // document.getElementsByTagName('body').scrollTop = 200;
//     document.querySelector('h1').scrollTop = 700;

//     console.log('heyeyyayayay')
// })

// }

// document.addEventListener('scroll', function scrollCheck() {
//     if (pageYOffset > 90) {
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-active');
//     } else if ((pageYOffset > 90) && (screen650.matches)) {
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 
//     } else if (pageYOffset < 90) {
//         document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
//     }
// })

// screen650.addListener(function scrollCheck() {
//     if 
// })

        // } else if ((pageYOffset > 90) && (screen650.matches)) {
        //     document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
        //     document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 
        // } else if (pageYOffset < 90) {
        //     document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
        // }
    // })




///RESTORE THIS BECAUSE IT IS STILL NEEDEDDDD


// for (let i = 0; i < 5; i ++) {
//     document.getElementsByClassName('slide-link')[i].addEventListener('click', function scrollLevel() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     })
// }






// document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
//     if (document.getElementById('1').checked) {
//         // console.log('heyyyyy');
//         document.getElementById('event-sliders').scrollTo({
//             top: 100,
//             left: 0,
//             behavior: 'smooth'
//           });
//     } else if (document.getElementById('2').checked){
//         document.getElementById('event-sliders').scrollTo({
//             top: 100,
//             left: 400,
//             behavior: 'smooth'
//           });
//     } else if (document.getElementById('3').checked) {
//         document.getElementById('event-sliders').scrollTo({
//             top: 100,
//             left: 800,
//             behavior: 'smooth'
//           });
//     } else if (document.getElementById('4').checked) {
//         document.getElementById('event-sliders').scrollTo({
//             top: 100,
//             left: 1200,
//             behavior: 'smooth'
//           });
//     } else if (document.getElementById('5').checked) {
//         document.getElementById('event-sliders').scrollTo({
//             top: 100,
//             left: 1600,
//             behavior: 'smooth'
//           });
//     } else {

//     }
// })

// document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
//     if (document.getElementById('event-sliders').scrollLeft < 400) {
//         document.getElementById('1').checked = true;
//         console.log('hehe');
//     } else if (document.getElementById('event-sliders').scrollLeft < 800) {
//         document.getElementById('2').checked = true;
//         console.log('hehe');
//     } else if (document.getElementById('event-sliders').scrollLeft < 1200) {
//         document.getElementById('3').checked = true;
//         console.log('hehe');
//     } else if (document.getElementById('event-sliders').scrollLeft < 1650) {
//         document.getElementById('4').checked = true;
//         console.log('hehe');
//     } else if (document.getElementById('event-sliders').scrollLeft < 1725) {
//         document.getElementById('5').checked = true;
//         console.log('hehe');
//     };
// });



//   const textToCopy = document.getElementById('copyable');

//  textToCopy.onclick = function() {
//     document.execCommand("copy");
//     // console.log('ehehhehe');
//   }

//  textToCopy.addEventListener("copy", function(event) {
//     event.preventDefault();
//     if (event.clipboardData) {
//       event.clipboardData.setData("text/plain", textToCopy.textContent);
//       console.log(event.clipboardData.getData("text"))
//       document.getElementsByClassName('tooltip')[0].innerHTML = 'Text Copied!';
//       setTimeout(function() {
//         // document.getElementsByClassName('tooltip')[0].style.opacity = "0";
//         // document.getElementsByClassName('tooltip')[0].style.visibility = "hidden";
//         document.getElementsByClassName('tooltip')[0].innerHTML = 'Click to Copy';
//       }, 2000);
//     }
//   });

  // function iconCopyLink() {
  //   console.log('workstothisextent');
  //   // var copyText = ;
  //   // copyText.select();
  //   document.getElementById('yessir').select();
  //   document.execCommand("copy");
  //   alert("Copied the text: ");
  // }


  function iconCopyLink(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // document.getElementsByClassName('tooltip')[0].innerHTML = 'Text Copied!';
    // setTimeout(function() {
    //   // document.getElementsByClassName('tooltip')[0].style.opacity = "0";
    //   // document.getElementsByClassName('tooltip')[0].style.visibility = "hidden";
    //   document.getElementsByClassName('tooltip')[0].innerHTML = 'Click to Copy';
    // }, 2000);
}



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const menuButton = document.getElementsByClassName('menu-arrow')[0];
const menuArrow = document.querySelectorAll('.menu-arrow svg')[0];
const nav = document.getElementsByTagName('nav')[0];
var menuButtonToggle = true;

menuButton.addEventListener('click', function() {
    if (menuButtonToggle == false) {
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
        nav.style.transform = "translateY(-12px)";
        menuArrow.style.transform = "rotate(0deg)";
        menuButtonToggle = true;
    } else if (menuButtonToggle == true) {
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
        nav.style.transform = "translateY(0)";
        menuArrow.style.transform = "rotate(180deg)";
        menuButtonToggle = false;
    }
})

function resizeTest(media) {
  if (media.matches) { // If media query matches
      nav.style.visibility = "hidden";
      nav.style.opacity = "0";
      nav.style.transform = "translateY(-12px)";
      menuArrow.style.transform = "rotate(0deg)";
      menuButtonToggle = true;
  } else {
      nav.style.visibility = "visible";
      nav.style.opacity = "1";
      nav.style.transform = "translateY(0)";
      menuArrow.style.transform = "rotate(180deg)";
      menuButtonToggle = false;
  }
}

const media600 = window.matchMedia("(max-width: 500px)")
resizeTest(media600) // Call listener function at run time
media600.addListener(resizeTest) // Attach listener function on state changes

//Social Media Icons
// var social = document.getElementsByClassName('social');
// var socialIconNum = social.length;

// function socialIconSize() {
//     if (screen425.matches) {
//         for (let i = 0; i < socialIconNum; i ++) {
//             social[i].setAttribute('width', '24');
//         }
//     } else {
//         for (let i = 0; i < socialIconNum; i ++) {
//             social[i].setAttribute('width', '28'); 
//         }
//     }
// }

// var screen425 = window.matchMedia("(max-width: 425px)")
// socialIconSize(screen425);
// screen425.addListener(socialIconSize);


/* SLIDE IN MENU */
/*var menuSelect = document.getElementById('home');
let hamburgerMenu = document.createElement('input');
hamburgerMenu.setAttribute('type', 'checkbox');
hamburgerMenu.style.display = 'none';
menuSelect.appendChild(hamburgerMenu);*/

/* Move the above into CSS!!! */

var mobileMenuButton = document.getElementById('mobile-menu-button');

function mobileMenu() {
    mobileMenuButton.checked = false;

    if (screen650.matches) {
        mobileMenuButton.setAttribute('class', 'show');
        document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 
        document.getElementById('footer-logo').style.display = 'none';

        document.getElementById('wit-logo').style.width = '150px';

//moving the mobile iconss

document.getElementById('home-link').appendChild(document.getElementById('contact'));

//moving the mobile iconss

        // document.getElementsByTagName('footer')[0].appendChild(document.getElementById('title'));
        // document.getElementById('home').style.gridTemplateRows = '"90px" "1fr"'
        // document.getElementById('home').style.gridTemplateAreas = '"Logo Container" "Main"'
        document.addEventListener('scroll', function scrollCheck() {
            if ((pageYOffset > 10) && (screen650.matches)) {
                document.getElementsByTagName('header')[0].style.boxShadow = '0px 3px 3px #aaaaaa';
                // document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
                // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-active');
            } else if (pageYOffset < 100) {
                document.getElementsByTagName('header')[0].style.boxShadow = '0px 0px 0px #ffffff';
                // document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
                // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
            }
        })
    } else {
        mobileMenuButton.setAttribute('class', 'hidden');
        document.getElementsByTagName('nav')[0].setAttribute('class', 'visible');
        document.getElementById('footer-logo').style.display = 'flex';
        document.getElementById('home').appendChild(document.getElementsByTagName('nav')[0]);

        document.getElementById('home').style.overflow = "auto"
        
        document.getElementById('wit-logo').style.width = '175px';

//moving the mobile iconss

document.getElementById('menu-items').appendChild(document.getElementById('contact'));

//moving the mobile iconss

        document.addEventListener('scroll', function scrollCheck() {
            if (pageYOffset > 90) {
                document.getElementsByTagName('nav')[0].style.boxShadow = '0px 3px 3px #aaaaaa';
                // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-active');
            } else if (pageYOffset < 90) {
                document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
                // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-inactive');
            }
        })
    }
}

var screen650 = window.matchMedia("(max-width: 650px)")
mobileMenu(screen650);
screen650.addListener(mobileMenu);

mobileMenuButton.addEventListener('click', function displayMenu() {
    if (mobileMenuButton.checked) {
        console.log('active');
        document.getElementsByTagName('nav')[0].setAttribute('class', 'visible');
        // document.getElementById('logo-container').appendChild(document.getElementsByTagName('nav')[0]);
        
        document.getElementById('mobile-menu-button').style.justifySelf = 'space-around';
        document.getElementById('home').style.overflow = "hidden"

        // document.getElementsByTagName('footer')[0].style.gridTemplateRows = '90px 0 1fr 180px'
        // document.getElementsByTagName('footer')[0].style.gridTemplateAreas = '"LogoContainer" "Nav" "Main" "Footer"'

    } else if ((mobileMenuButton.checked !== true)) {
        console.log('notactive');
        document.getElementsByTagName('nav')[0].setAttribute('class', 'invisible'); 
        // document.getElementById('home').appendChild(document.getElementsByTagName('nav')[0]);

        document.getElementById('mobile-menu-button').style.justifySelf = 'flex-end';
        document.getElementById('home').style.overflow = "auto"
    }
});





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

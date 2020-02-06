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
        // document.getElementsByTagName('footer')[0].appendChild(document.getElementById('title'));
        // document.getElementById('home').style.gridTemplateRows = '"90px" "1fr"'
        // document.getElementById('home').style.gridTemplateAreas = '"Logo Container" "Main"'
        document.addEventListener('scroll', function scrollCheck() {
            if ((pageYOffset > 10) && (screen650.matches)) {
                document.getElementsByTagName('header')[0].style.boxShadow = '0px 3px 3px #aaaaaa';
                document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
                // document.getElementsByTagName('nav')[0].setAttribute('class', 'shadow-active');
            } else if (pageYOffset < 100) {
                document.getElementsByTagName('header')[0].style.boxShadow = '0px 0px 0px #ffffff';
                document.getElementsByTagName('nav')[0].style.boxShadow = '0px 0px 0px #ffffff';
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

for (let i = 0; i < 5; i ++) {
    document.getElementsByClassName('slide-link')[i].addEventListener('click', function scrollLevel() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}


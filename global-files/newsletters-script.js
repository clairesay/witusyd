let modalShowing = false;
const modalWindow = document.getElementById('modal-window');
const modal = document.getElementById('modal');
const home = document.getElementById('home');

for (let i = 0; i < 5; i ++) {
document.getElementsByClassName('newsletter')[i].addEventListener('click', function displayNewsletterModal() {

    switch(i) {
        case 0:
            modalWindow.setAttribute('src', '../newsletters/newsletters-assets/w5.pdf');
          // code block
          break;
        case 1:
            modalWindow.setAttribute('src', '../newsletters/newsletters-assets/w4.pdf');
          // code block
          break;
        case 2:
          modalWindow.setAttribute('src', '../newsletters/newsletters-assets/w3.pdf');
            // code block
          break;
        case 3:
          modalWindow.setAttribute('src', '../newsletters/newsletters-assets/w2.pdf');
            // code block
          break;
        case 4:
          modalWindow.setAttribute('src', '../newsletters/newsletters-assets/w1.pdf');
            // code block
          break;
        default:
          // code block
          modalWindow.setAttribute('src', '');
      }

    modal.style.display = "flex";
    home.style.overflow = "hidden";

    modalShowing = true;

    event.stopPropagation();
    if (modalShowing == true) {
    document.addEventListener('click', function exitModal(evt) {

        // var modalWindow = document.getElementById('modal-window');
        var targetElement = evt.target;

        if (targetElement == modalWindow) {

        } else {
            modalWindow.setAttribute('src', '');
            modal.style.display = "none";
            home.style.overflow = "auto";

            modalShowing = false;
        }
    });
}

});
}

// if (modalShowing == true) {
    // console.log('NOWWN')

// }

// document.addEventListener("click", function(evt) {
//     var flyoutElement = document.getElementById('flyout-example'),
//         targetElement = evt.target;  // clicked element

//     do {
//         if (targetElement == flyoutElement) {
//             // This is a click inside. Do nothing, just return.
//             document.getElementById("flyout-debug").textContent = "Clicked inside!";
//             return;
//         }
//         // Go up the DOM
//         targetElement = targetElement.parentNode;
//     } while (targetElement);

//     // This is a click outside.
//     document.getElementById("flyout-debug").textContent = "Clicked outside!";
// });


// for (let j = 0; j < 5; j ++) {
//   document.getElementsByClassName('shar')[j].addEventListener('click', function displayShareModal() {
  

//     if (document.getElementsByClassName('share-modal')[j].classList.contains('invisi')) {
//       console.log('yess')
//       document.getElementsByClassName('share-modal')[j].style.display = "flex";
//       document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal visi');

//     } else if (document.getElementsByClassName('share-modal')[j].classList.contains('visi')) {
//       console.log('nup')
//       document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
//       setTimeout( animationWait, 200)
//       function animationWait() {
//         document.getElementsByClassName('share-modal')[j].style.display = "none"
//     };
//       // document.getElementsByClassName('share-modal')[j].style.display = "none";
//       // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
//     }
//       for (let a = 0; a < 5; a ++) {
//         if (a != j) {
//           document.getElementsByClassName('share-modal')[a].setAttribute('class', 'share-modal invisi');
//           setTimeout( animationWait, 200)
//           function animationWait() {
//             document.getElementsByClassName('share-modal')[a].style.display = "none"
//           };
//         } else {
//           console.log('exited');
//         }
//       }
    
//   });
// }


// document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
// setTimeout( animationWait, 200)
// function animationWait() {
//   document.getElementsByClassName('share-modal')[j].style.display = "none"
// };
// document.getElementsByClassName('share-modal')[j].style.display = "flex";
// document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal visi');

//////////// text copy


var textToCopy; 
for (let k = 0; k < 5; k ++) {
  document.getElementsByClassName('share-icon')[k].addEventListener('mouseover', function displayShareModal() {
    var shareLinkButton = document.getElementsByClassName('share-modal-hyperlink')[k];
    switch(k) {
    case 0:
      textToCopy = "https://witusyd.com/newsletters/newsletters-assets/w5.pdf";
    break;
    case 1:
     textToCopy = "https://witusyd.com/newsletters/newsletters-assets/w4.pdf";
    break;
    case 2:
      textToCopy = "https://witusyd.com/newsletters/newsletters-assets/w3.pdf";
    break;
    case 3:
       textToCopy = "https://witusyd.com/newsletters/newsletters-assets/w2.pdf";
    break;
    case 4:
      textToCopy = "https://witusyd.com/newsletters/newsletters-assets/w1.pdf";
    break;
    default:
  }
  shareLinkButton.addEventListener('click', function collectLink() {
    var dummyCopyText = document.createElement("textarea");
    document.body.appendChild(dummyCopyText);
    dummyCopyText.value = textToCopy;
    dummyCopyText.select();
    document.execCommand("copy");
    document.body.removeChild(dummyCopyText);

    document.getElementsByClassName('tooltip')[k].innerHTML = 'Copied!';
    shareLinkButton.addEventListener('mouseleave', function() {
      setTimeout(function() {
        document.getElementsByClassName('tooltip')[k].innerHTML = 'Copy';
      }, 100);
    })
  });
shareLinkButton.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", textToCopy.textContent);
    }
  });
});
}




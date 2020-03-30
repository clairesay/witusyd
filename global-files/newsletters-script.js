let modalShowing = false;
for (let i = 0; i < 5; i ++) {
document.getElementsByClassName('newsletter')[i].addEventListener('click', function displayNewsletterModal() {
    console.log('hdfsds');

    switch(i) {
        case 0:
            document.getElementById('modal-window').setAttribute('src', '../newsletters/newsletters-assets/w5.pdf');
          // code block
          break;
        case 1:
            document.getElementById('modal-window').setAttribute('src', '../newsletters/newsletters-assets/w4.pdf');
          // code block
          break;
        case 2:
            document.getElementById('modal-window').setAttribute('src', '../newsletters/newsletters-assets/w3.pdf');
            // code block
          break;
        case 3:
            document.getElementById('modal-window').setAttribute('src', '../newsletters/newsletters-assets/w2.pdf');
            // code block
          break;
        case 4:
            document.getElementById('modal-window').setAttribute('src', '../newsletters/newsletters-assets/w1.pdf');
            // code block
          break;
        default:
          // code block
          document.getElementById('modal-window').setAttribute('src', '');
      }

    document.getElementById('modal').style.display = "flex";
    document.getElementById('home').style.overflow = "hidden";

    modalShowing = true;

    console.log(modalShowing);
    event.stopPropagation();
    if (modalShowing == true) {
    document.addEventListener('click', function exitModal(evt) {

        var modalWindow = document.getElementById('modal-window');
        var targetElement = evt.target;

        if (targetElement == modalWindow) {

        } else {
            document.getElementById('modal-window').setAttribute('src', '');
            document.getElementById('modal').style.display = "none";
            document.getElementById('home').style.overflow = "auto";

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
let modalShowing = false;
document.getElementsByClassName('newsletter')[1].addEventListener('click', function displayNewsletterModal() {
    console.log('hdfsds');
    document.getElementById('modal-window').setAttribute('src', '../newsletters/newsletters-assets/JDD.pdf');

    document.getElementById('modal').style.display = "flex";
    document.getElementById('home').style.overflow = "hidden";

    modalShowing = true;

    console.log(modalShowing);
    event.stopPropagation();
    if (modalShowing == true) {
    document.addEventListener('click', function exitModal(evt) {
        // console.log('false');
        var modalWindow = document.getElementById('modal-window');
        var targetElement = evt.target;

        if (targetElement == modalWindow) {
            // return;
            console.log('INSIDE');
        } else {
            document.getElementById('modal').style.display = "none";
            document.getElementById('home').style.overflow = "auto";
            console.log('OUTSIDE');
            modalShowing = false;
        }
    });
}

});

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
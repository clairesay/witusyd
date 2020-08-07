// var screen650 = window.matchMedia("(max-width: 650px)")
// eventCardSize(screen650);
// screen650.addListener(eventCardSize);

// function eventCardSize() {
//     if (screen650.matches) {

//         document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
//             // if (document.getElementById('1').checked) {
//             //     // console.log('heyyyyy');
//             //     document.getElementById('event-sliders').scrollTo({
//             //         top: 100,
//             //         left: 0,
//             //         behavior: 'smooth'
//             //       });
//             // } else 
//             if (document.getElementById('1').checked){
//                 document.getElementById('event-sliders').scrollTo({
//                     top: 100,
//                     left: 0,
//                     behavior: 'smooth'
//                   });
//             } else if (document.getElementById('2').checked) {
//                 document.getElementById('event-sliders').scrollTo({
//                     top: 100,
//                     left: 389,
//                     behavior: 'smooth'
//                   });
//             } else if (document.getElementById('3').checked) {
//                 document.getElementById('event-sliders').scrollTo({
//                     top: 100,
//                     left: 705,
//                     behavior: 'smooth'
//                   });
//                 }
//             // } else if (document.getElementById('5').checked) {
//             //     document.getElementById('event-sliders').scrollTo({
//             //         top: 100,
//             //         left: 1288,
//             //         behavior: 'smooth'
//             //       });
//         })
        
//         document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
            
//             // if (document.getElementById('event-sliders').scrollLeft < 340) {
//             //     document.getElementById('1').checked = true;
//             //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
//             //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//             //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//             //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//             //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

//             // } else 
//             if (document.getElementById('event-sliders').scrollLeft < 300) {
//                 document.getElementById('1').checked = true;
//                 document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
//                 document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//                 document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//                 // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//                 // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

//             } else if (document.getElementById('event-sliders').scrollLeft < 600) {
//                 document.getElementById('2').checked = true;
//                 document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#6d4ff8';
//                 document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
//                 document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//                 // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//                 // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

//             } else {
//                 document.getElementById('3').checked = true;
//                 document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#6d4ff8';
//                 document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
//                 document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//                 // document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//                 // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
//             }
//             // } else if (document.getElementById('event-sliders').scrollLeft >= 1288) {
//             //     document.getElementById('5').checked = true;
//             //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#6d4ff8';
//             //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
//             //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//             //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//             //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//             // };
//         });



//     } else {


//     document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
//         // if (document.getElementById('1').checked) {
//         //     document.getElementById('event-sliders').scrollTo({
//         //         top: 100,
//         //         left: 0,
//         //         behavior: 'smooth'
//         //       });
//         // } else 
//         if (document.getElementById('1').checked){
//             document.getElementById('event-sliders').scrollTo({
//                 top: 100,
//                 left: 0,
//                 behavior: 'smooth'
//               });
//         } else if (document.getElementById('2').checked) {
//             document.getElementById('event-sliders').scrollTo({
//                 top: 100,
//                 left: 966,
//                 behavior: 'smooth'
//               });
//         } else if (document.getElementById('3').checked) {
//             document.getElementById('event-sliders').scrollTo({
//                 top: 100,
//                 left: 1748,
//                 behavior: 'smooth'
//               });
//             }
//         // } else if (document.getElementById('5').checked) {
//         //     document.getElementById('event-sliders').scrollTo({
//         //         top: 100,
//         //         left: 2428,
//         //         behavior: 'smooth'
//         //       });
//     })
    
//     document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
//         // if (document.getElementById('event-sliders').scrollLeft < 664) {
//         //     document.getElementById('1').checked = true;
//         //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
//         //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//         //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//         //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//         //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
//         // } else 
//         if (document.getElementById('event-sliders').scrollLeft < 600) {
//             document.getElementById('1').checked = true;
//             document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
//             document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//             document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//             // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//             // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
//         } else if (document.getElementById('event-sliders').scrollLeft < 1200) {
//             document.getElementById('2').checked = true;
//             document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#6d4ff8';
//             document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
//             document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//             // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//             // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
//         } else {
//             document.getElementById('3').checked = true;
//             document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#6d4ff8';
//             document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
//             document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//             // document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//             // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
//         }
//         // } else if (document.getElementById('event-sliders').scrollLeft >= 2427) {
//         //     document.getElementById('5').checked = true;
//         //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#6d4ff8';
//         //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
//         //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
//         //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
//         //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
//         // };
//     });

//     }
    
// }

// var eventSliders = document.getElementById('event-sliders');

// eventSliders.addEventListener('scroll', function bounceIn() {
//     console.log(eventSliders.scrollLeft);
//     let gorilla = eventSliders.scrollLeft;
//     if (gorilla >= 2562) {
//         console.log('gorilla = 0')
//         // document.getElementById('future-event3').style.marginRight = '100px';
//         // document.getElementById('future-event3').style.marginRight = '500px';
//         // document.getElementById('future-event3').style.scrollSnapAlign = 'end';
//     };
//     // if (eventSliders.scrollLeft = 0) {
//     //     document.getElementById('last-event').style.paddingLeft = "0";
//     // } else {
//     //     document.getElementById('last-event').style.paddingLeft = "40px";
//     // }
// });

// // document.addEventListener('onload', function jump() {
// //     console.log('bala');
// //     eventSliders.scrollLeft = 60;
// // })

// function scrollSet() {
//     console.log('now');
//     // alert('heyy');
//     eventSliders.scroll({
//         left: 100,
//         behavior: 'smooth'
//     });
// }

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// EVERYTHING ABOVE COMMENT OUT ONCE! ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// for (let j = 0; j < 4; j ++) {
//     // document.getElementsByClassName('share-modal')[j].style.top = "200px";
//       document.getElementsByClassName('news-share')[j].addEventListener('click', function displayShareModal() {
      
//         if (document.getElementsByClassName('share-modal')[j].classList.contains('invisi')) {
//           console.log('yess')
//           document.getElementsByClassName('share-modal')[j].style.display = "flex";
//           document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal visi');
    
//         } else if (document.getElementsByClassName('share-modal')[j].classList.contains('visi')) {
//           console.log('nup')
//           document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
//           setTimeout( animationWait, 200)
//           function animationWait() {
//             document.getElementsByClassName('share-modal')[j].style.display = "none"
//         };
//           // document.getElementsByClassName('share-modal')[j].style.display = "none";
//           // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
//         }
//           for (let a = 0; a < 4; a ++) {
//             if (a != j) {
//               document.getElementsByClassName('share-modal')[a].setAttribute('class', 'share-modal invisi');
//               setTimeout( animationWait, 200)
//               function animationWait() {
//                 document.getElementsByClassName('share-modal')[a].style.display = "none"
//               };
//             } else {
//               console.log('exited');
//             }
//           }
        
//       });
//     }
    
    
    // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
    // setTimeout( animationWait, 200)
    // function animationWait() {
    //   document.getElementsByClassName('share-modal')[j].style.display = "none"
    // };
    // document.getElementsByClassName('share-modal')[j].style.display = "flex";
    // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal visi');
    
    //////////// text copy
    
    
    var textToCopy; 
    for (let k = 0; k < 4; k ++) {
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
            textToCopy = "https://witusyd.com/newsletters/newsletters-assets/w3.pdf";
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


    // //////////////// NEW EVENT SLIDERS ///////////////////

    const eventSlider = document.getElementsByClassName('slider')[0];
    const eventButtons = document.getElementsByClassName('slider-buttons')[0];
    var slide = document.getElementsByClassName('slide');
    var slideWidth = slide[0].clientWidth;
    var eventButton;
    for (var i = 1; i < slide.length + 1; i ++) {
      eventButton = document.createElement('a');
      eventButton.setAttribute('class', 'slider-button');
      // eventButton.setAttribute('href', '#' + i);
      eventButton.setAttribute('onclick', 'scrollSlide(' + i +');')
      eventButtons.appendChild(eventButton);
  }


    // eventButtons.addEventListener('click', function(evt) {
    //   evt.preventDefault();
    // })

    function scrollSlide(n) {
      eventSlider.scrollTo( (n-1)*slideWidth, 0)
    }

    // eventSlider.addEventListener('scroll', function() {

    //   let eventButton = document.getElementsByClassName('event-button');
    //   var slideNumber = Math.round(eventSlider.scrollLeft/slideWidth);
      
    //   eventButton[slideNumber].style.backgroundColor = '#6d4ff8';
    //   for (var j = 0; j < slide.length; j ++) {
    //     if (j !== slideNumber) {
    //       eventButton[j].style.backgroundColor = '#e7e7e7';
    //     }
    //   }
    // })


    window.addEventListener('resize', eventButtonFill, false);
    window.addEventListener('load', eventButtonFill, false);
    eventSlider.addEventListener('scroll', eventButtonFill, false);

    var slideNumber;

    function eventButtonFill() {
      let eventButton = document.getElementsByClassName('slider-button');
      slideNumber = Math.round(eventSlider.scrollLeft/slideWidth);
      // console.log(eventSlider.scrollLeft/slideWidth)
      
      eventButton[slideNumber].style.backgroundColor = '#6d4ff8';
      for (var j = 0; j < slide.length; j ++) {
        if (j !== slideNumber) {
          eventButton[j].style.backgroundColor = '#e7e7e7';
        }
      }
    }

    function resizeFunction(size) {
      var slideImage = document.querySelectorAll('.slider img');

      if (size.matches) { // If media query matches
        for (var l = 0; l < slideImage.length; l ++) {
          slideImage[l].setAttribute('src', 'event-cards/event-' + (l+1) + '-m.png')
        }
      } else {
        for(var l = 0; l < slideImage.length; l ++) {
          slideImage[l].setAttribute('src', 'event-cards/event-' + (l+1) + '.png')
        }
      }
    }

    var tablet = window.matchMedia("(max-width: 650px)")
    resizeFunction(tablet) // Call listener function at run time
    tablet.addListener(resizeFunction) // Attach listener function on state changes
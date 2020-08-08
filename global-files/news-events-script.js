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
      eventButton.setAttribute('onclick', 'scrollSlide(' + i +');')
      eventButtons.appendChild(eventButton);
  }


    function scrollSlide(n) {
      eventSlider.scrollTo( (n-1)*slideWidth, 0)
    }

    window.addEventListener('resize', eventButtonFill, false);
    window.addEventListener('load', eventButtonFill, false);
    eventSlider.addEventListener('scroll', eventButtonFill, false);

    var slideNumber;

    function eventButtonFill() {
      let eventButton = document.getElementsByClassName('slider-button');
      slideNumber = Math.round(eventSlider.scrollLeft/slideWidth);
      
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
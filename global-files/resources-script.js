
for (let j = 0; j < 3; j ++) {
  document.getElementsByClassName('share-modal')[j].style.top = "50px";
    document.getElementsByClassName('resource-share')[j].addEventListener('click', function displayShareModal() {
    
      if (document.getElementsByClassName('share-modal')[j].classList.contains('invisi')) {
        console.log('yess')
        document.getElementsByClassName('share-modal')[j].style.display = "flex";
        document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal visi');
  
      } else if (document.getElementsByClassName('share-modal')[j].classList.contains('visi')) {
        console.log('nup')
        document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
        setTimeout( animationWait, 200)
        function animationWait() {
          document.getElementsByClassName('share-modal')[j].style.display = "none"
      };
        // document.getElementsByClassName('share-modal')[j].style.display = "none";
        // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
      }
        for (let a = 0; a < 3; a ++) {
          if (a != j) {
            document.getElementsByClassName('share-modal')[a].setAttribute('class', 'share-modal invisi');
            setTimeout( animationWait, 200)
            function animationWait() {
              document.getElementsByClassName('share-modal')[a].style.display = "none"
            };
          } else {
            console.log('exited');
          }
        }
      
    });
  }
  
  
  // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal invisi');
  // setTimeout( animationWait, 200)
  // function animationWait() {
  //   document.getElementsByClassName('share-modal')[j].style.display = "none"
  // };
  // document.getElementsByClassName('share-modal')[j].style.display = "flex";
  // document.getElementsByClassName('share-modal')[j].setAttribute('class', 'share-modal visi');
  
  //////////// text copy
  
  
  var textToCopy; 
  for (let k = 0; k < 3; k ++) {
    document.getElementsByClassName('share-icon')[k].addEventListener('click', function displayShareModal() {
      var kellogs = document.getElementsByClassName('share-modal-hyperlink')[k];
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
      default:
    }
    kellogs.addEventListener('click', function collectLink() {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = textToCopy;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
  
      document.getElementsByClassName('tooltip')[k].innerHTML = 'Copied';
      kellogs.addEventListener('mouseleave', function() {
        console.log('left');
        setTimeout(function() {
          document.getElementsByClassName('tooltip')[k].innerHTML = 'Copy';
        }, 100);
      })
    });
  kellogs.addEventListener("copy", function(event) {
      event.preventDefault();
      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", textToCopy.textContent);
      }
    });
  });
  }
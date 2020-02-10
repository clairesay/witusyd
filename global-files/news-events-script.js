var screen650 = window.matchMedia("(max-width: 650px)")
eventCardSize(screen650);
screen650.addListener(eventCardSize);

function eventCardSize() {
    if (screen650.matches) {

        document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
            if (document.getElementById('1').checked) {
                // console.log('heyyyyy');
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                  });
            } else if (document.getElementById('2').checked){
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 400,
                    behavior: 'smooth'
                  });
            } else if (document.getElementById('3').checked) {
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 800,
                    behavior: 'smooth'
                  });
            } else if (document.getElementById('4').checked) {
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 1100,
                    behavior: 'smooth'
                  });
            } else if (document.getElementById('5').checked) {
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 1800,
                    behavior: 'smooth'
                  });
            } else {
        
            }
        })
        
        document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
            
            if (document.getElementById('event-sliders').scrollLeft < 400) {
                document.getElementById('1').checked = true;
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            } else if (document.getElementById('event-sliders').scrollLeft < 800) {
                document.getElementById('2').checked = true;
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            } else if (document.getElementById('event-sliders').scrollLeft < 1200) {
                document.getElementById('3').checked = true;
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            } else if (document.getElementById('event-sliders').scrollLeft < 1550) {
                document.getElementById('4').checked = true;
                document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            } else {
                document.getElementById('5').checked = true;
                document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';

            };
        });



    } else {


    document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
        if (document.getElementById('1').checked) {
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 0,
                behavior: 'smooth'
              });
        } else if (document.getElementById('2').checked){
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 500,
                behavior: 'smooth'
              });
        } else if (document.getElementById('3').checked) {
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 1000,
                behavior: 'smooth'
              });
        } else if (document.getElementById('4').checked) {
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 1500,
                behavior: 'smooth'
              });
        } else if (document.getElementById('5').checked) {
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 2000,
                behavior: 'smooth'
              });
        } else {
    
        }
    })
    
    document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
        if (document.getElementById('event-sliders').scrollLeft < 400) {
            document.getElementById('1').checked = true;
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        } else if (document.getElementById('event-sliders').scrollLeft < 800) {
            document.getElementById('2').checked = true;
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        } else if (document.getElementById('event-sliders').scrollLeft < 1200) {
            document.getElementById('3').checked = true;
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        } else if (document.getElementById('event-sliders').scrollLeft < 1700) {
            document.getElementById('4').checked = true;
            document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        } else {
            document.getElementById('5').checked = true;
            document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
        };
    });

    }
    
}


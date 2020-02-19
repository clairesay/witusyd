var screen650 = window.matchMedia("(max-width: 650px)")
eventCardSize(screen650);
screen650.addListener(eventCardSize);

function eventCardSize() {
    if (screen650.matches) {

        document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
            // if (document.getElementById('1').checked) {
            //     // console.log('heyyyyy');
            //     document.getElementById('event-sliders').scrollTo({
            //         top: 100,
            //         left: 0,
            //         behavior: 'smooth'
            //       });
            // } else 
            if (document.getElementById('1').checked){
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                  });
            } else if (document.getElementById('2').checked) {
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 389,
                    behavior: 'smooth'
                  });
            } else if (document.getElementById('3').checked) {
                document.getElementById('event-sliders').scrollTo({
                    top: 100,
                    left: 705,
                    behavior: 'smooth'
                  });
                }
            // } else if (document.getElementById('5').checked) {
            //     document.getElementById('event-sliders').scrollTo({
            //         top: 100,
            //         left: 1288,
            //         behavior: 'smooth'
            //       });
        })
        
        document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
            
            // if (document.getElementById('event-sliders').scrollLeft < 340) {
            //     document.getElementById('1').checked = true;
            //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
            //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            // } else 
            if (document.getElementById('event-sliders').scrollLeft < 300) {
                document.getElementById('1').checked = true;
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
                // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            } else if (document.getElementById('event-sliders').scrollLeft < 600) {
                document.getElementById('2').checked = true;
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
                // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';

            } else {
                document.getElementById('3').checked = true;
                document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#6d4ff8';
                document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
                document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
                // document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
                // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
            }
            // } else if (document.getElementById('event-sliders').scrollLeft >= 1288) {
            //     document.getElementById('5').checked = true;
            //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#6d4ff8';
            //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            // };
        });



    } else {


    document.getElementById('event-card-select').addEventListener('click', function eventCardSelect() {
        // if (document.getElementById('1').checked) {
        //     document.getElementById('event-sliders').scrollTo({
        //         top: 100,
        //         left: 0,
        //         behavior: 'smooth'
        //       });
        // } else 
        if (document.getElementById('1').checked){
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 0,
                behavior: 'smooth'
              });
        } else if (document.getElementById('2').checked) {
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 966,
                behavior: 'smooth'
              });
        } else if (document.getElementById('3').checked) {
            document.getElementById('event-sliders').scrollTo({
                top: 100,
                left: 1748,
                behavior: 'smooth'
              });
            }
        // } else if (document.getElementById('5').checked) {
        //     document.getElementById('event-sliders').scrollTo({
        //         top: 100,
        //         left: 2428,
        //         behavior: 'smooth'
        //       });
    })
    
    document.getElementById('event-sliders').addEventListener('scroll', function eventSliderLink() {
        // if (document.getElementById('event-sliders').scrollLeft < 664) {
        //     document.getElementById('1').checked = true;
        //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
        //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
        //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
        //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
        //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        // } else 
        if (document.getElementById('event-sliders').scrollLeft < 600) {
            document.getElementById('1').checked = true;
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        } else if (document.getElementById('event-sliders').scrollLeft < 1200) {
            document.getElementById('2').checked = true;
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            // document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
            // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        } else {
            document.getElementById('3').checked = true;
            document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#6d4ff8';
            document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
            document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
            // document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
            // document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#aaaaaa';
        }
        // } else if (document.getElementById('event-sliders').scrollLeft >= 2427) {
        //     document.getElementById('5').checked = true;
        //     document.getElementsByClassName('radio-mark')[4].style.backgroundColor = '#6d4ff8';
        //     document.getElementsByClassName('radio-mark')[0].style.backgroundColor = '#aaaaaa';
        //     document.getElementsByClassName('radio-mark')[1].style.backgroundColor = '#aaaaaa';
        //     document.getElementsByClassName('radio-mark')[2].style.backgroundColor = '#aaaaaa';
        //     document.getElementsByClassName('radio-mark')[3].style.backgroundColor = '#aaaaaa';
        // };
    });

    }
    
}

var eventSliders = document.getElementById('event-sliders');

eventSliders.addEventListener('scroll', function bounceIn() {
    console.log(eventSliders.scrollLeft);
    let gorilla = eventSliders.scrollLeft;
    if (gorilla >= 2562) {
        console.log('gorilla = 0')
        // document.getElementById('future-event3').style.marginRight = '100px';
        // document.getElementById('future-event3').style.marginRight = '500px';
        // document.getElementById('future-event3').style.scrollSnapAlign = 'end';
    };
    // if (eventSliders.scrollLeft = 0) {
    //     document.getElementById('last-event').style.paddingLeft = "0";
    // } else {
    //     document.getElementById('last-event').style.paddingLeft = "40px";
    // }
});

// document.addEventListener('onload', function jump() {
//     console.log('bala');
//     eventSliders.scrollLeft = 60;
// })

function scrollSet() {
    console.log('now');
    // alert('heyy');
    eventSliders.scroll({
        left: 100,
        behavior: 'smooth'
    });
}
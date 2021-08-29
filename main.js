new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home','The AirPix', 'Overview'],
    showActiveTooltip: true,
    controlArrows: false,
    slidesNavigation: true,
    slidesNavigation: 'bottom',

    onLeave: function(origin, destination, direction){
        if( destination.index == 1){
            bigThreeSection(destination)
        }
        else if( destination.index == 2){
            apertureSection(destination)
        }
    },
    
    afterRender: function(){
        homeSection()
    },

    onSlideLeave: function(section, origin, destination, direction){
        // if currently on aperture section
        if(section.index == 2){
            animateApertureSlide(destination.item, destination.index)
        }
    }

});


// home section animations
function homeSection(){
    // gsap creat timeline for animation
    const tl = new TimelineMax({delay: 0.5})

    // animate elements
    tl.from('.bg', {bottom: "50%", top: "50%", duration: 0.6})
      .from('#logo', {x: -1000, duration: 1.5, ease: 'elastic', opacity: 0, scale: 0.1})
      .from('.section-home .content', { y: 30, opacity: 0, duration: 1}, "-=1")
      .from('#camera', {y: -1000, duration: 1, ease: 'bounce'}, '-=1')
      .from('#camera-shadow', {scale: 0, opacity: 0, duration: 0.7}, '-=1.1')
}

// big three section animations
function bigThreeSection(destination){
    // get elements
    let section = destination.item 
    let heading = section.querySelector('h1')
    let content = section.querySelector('.content')
    let btCol = section.querySelectorAll('.bt-col')

    // animate using timeline
    const tl = new TimelineMax({delay: 0.5})
    tl.from(heading, {duration: 1, x:500, opacity: 0})
      .from(btCol, {y: '-50', duration: 0.5, opacity: 0, stagger: 0.2})
      .from(content, {duration: 1, y: 30, opacity: 0}, '-=1')

}

// aperture section animations
function apertureSection(destination){
    animateApertureSlide(destination.item, 0)
}


function animateApertureSlide(slide, index){
    // get elements
    let slideHeading = slide.querySelector('.slide h1')
    let slideContent = slide.querySelector('.slide .content')
    let slideImage = slide.querySelector('.slide .slide-img')

    // animate slide heading and content
    const tl = new TimelineMax({delay: 0.2})
    tl.from(slideHeading, {duration: 1, y: 100, opacity: 0})
      .from(slideContent, {duration: 1, x: 50, opacity: 0}, '-=0.5')

    // animate slide image
    // slide #2
    if(index == 1){
        tl.from(slideImage, {duration: 1.2, y: -700, opacity: 0, ease: 'back'},)
    // all other slides
    }else{
        tl.from(slideImage, {duration: 1.2, y: -700, opacity: 0, ease: 'back'},)
    }
}



// slide navigation buttons (next and previous buttons)
// next slide btn
let nextSlideBtn = document.querySelectorAll('.next-slide-btn')
nextSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideRight();
    })
})

// prev slide btn
let prevSlideBtn = document.querySelectorAll('.prev-slide-btn')
prevSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideLeft();
    })
})


// jump to section 2 button
let jumptoS2Btns = document.querySelectorAll('.jumpto-s2')
jumptoS2Btns.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(2);
    })
})

// jump to section 3 button
let jumptoS3Btns = document.querySelectorAll('.jumpto-s3')
jumptoS3Btns.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(3);
    })
})
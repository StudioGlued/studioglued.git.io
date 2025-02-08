const elements = document.querySelectorAll(".scroll-in")

window.addEventListener("scroll", () => {
    const innerHeightOfWindow = window.innerHeight;

    elements.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < innerHeightOfWindow){
            box.classList.add("show")
        } 
        
        else {
            box.classList.remove("show")
        }

        })
    })

    const videos = document.querySelectorAll('.videohover');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

const videos2 = document.querySelectorAll('.showreelhover');

videos2.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.currentTime = 2;
    video.volume = 0.05;
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
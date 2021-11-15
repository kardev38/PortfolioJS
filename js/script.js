
window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})

// Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
    filterBtns=filterContainer.children,
    totalFilterBtn=filterBtns.length,
    portfolioItems=document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem=portfolioItems.length;

  for(let i=0; i< totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter");
        for(let k=0; k< totalPortfolioItem; k++){
            if(filterValue ===  portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else{
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("hide");
            }
            if(filterValue === "all"){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }

    })
  }

//   Portfolio Lightbox

const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");

let itemIndex=0;

    for(let i=0; i<totalPortfolioItem; i++){
        portfolioItems[i].addEventListener("click", function(){
          itemIndex=i;
          changeItem();
          toggleLightbox();
         })
    }

    function nextItem(){
        if(itemIndex === totalPortfolioItem-1){
            itemIndex=0;
        }
        else{
            itemIndex++
        }
        changeItem();
    }

    function prevItem(){
        if(itemIndex === 0){
            itemIndex=totalPortfolioItem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

    function  toggleLightbox(){
        lightbox.classList.toggle("open");
    }

    function changeItem(){
        imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;

    }

    // close lightbox

    lightbox.addEventListener("click",function(event){
        if(event.target === lightboxClose || event.target === lightbox){
            toggleLightbox();
        }
    })

    // Aside Navbar
    const nav=document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList=navList.length,
        allSection=document.querySelectorAll(".section"),
        totalSection=allSection.length;

        for(let i=0; i<totalNavList; i++){
            const a=navList[i].querySelector("a");
            a.addEventListener("click", function(){ 
                // remove back section Class
                removeBackSelectionClass();

                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.remove("back-section");
                }

                for(let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        // add back section Class
                        addBackSectionClass(j)
                        
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);

                if(window.innerWidth < 1200){
                    asideSectionTogglerBtn();
                }
            })
        }

        function removeBackSelectionClass(){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
        }
        function  addBackSectionClass(num){
             allSection[num].classList.add("back-section");
        }
        function showSection(element){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
            const target=element.getAttribute("href").split("#")[1];
            document.querySelector("#"+target).classList.add("active");
        }

        function updateNav(element){
            for(let i=0; i<totalNavList; i++){
                navList[i].querySelector("a").classList.remove("active");
                 const target=element.getAttribute("href").split("#")[1];
                 if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navList[i].querySelector("a").classList.add("active");
                 }
            }
                
        }

        document.querySelector(".hire-me").addEventListener("click",function(){
            const sectionIndex=this.getAttribute("data-section-index");
            // console.log(sectionIndex);
            showSection(this);
            updateNav(this);
            removeBackSelectionClass();
            addBackSectionClass(sectionIndex);
        })

        const navTogglerBtn=document.querySelector(".nav-toggler"),
            aside=document.querySelector(".aside");

            navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.toggle("open");
                }
            }

            
            // Script Video

        // let's select all required tags or elements
        const video_player = document.querySelector('#video_player'),
        mainVideo = video_player.querySelector('#main-video'),
        progressAreaTime = video_player.querySelector('.progressAreaTime'),
        controls = video_player.querySelector('.controls'),
        progressArea = video_player.querySelector('.progress-area'),
        progress_Bar = video_player.querySelector('.progress-bar'),
        fast_rewind = video_player.querySelector('.fast-rewind'),
        play_pause = video_player.querySelector('.play_pause'),
        fast_forward = video_player.querySelector('.fast-forward'),
        volume = video_player.querySelector('.volume'),
        volume_range = video_player.querySelector('.volume_range'),
        current = video_player.querySelector('.current'),
        totalDuration = video_player.querySelector('.duration'),
        auto_play = video_player.querySelector('.auto-play'),
        settingsBtn = video_player.querySelector('.settingsBtn'),
        picture_in_picutre = video_player.querySelector('.picture_in_picutre'),
        fullscreen = video_player.querySelector('.fullscreen'),
        settings = video_player.querySelector('#settings'),
        playback = video_player.querySelectorAll('.playback li');



        // Play video function
        function playVideo() {
            play_pause.innerHTML = "pause";
            play_pause.title = "pause";
            video_player.classList.add('paused')
            mainVideo.play();
        }

        // Pause video function
        function pauseVideo() {
            play_pause.innerHTML = "play_arrow";
            play_pause.title = "play";
            video_player.classList.remove('paused')
            mainVideo.pause();
        }

        play_pause.addEventListener('click',()=>{
            const isVideoPaused = video_player.classList.contains('paused');
            isVideoPaused ? pauseVideo() : playVideo();
        })

        mainVideo.addEventListener('play',()=>{
            playVideo();
        })

        mainVideo.addEventListener('pause',()=>{
            pauseVideo();
        })

        // fast_rewind video function
        fast_rewind.addEventListener('click',()=>{
            mainVideo.currentTime -= 10;
        })

        // fast_forward video function
        fast_forward.addEventListener('click',()=>{
            mainVideo.currentTime += 10;
        })


        // Load video duration
        mainVideo.addEventListener("loadeddata",(e)=>{
            let videoDuration = e.target.duration;
            let totalMin = Math.floor(videoDuration / 60);
            let totalSec = Math.floor(videoDuration % 60);

            // if seconds are less then 10 then add 0 at the begning
            totalSec < 10 ? totalSec = "0"+totalSec : totalSec;
            totalDuration.innerHTML = `${totalMin} : ${totalSec}`;
        })

        // Current video duration
        mainVideo.addEventListener('timeupdate',(e)=>{
            let currentVideoTime = e.target.currentTime;
            let currentMin = Math.floor(currentVideoTime / 60);
            let currentSec = Math.floor(currentVideoTime % 60);
        // if seconds are less then 10 then add 0 at the begning
            currentSec < 10 ? currentSec = "0"+currentSec : currentSec; 
            current.innerHTML = `${currentMin} : ${currentSec}`;

            let videoDuration = e.target.duration
            // progressBar width change
            let progressWidth = (currentVideoTime / videoDuration) * 100;
            progress_Bar.style.width = `${progressWidth}%`;
        })

        // let's update playing video current time on according to the progress bar width

        progressArea.addEventListener('click',(e)=>{
            let videoDuration = mainVideo.duration;
            let progressWidthval = progressArea.clientWidth;
            let ClickOffsetX = e.offsetX;
            mainVideo.currentTime = (ClickOffsetX / progressWidthval) * videoDuration;
        })

        // change volume
        function changeVolume() {
            mainVideo.volume = volume_range.value / 100;
            if (volume_range.value == 0) {
                volume.innerHTML = "volume_off";
            }else if(volume_range.value < 40){
                volume.innerHTML = "volume_down";
            }else{
                volume.innerHTML = "volume_up";
            }

        }

        function muteVolume() {
            if (volume_range.value == 0) {
                volume_range.value = 80;
                mainVideo.volume = 0.8;
                volume.innerHTML = "volume_up";
            }else{
                volume_range.value = 0;
                mainVideo.volume = 0;
                volume.innerHTML = "volume_off";
            }
        }


        volume_range.addEventListener('change',()=>{
            changeVolume();
        })

        volume.addEventListener('click',()=>{
            muteVolume();
        })


        // Update progress area time and display block on mouse move
        progressArea.addEventListener('mousemove',(e)=>{
            let progressWidthval = progressArea.clientWidth;
            let x = e.offsetX;
            progressAreaTime.style.setProperty('--x',`${x}px`);
            progressAreaTime.style.display = "block";
            let videoDuration = mainVideo.duration;
            let progressTime = Math.floor((x/progressWidthval)*videoDuration);
            let currentMin = Math.floor(progressTime / 60);
            let currentSec = Math.floor(progressTime % 60);
        // if seconds are less then 10 then add 0 at the begning
            currentSec < 10 ? currentSec = "0"+currentSec : currentSec; 
            progressAreaTime.innerHTML = `${currentMin} : ${currentSec}`;

        })

        progressArea.addEventListener('mouseleave',()=>{
            progressAreaTime.style.display = "none";
        })



        // Auto play
        auto_play.addEventListener('click',()=>{
            auto_play.classList.toggle('active')
            if(auto_play.classList.contains('active')){
                auto_play.title = "Autoplay is on";
            }else{
                auto_play.title = "Autoplay is off";
            }
        });

        mainVideo.addEventListener("ended",()=>{
            if (auto_play.classList.contains('active')) {
                playVideo();
            }else{
                play_pause.innerHTML = "replay";
                play_pause.title = "Replay";
            }
        });

        // Picture in picture

        picture_in_picutre.addEventListener('click',()=>{
            mainVideo.requestPictureInPicture();
        })


        // Full screen function

        fullscreen.addEventListener('click',()=>{
            if (!video_player.classList.contains('openFullScreen')) {
                video_player.classList.add('openFullScreen');
                fullscreen.innerHTML = "fullscreen_exit";
                video_player.requestFullscreen();
            }else{
                video_player.classList.remove('openFullScreen');
                fullscreen.innerHTML = "fullscreen";
                document.exitFullscreen();
            }
        });


        // Open settings
        settingsBtn.addEventListener('click',()=>{
            settings.classList.toggle('active');
            settingsBtn.classList.toggle('active');
        })

        // Playback Rate

        playback.forEach((event)=>{
            event.addEventListener('click',()=>{
                removeActiveClasses();
                event.classList.add('active');
                let speed = event.getAttribute('data-speed');
                mainVideo.playbackRate = speed;
            })
        })



        function removeActiveClasses() {
            playback.forEach(event => {
                event.classList.remove('active')
            });
        }


        // Store video duration and video path in local storage

        window.addEventListener('unload',()=>{
            let setDuration = localStorage.setItem('duration',`${mainVideo.currentTime}`);
            let setSrc = localStorage.setItem('src',`${mainVideo.getAttribute('src')}`);
        })

        window.addEventListener('load',()=>{
            let getDuration = localStorage.getItem('duration');
            let getSrc = localStorage.getItem('src');
            if (getSrc) {
                mainVideo.src = getSrc;
                mainVideo.currentTime = getDuration;
            }
        })


        mainVideo.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
        })


        // Hide and show controls on Mouse move
        video_player.addEventListener('mouseover',()=>{
            controls.classList.add('active');
        })

        video_player.addEventListener('mouseleave',()=>{
            if (video_player.classList.contains('paused')) {
                if (settingsBtn.classList.contains('active')) {
                    controls.classList.add('active');
                }else{
                    controls.classList.remove('active')
                }
            }else{
                controls.classList.add('active')
            }
        })

        if (video_player.classList.contains('paused')) {
            if (settingsBtn.classList.contains('active')) {
                controls.classList.add('active');
            }else{
                controls.classList.remove('active')
            }
        }else{
            controls.classList.add('active')
        }

        // Hide and show controls on mobile touch
        video_player.addEventListener('touchstart',()=>{
            controls.classList.add('active');
            setTimeout(() => {
                controls.classList.remove('active')
            }, 8000);
        })

        video_player.addEventListener('touchmove',()=>{
            if (video_player.classList.contains('paused')) {
                controls.classList.remove('active')
            }else{
                controls.classList.add('active')
            }
        })

      
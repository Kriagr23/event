document.addEventListener('DOMContentLoaded', () => {

    if (window.location.hash) {
        window.location.replace('/');
    }

    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
    const main = document.querySelector('.main');
    main.style.display = 'block';


    /* For the drop-down to pop up on click of 'about' and 'event' button */
    const about_btn = document.getElementById('about');
    const event_btn = document.getElementById('event');

    const aboutDropdown = document.querySelector('.about-dropdown');
    const eventDropdown = document.querySelector('.event-dropdown');

    about_btn.addEventListener('click', () => {
        if(aboutDropdown.style.display === 'none' || aboutDropdown.style.display == ""){
            aboutDropdown.style.display = 'block'
        }else{
            aboutDropdown.style.display = 'none'
        }
    });

    aboutDropdown.addEventListener('click', () => {
        aboutDropdown.style.display = 'none'
        eventDropdown.style.display = 'none'
    });

    event_btn.addEventListener('click', () => {
        if(eventDropdown.style.display === 'none' || eventDropdown.style.display == ""){
            eventDropdown.style.display = 'block'
        }else{
            eventDropdown.style.display = 'none'
        }
    });

    eventDropdown.addEventListener('click', () => {
        eventDropdown.style.display = 'none'
        aboutDropdown.style.display = 'none'
    });


    

    /* For the side menu, that comes when clicked on the hamburger menu, which is visible when screen is < 800px */
    const hamburger_btn = document.querySelector('.hamburger');
    const closeMenu_btn = document.querySelector('.closeMenu');
    const sideNavBar = document.querySelector('.side-navbar');

    hamburger_btn.addEventListener('click', () => {
        hamburger_btn.style.display = 'none';
        closeMenu_btn.style.display = 'block';
        sideNavBar.style.display = 'block';
    });

    closeMenu_btn.addEventListener('click', () => {
        closeMenu_btn.style.display = 'none';
        sideNavBar.style.display = 'none';
        hamburger_btn.style.display = 'block';
    });



    
    /* For the gallery scroll, with left and right buttons */
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const photoSlides = document.querySelector('.photos-slide');


    let currentScroll = 0;

    scrollLeftButton.addEventListener('click', () => {
        const imageWidth = photoSlides.querySelector('img').clientWidth; //Get image width
        currentScroll = Math.max(0, currentScroll - imageWidth); //Prevent scrolling beyond felt edge
        photoSlides.scrollTo({ left: currentScroll, behavior: 'smooth' });
    });

    scrollRightButton.addEventListener('click', () => {
        const imageWidth = photoSlides.querySelector('img').clientWidth; //Get image width
        const maxScroll = photoSlides.scrollWidth - photoSlides.clientWidth;
        currentScroll = Math.min(maxScroll, currentScroll + imageWidth); //Prevent scrolling beyond felt edge
        photoSlides.scrollTo({ left: currentScroll, behavior: 'smooth' });
    });

    /* For the newsletter part */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxwdydkILi8zmggo78rYVnGVqh3jDn_2z6uIGLLZGjkaWLBTZlnHLIG00P8jwQkE_By/exec'
        const form = document.forms['submit-to-google-sheet']
        const Success = document.getElementById('Success');
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>{
                Success.innerHTML="Subscribed Successfully";

                setTimeout(function(){
                    Success.innerHTML="";
                },  3000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        });
});

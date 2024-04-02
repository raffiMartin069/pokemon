function proceedTo() {
  charGrallery = document.querySelectorAll(".card-container");

  for (var i = 0; i < charGrallery.length; i++) {
    // console.log(charGrallery[i]);
    charGrallery[i].addEventListener("click", function () {
      window.location.href = "pokemon.html";
    });
  }
}



// Define a function called 'scroll'
function scroll() {
  const the_animation = document.querySelectorAll(".animation");
  const the_animation2 = document.querySelectorAll(".animation-reverse");

  const observer = new IntersectionObserver(
    (entries) => {
      // console.log('Intersection Observer Entries:', entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
        } else {
          entry.target.classList.remove("scroll-animation");
        }
      });
    },
    { threshold: 0.5 }
  ); // The 'threshold' option means the observer will trigger when 50% of the element is visible

  // Use the observer to observe each element with the class 'animation'
  the_animation.forEach((element) => {
    observer.observe(element);
  });
  // Use the observer to observe each element with the class 'animation-reverse'
  the_animation2.forEach((element) => {
    observer.observe(element);
  });
}

// document is an object, DOM or Document Object Model. A way how browsers interprets HTML documents.
// see chrome dev tools, console ---> type document.
// additional info at MDN web docs.
reveal = () => {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    // console.log(reveals[i]);
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

// function handles the loading screen and components.
function loadingScreen() {
  // triggered when initial HTML document has been completely loaded and parsed.
  document.addEventListener("DOMContentLoaded", function () {
    // console.log('DOM fully loaded and parsed');
    var loadingScreenElements =
      document.getElementsByClassName("loading-screen");
    if (loadingScreenElements.length > 0) {
      setTimeout(function () {
        loadingScreenElements[0].style.display = "none";
      }, 4000);
    } else {
      console.error('No element with class "loading-screen" found.');
    }
  });
}

// function handles the audio
$(function(){ 
  $(".audio-src-img").on("click", function(){
    var audioElement = $(this).siblings('.audio-src')[0];
    return audioElement.paused ? audioElement.play() : audioElement.pause();
  });
});

// Define a function called 'fadeInGallery'
// Define a function called 'fadeInGallery'
function fadeInGallery() {
    var gallery;

    try {
        document.addEventListener("DOMContentLoaded", function () {
            gallery = document.getElementById("gallery");

            if (!gallery) {
                console.error('No element with id "gallery" found.');
                return;
            }

            // Initially hide the element
            gallery.style.opacity = 0;

            // Set up the fade-in animation
            var fadeIn = function () {
                var opacity = parseFloat(gallery.style.opacity);
                if (opacity < 1) {
                    gallery.style.opacity = opacity + 0.01;
                    requestAnimationFrame(fadeIn);
                }
            };

            // Call the fadeIn function
            fadeIn();
        });
    } catch (e) {
        console.error('Error while trying to find element with id "gallery". ' + e.message);
    }
}

// Call the function
fadeInGallery();

document.addEventListener("DOMContentLoaded", function () {
  // Select the title-container and subtitle-container divs
  var titleContainers = document.querySelectorAll('.title-container, .subtitle-container');

  // Define the keyframes for the pulse animation
  var keyframes = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(1.05)', opacity: 0.5 },
    { transform: 'scale(1)', opacity: 1 }
  ];

  // Define the animation options
  var options = {
    duration: 2000, // Duration in milliseconds
    iterations: Infinity, // Number of iterations (Infinity for infinite)
    easing: 'ease-in-out' // Easing function
  };

  // Apply the pulse animation to each title container
  titleContainers.forEach(function (container) {
    container.animate(keyframes, options);
  });
});

function addGlowEffect() {
  try{
      // Select the element with the class 'title'
  let title = document.querySelector('.title');

  // Add event listener for mouseover (hover)
  title.addEventListener('mouseover', function() {
    // Add glow effect on hover
    this.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00';
  });

  // Add event listener for mouseout (no longer hovering)
  title.addEventListener('mouseout', function() {
    // Remove glow effect when no longer hovering
    this.style.textShadow = 'none';
  });
  } catch (error) {
    console.log('Error while trying to find element with class "title".'+error.message);
  }
}

// Call the function
addGlowEffect();

function addWaveEffect() {
  try {
    // Select the element with the class 'title'
  let title = document.querySelector('.title');

  // Add a space between 'D' and 'P'
  let text = title.textContent.replace('DP', 'D P');

  // Split the text into individual letters, wrap each letter in a span, and replace the title's HTML
  title.innerHTML = [...text].map(letter => `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`).join('');

  // Define the keyframes for the wave animation
  let keyframes = [
    { transform: 'initial' },
    { transform: 'translateY(-15px)' },
    { transform: 'initial' }
  ];

  // Define the animation options
  let options = {
    duration: 1000, // Duration in milliseconds
    iterations: Infinity // Number of iterations (Infinity for infinite)
  };

  // Select all the span elements in the title
  let letters = title.querySelectorAll('span');

  // Start the animation for each letter
  letters.forEach((letter, i) => {
    // Delay the start of the animation for each letter to create a wave effect
    options.delay = i * 100; // Delay in milliseconds

    // Start the animation
    letter.animate(keyframes, options);
  });  
  } catch (error) {
    console.log('Error while trying to find element with class "title".');
  }
  
}

// Call the function
addWaveEffect();


// Select all images within the card-container class
let images = document.querySelectorAll('.card-container img');

// Loop through each image
images.forEach((img) => {
  // Add event listener for mouseover (hover)
  img.addEventListener('mouseover', function() {
    // Change CSS properties on hover
    this.style.transform = 'scale(1.1)'; // Slightly enlarge the image
    this.style.transition = 'transform 0.3s ease'; // Smooth transition
  });

  // Add event listener for mouseout (no longer hovering)
  img.addEventListener('mouseout', function() {
    // Reset CSS properties when no longer hovering
    this.style.transform = 'scale(1.0)'; // Return to original size
  });
});


// Call the loadingScreen function
// Call the fadeInGallery function
fadeInGallery();
proceedTo();
loadingScreen();
window.addEventListener("scroll", reveal);
scroll();

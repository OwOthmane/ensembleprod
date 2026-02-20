window.onload = function () {
    // Preloader Animation
    setTimeout(() => {
        const logo = document.getElementById("logo-animation");
        const preloader = document.getElementById("preloader");

        if (logo) { 
            // Applique l'animation du logo si l'élément existe
            logo.classList.add("logo-move");
        }
        // Puis on fait disparaître le preloader
        if (preloader) {
            preloader.style.transition = "opacity 1s ease";
            preloader.style.opacity = 0;

            setTimeout(() => {
                preloader.style.display = "none";
            }, 1000);
        }
    }, 2000);

    // Image Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    if (totalSlides > 0) {
        slides[currentSlide].classList.add('active'); // Affiche la première image

        function changeSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        setInterval(changeSlide, 7000); // Change toutes les 7s
    }

    // Redirection logo sticky
    const stickyLogo = document.querySelector('.sticky-logo');
    if (stickyLogo) {
        stickyLogo.addEventListener('click', function() {
            window.location.href = 'https://linktr.ee/ensemble_production';
        });
    }

    // Gestion des modals (Popups), si nécessaire
    document.querySelectorAll('.question-button').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modalId = closeBtn.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Liste déroulante pour les sessions d'acting
    const sessionHeaders = document.querySelectorAll(".session-header");
    sessionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const parent = this.parentElement;
            const content = parent.querySelector(".session-content");

            if (content.style.display === "block") {
                content.style.display = "none";
                content.style.maxHeight = null;
            } else {
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
};

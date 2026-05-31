document.addEventListener('DOMContentLoaded', function() {

    // Функция для анимации появления элементов
    function animateElements(selector, delayIncrement) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delayIncrement}s`;
            element.classList.add('animated');
        });
    }

    // Анимация элементов hero-секции
    animateElements('.hero h1, .hero p, .button', 0.2);

    // Анимация элементов features-секции
    animateElements('.feature-item', 0.3);

    // Анимация элементов service-секции
    animateElements('.service-item', 0.3);

    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Добавляем эффект параллакса при прокрутке
    document.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;

        document.querySelectorAll('.hero').forEach(hero => {
            hero.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
        });
    });
});
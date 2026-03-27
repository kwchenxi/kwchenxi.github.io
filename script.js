document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card[data-href]');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(event) {
            const href = card.getAttribute('data-href');
            if (href) {
                const target = event.target;
                if (!target.classList.contains('project-detail-link')) {
                    window.open(href, '_blank');
                }
            }
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('visible');
    });

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    });

    if ('ontouchstart' in window) {
        const interactiveElements = document.querySelectorAll('.project-icon, .project-detail-link, a, .version-btn');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
});
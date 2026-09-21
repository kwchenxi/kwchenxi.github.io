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

    // 卡片横滑轮播：箭头翻页 + 触摸滑动；两端禁用对应箭头，进度条随滚动更新
    document.querySelectorAll('.card-carousel').forEach(carousel => {
        const viewport = carousel.querySelector('.card-carousel__viewport');
        const track = carousel.querySelector('.card-carousel__track');
        const prev = carousel.querySelector('.card-carousel__btn--prev');
        const next = carousel.querySelector('.card-carousel__btn--next');
        const progressBar = carousel.querySelector('.card-carousel__progress-bar');
        const progressIndicator = carousel.querySelector('.card-carousel__progress-indicator');
        if (!viewport || !track) return;

        const step = () => {
            const card = track.querySelector('.project-card');
            const gap = parseFloat(getComputedStyle(track).gap) || 0;
            return card ? card.offsetWidth + gap : viewport.clientWidth;
        };

        const update = () => {
            const max = viewport.scrollWidth - viewport.clientWidth;
            if (prev) prev.disabled = viewport.scrollLeft <= 1;
            if (next) next.disabled = viewport.scrollLeft >= max - 1;
            const progress = max > 0 ? viewport.scrollLeft / max : 1;
            if (progressIndicator) progressIndicator.style.transform = `scaleX(${progress})`;
            if (progressBar) progressBar.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
        };

        if (prev) prev.addEventListener('click', () => viewport.scrollBy({ left: -step(), behavior: 'smooth' }));
        if (next) next.addEventListener('click', () => viewport.scrollBy({ left: step(), behavior: 'smooth' }));
        viewport.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    });
});


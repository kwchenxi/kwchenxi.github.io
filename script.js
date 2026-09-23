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
        const controls = carousel.querySelector('.card-carousel__controls') ||
            carousel.closest('.collection__inner')?.querySelector('.card-carousel__controls');
        const prev = controls?.querySelector('.card-carousel__btn--prev');
        const next = controls?.querySelector('.card-carousel__btn--next');
        const progressBar = controls?.querySelector('.card-carousel__progress-bar');
        const progressIndicator = controls?.querySelector('.card-carousel__progress-indicator');
        if (!viewport || !track) return;

        const step = () => {
            const card = track.querySelector('.project-card, .collection-card');
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

        // 平滑滚动 + 兜底：个别环境（无合成器 / 内嵌浏览器）不驱动元素平滑滚动，
        // 也不派发 scroll 事件，此时直接赋值位移并手动刷新按钮与进度条
        const scrollByStep = (delta) => {
            const max = viewport.scrollWidth - viewport.clientWidth;
            const target = Math.max(0, Math.min(max, viewport.scrollLeft + delta));
            const start = viewport.scrollLeft;
            viewport.scrollBy({ left: delta, behavior: 'smooth' });
            window.setTimeout(() => {
                if (Math.abs(viewport.scrollLeft - start) < 0.5) {
                    viewport.scrollLeft = target;
                    update();
                }
            }, 200);
        };

        if (prev) prev.addEventListener('click', () => scrollByStep(-step()));
        if (next) next.addEventListener('click', () => scrollByStep(step()));
        viewport.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();

        // 深色 Collection 分区的 CTA：点击翻到下一屏卡片，到底后回到起点
        const cta = carousel.parentElement ? carousel.parentElement.querySelector('.collection__cta') : null;
        if (cta) {
            cta.addEventListener('click', () => {
                if (next && next.disabled) {
                    scrollByStep(-viewport.scrollLeft);
                } else if (next) {
                    next.click();
                }
            });
        }
    });
});


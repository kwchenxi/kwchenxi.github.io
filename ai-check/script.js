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
});

function toggleLabGrid() {
    const grid = document.querySelector('.lab-grid');
    const btn = document.getElementById('toggleLabBtn');
    if (!grid || !btn) return;
    const isCollapsed = grid.classList.contains('collapsed');
    if (isCollapsed) {
        grid.classList.remove('collapsed');
        btn.innerHTML = '收起 <span class="arrow" style="transform:rotate(180deg)">↓</span>';
    } else {
        grid.classList.add('collapsed');
        btn.innerHTML = '展开更多 <span class="arrow">↓</span>';
    }
}
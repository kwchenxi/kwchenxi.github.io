/* 首屏载入动画：中央头像打招呼后飞入顶栏头像位（仅会话首次访问，?intro 可重播） */
(function () {
    'use strict';

    var doc = document.documentElement;
    if (!doc.classList.contains('intro')) return;

    window.introStarted = true;
    try { sessionStorage.setItem('intro', '1'); } catch (e) {}

    var target = document.querySelector('.site-topbar__mark');
    var finished = false;

    function finish() {
        if (finished) return;
        finished = true;
        doc.classList.add('intro-out');
        document.dispatchEvent(new Event('introdone'));
        setTimeout(function () {
            doc.classList.remove('intro', 'intro-out');
        }, 650);
    }

    if (!target) { finish(); return; }

    var overlay = document.createElement('div');
    overlay.className = 'intro-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = '<div class="intro-overlay__frame"><img src="hoho-lab/HohoIcon.svg" alt=""></div>'
        + '<div class="intro-overlay__say"><span></span></div>';
    document.body.appendChild(overlay);

    overlay.style.left = Math.round((innerWidth - overlay.offsetWidth) / 2) + 'px';
    overlay.style.top = Math.round((innerHeight - overlay.offsetHeight) / 2) + 'px';

    var frame = overlay.querySelector('.intro-overlay__frame');
    var sayText = overlay.querySelector('.intro-overlay__say span');

    /* 问候语（想换台词改这一句即可） */
    var greeting = 'hi :)';
    var EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
    var EASE_SOFT = 'cubic-bezier(0.22, 1, 0.36, 1)';

    /* 打过招呼才起飞：气泡弹出 → 逐字打出 → 停留片刻 */
    var popAt = 900;
    var typeAt = popAt + 120;
    var flyDelay = typeAt + greeting.length * 65 + 430;

    /* 入场：淡入 + 轻微上浮 */
    overlay.animate([
        { opacity: 0, transform: 'translateY(8px) scale(0.94)' },
        { opacity: 1, transform: 'none' }
    ], { duration: 380, easing: EASE_OUT });

    /* 微互动：头像先侧头「听」，气泡弹出时抬头看它，起飞前站直 */
    function at(ms) { return Math.min(1, ms / flyDelay); }
    frame.animate([
        { transform: 'none', offset: 0, easing: EASE_OUT },
        { transform: 'none', offset: at(430), easing: EASE_OUT },
        { transform: 'rotate(-2.5deg)', offset: at(880), easing: EASE_SOFT },
        { transform: 'rotate(-4deg) translateY(-2px)', offset: at(1060), easing: EASE_SOFT },
        { transform: 'rotate(-4deg) translateY(-2px)', offset: at(flyDelay - 300), easing: EASE_OUT },
        { transform: 'none', offset: 1 }
    ], { duration: flyDelay, fill: 'forwards' });

    /* 问候气泡：弹簧感弹出（轻微过冲 + 由模糊变清晰），停在头像上方 */
    setTimeout(function () {
        sayText.animate([
            { opacity: 0, filter: 'blur(4px)', transform: 'translate(-10px,10px) scale(0.6) rotate(2deg)', easing: EASE_OUT },
            { opacity: 1, filter: 'blur(0px)', transform: 'translate(1px,-1px) scale(1.06) rotate(2.4deg)', offset: 0.72, easing: EASE_SOFT },
            { opacity: 1, filter: 'blur(0px)', transform: 'rotate(2deg)' }
        ], { duration: 460, fill: 'forwards' });
    }, popAt);

    /* 打字机式打出问候语 */
    setTimeout(function () {
        var i = 0;
        var timer = setInterval(function () {
            i += 1;
            sayText.textContent = greeting.slice(0, i);
            if (i >= greeting.length) clearInterval(timer);
        }, 65);
    }, typeAt);

    /* 打完招呼揭开页面：气泡收回，头像飞向顶栏头像位 */
    setTimeout(function () {
        finish();

        sayText.animate([
            { opacity: 1, filter: 'blur(0px)', transform: 'rotate(2deg)', easing: 'cubic-bezier(0.4, 0, 1, 1)' },
            { opacity: 0, filter: 'blur(4px)', transform: 'translate(-10px,10px) scale(0.6) rotate(2deg)' }
        ], { duration: 260, fill: 'forwards' });

        var from = overlay.getBoundingClientRect();
        var to = target.getBoundingClientRect();
        var dx = to.left - from.left;
        var dy = to.top - from.top;
        var scale = to.width / from.width;

        overlay.style.transformOrigin = '0 0';
        /* 一步到位：急出缓收直接落进顶栏标。不过冲——落点只有 26px，过冲再回正的几像素会被看成「往后缩」 */
        overlay.animate([
            { transform: 'none' },
            { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + scale + ')' }
        ], { duration: 700, easing: EASE_OUT, fill: 'forwards' }).onfinish = function () {
            overlay.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 240, fill: 'forwards' }).onfinish = function () {
                overlay.remove();
            };
        };
    }, flyDelay);
})();

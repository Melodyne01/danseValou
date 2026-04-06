export function initMarquee() {
    const wrapper = document.querySelector('.marquee-wrapper');
    if (!wrapper) return;

    // Build the double-content track for seamless infinite loop
    const track = wrapper.querySelector('.marquee-track');
    if (!track) return;

    const inner = track.querySelector('.marquee-inner');
    if (!inner) return;

    // Clone inner content for seamless loop
    const clone = inner.cloneNode(true);
    track.appendChild(clone);

    // Pause on hover
    wrapper.addEventListener('mouseenter', () => {
        inner.style.animationPlayState = 'paused';
        clone.style.animationPlayState = 'paused';
    });
    wrapper.addEventListener('mouseleave', () => {
        inner.style.animationPlayState = 'running';
        clone.style.animationPlayState = 'running';
    });
}

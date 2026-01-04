export function initMarquee() {
    const text = document.querySelector('.marquee-text');
    if (!text) return;

    let lastScrollY = window.scrollY;
    let position = 50;
    let time = 0;

    const speed = 0.7;        // base movement speed
    const waveAmplitude = 20; // px
    const waveFrequency = 0;

    function animate() {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        // Move forward on scroll down, backward on scroll up
        position -= delta * speed;

        // Wave effect
        time += 0.00;
        const waveY = Math.sin(time + position * waveFrequency) * waveAmplitude;

        text.style.transform = `
            translateX(${position}px)
            translateY(${waveY}px)
        `;

        requestAnimationFrame(animate);
    }

    animate();
}

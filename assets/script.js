/* ========================================
   IL VIAGGIO v5 — Scripts
   ======================================== */

// Gallery images data
const galleryImages = [
    { src: 'assets/images/01.png', title: 'Frame 01 — Il Buio' },
    { src: 'assets/images/02.png', title: 'Frame 02 — Onboarding: le sfere' },
    { src: 'assets/images/03.png', title: 'Frame 03 — La luce arancione' },
    { src: 'assets/images/04.png', title: 'Frame 04 — La Fucina: l\'ambiente' },
    { src: 'assets/images/05.png', title: 'Frame 05 — La Fucina: il colpo' },
    { src: 'assets/images/06.png', title: 'Frame 06 — La chiave rivelata' },
    { src: 'assets/images/07.png', title: 'Frame 07 — La Porta' },
    { src: 'assets/images/08.png', title: 'Frame 08 — Il Mare: le pietre' },
    { src: 'assets/images/09.png', title: 'Frame 09 — Il Lancio' },
    { src: 'assets/images/10.png', title: 'Frame 10 — Lo Splash' },
    { src: 'assets/images/11.png', title: 'Frame 11 — La Figura si avvicina' },
    { src: 'assets/images/12.png', title: 'Frame 12 — L\'ultimo lancio' },
    { src: 'assets/images/13.png', title: 'Frame 13 — Faccia a faccia' },
    { src: 'assets/images/14.png', title: 'Frame 14 — Le sfere-parola' },
    { src: 'assets/images/15.png', title: 'Frame 15 — Il tocco' },
    { src: 'assets/images/16.png', title: 'Frame 16 — Due presenze sul mare' },
    { src: 'assets/images/17.png', title: 'Frame 17 — La Dissoluzione' },
    { src: 'assets/images/18.png', title: 'Frame 18 — L\'alba nasce' },
    { src: 'assets/images/19.png', title: 'Frame 19 — Le mani creative' },
    { src: 'assets/images/20.png', title: 'Frame 20 — L\'Alba piena' }
];

let currentLb = 0;

function openLightbox(idx) {
    currentLb = idx;
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    document.getElementById('lb-img').src = galleryImages[idx].src;
    document.getElementById('lb-caption').textContent = galleryImages[idx].title;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

function navLightbox(dir) {
    currentLb = (currentLb + dir + galleryImages.length) % galleryImages.length;
    document.getElementById('lb-img').src = galleryImages[currentLb].src;
    document.getElementById('lb-caption').textContent = galleryImages[currentLb].title;
}

// Init lightbox events
document.addEventListener('DOMContentLoaded', function() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });
    }

    document.addEventListener('keydown', function(e) {
        const lb = document.getElementById('lightbox');
        if (!lb || !lb.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navLightbox(-1);
        if (e.key === 'ArrowRight') navLightbox(1);
    });
});

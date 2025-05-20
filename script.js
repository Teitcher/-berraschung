let aktuellesBild = 0;
const bilder = document.querySelectorAll('.zelt-bilder img');
function naechstesBild() {
    bilder[aktuellesBild].classList.remove('active');
    aktuellesBild = (aktuellesBild + 1) % bilder.length;
    bilder[aktuellesBild].classList.add('active');
}
const sterne = document.querySelectorAll('.stern');
sterne.forEach(stern => {
    stern.addEventListener('click', () => {
        const wert = parseInt(stern.getAttribute('data-wert'));
        sterne.forEach(s => s.classList.remove('selected'));
        sterne.forEach(s => {
            if (parseInt(s.getAttribute('data-wert')) <= wert) s.classList.add('selected');
        });
        const id = document.querySelector('header h1').innerText.toLowerCase().replace(/\s+/g, '_');
        localStorage.setItem('bewertung_' + id, wert);
    });
});
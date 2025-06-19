function wrapWords() {
  const letter = document.getElementById('letter');
  const words = letter.textContent.trim().split(/\s+/);
  letter.innerHTML = words
    .map((w, i) => `<span style="animation-delay:${i * 0.1}s">${w}</span>`) 
    .join(' ');
}


function checkCode(expected) {
  const val = document.getElementById('codeInput').value.trim().toLowerCase();
  if (val === expected.toLowerCase()) {
    document.getElementById('gift').style.display = 'block';
  } else {
    alert('Leider falsch, versuche es erneut!');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  wrapWords();
  const button = document.getElementById('checkButton');
  const expected = button.getAttribute('data-code');
  button.addEventListener('click', function(){ checkCode(expected); });
});

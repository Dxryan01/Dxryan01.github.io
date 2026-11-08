document.querySelectorAll('.copier').forEach((bouton) => {
  bouton.addEventListener('click', async () => {
    const original = bouton.textContent;
    try {
      await navigator.clipboard.writeText(bouton.dataset.valeur);
      bouton.textContent = 'copié ✓';
    } catch {
      bouton.textContent = 'copie impossible';
    }
    setTimeout(() => { bouton.textContent = original; }, 1500);
  });
});
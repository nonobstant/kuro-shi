
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  //button
  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click' (e) => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiseResult) => {
    if (choiseResult.outcome === 'accepted') {
      console.log('A2HS accepted')
    }
    deferredPrompt = null;
  })
})

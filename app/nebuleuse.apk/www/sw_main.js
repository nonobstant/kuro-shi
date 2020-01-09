//Check sw on navigator
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>{
    navigator.serviceWorker
     .register('sw_cache.js')
     .then(reg => console.log('service Worker: Registered'))
     .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}

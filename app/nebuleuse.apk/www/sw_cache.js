const cacheNebu = 'v3';


//Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});

//Activate
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
  // remove old cacheAssets
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all (
        cacheNames.map(cache => {
          if(cache !== cacheNebu) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

//Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request)
    .then(res => {
      //make clone
      const resClone = res.clone();
      //open caches
      caches
        .open(cacheNebu)
        .then(cache => {
          //add res
          cache.put(e.request, resClone);
        });
      return res;
    }).catch(err => caches.match(e.request).then(res => res))
  );
})

//Notification
let deferredPrompt; // Allows to show the install prompt
let setupButton;

self.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    if (setupButton == undefined) {
        setupButton = document.getElementById("setup_button");
    }
    // Show the setup button
    setupButton.style.display = "inline";
    setupButton.disabled = false;
});

//instal PWA
function installApp() {
    // Show the prompt
    deferredPrompt.prompt();
    setupButton.disabled = true;
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA setup accepted');
                // hide our user interface that shows our A2HS button
                setupButton.style.display = 'none';
            } else {
                console.log('PWA setup rejected');
            }
            deferredPrompt = null;
        });
}

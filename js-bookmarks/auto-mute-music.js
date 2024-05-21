javascript: (() => {
  var hostname = window.location.hostname;
  var configs = {
    "open.spotify.com": {
      adsSelector: '*[aria-label="Advertisement"]',
      muteSelector: '*[aria-label="Mute"]',
      unmuteSelector: '*[aria-label="Unmute"]',
    },
    "www.di.fm": {
      adsSelector: '',
      muteSelector: '*[aria-label="volume"].icon-sound',
      unmuteSelector: '*[aria-label="volume"].icon-mute',
    },
    "www.youtube.com": {
      adsSelector: '.ytp-ad-text',
      muteSelector: '.ytp-mute-button[data-title-no-tooltip="Mute"]',
      unmuteSelector: '.ytp-mute-button[data-title-no-tooltip="Unmute"]',
      skipButtonSelector: '.ytp-skip-ad-button',
    },
  };
  
  setInterval(() => {
    var { adsSelector, muteSelector, unmuteSelector } = configs[hostname];
    var ads = document.querySelectorAll(adsSelector)[0];
    var isAds = !!ads;

    if (isAds) {
      document.querySelectorAll(muteSelector)[0]?.click();
    } else {
      document.querySelectorAll(unmuteSelector)[0]?.click();
    }

    if (skipButtonSelector) {
      document.querySelectorAll(skipButtonSelector)[0]?.click();
    }
  }, 1000);
})();

(function () {
    'use strict';

    function skipAd() {
        // find the skip ad button 
        var skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
        }
    }

    // setting the time gap for waiting 
    var timer = setInterval(skipAd, 1000); // 1 second
})();

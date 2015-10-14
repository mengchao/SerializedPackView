var scannedSerial = "0003";

var scanBack = function () {
    this.scan(false, false);
};

var scanBackFlip = function () {
    this.scan(false, true);
};

var scanFront = function () {
    alert("entering scan Front");
    this.scan(true, false);
};

var scanFrontFlip = function () {
    this.scan(true, true);
};

var scan = function (preferFrontCamera, showFlipCameraButton) {
    if (!this.checkSimulator()) {
        cordova.plugins.barcodeScanner.scan(
            // success callback function
            function (result) {
                // wrapping in a timeout so the dialog doesn't free the app
                setTimeout(function () {
                    if (!result.cancelled) {
                        scannedSerial = result.text;
        				window.location.href = "packInfo.html?serialIdValue=" + scannedSerial;
                    }
                }, 0);
            },

            // error callback function
            function (error) {
                alert("Scanning failed: " + error);
            },

            // options objects
            {
                "preferFrontCamera": preferFrontCamera, // default false
                "showFlipCameraButton": showFlipCameraButton // default false
            }
        );
    }
};

var encode = function () {
    if (!this.checkSimulator()) {
        cordova.plugins.barcodeScanner.encode(

            // pick one of TEXT_TYPE / EMAIL_TYPE / PHONE_TYPE / SMS_TYPE
            cordova.plugins.barcodeScanner.Encode.TEXT_TYPE,

            // the thing to encode - for a link use TEXT_TYPE above
            "http://www.telerik.com",

            // success callback (will currently not be invoked)
            function (result) {
                alert("Encoding succeeded: " + result);
            },

            // error callback
            function (error) {
                alert("Encoding failed: " + error);
            }
        );
    }
};

var checkSimulator = function () {
    if (window.navigator.simulator === true) {
        window.location.href = "packInfo.html?serialIdValue=" + scannedSerial;
        alert('This plugin is not available in the simulator.');
        return true;
    } else if (window.cordova === undefined) {
        alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
        return true;
    } else {
        return false;
    }
};
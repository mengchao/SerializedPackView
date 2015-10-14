(function () {
    document.addEventListener("deviceready", function () {
        var app = new kendo.mobile.Application(document.body, {
            skin: "nova"
        });
        navigator.splashscreen.hide();
    });
}());

function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        alert('landscape');
        break; 
      default:
        alert('portrait');
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();
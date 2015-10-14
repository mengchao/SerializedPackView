function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        window.location.href = "packList.html?serialIdValue=" 
                               + document.getElementById("serialIdValue").value;
        break; 
      default:
        window.location.href = "packInfo.html?serialIdValue=" 
                               + document.getElementById("serialIdValue").value;
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();
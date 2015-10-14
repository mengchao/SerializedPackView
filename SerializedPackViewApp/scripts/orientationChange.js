function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        document.getElementById("packInfoPage").style.display="none";
        document.getElementById("packListPage").style.display="block";
        break; 
      default:
        document.getElementById("packInfoPage").style.display="block";
        document.getElementById("packListPage").style.display="none";
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();
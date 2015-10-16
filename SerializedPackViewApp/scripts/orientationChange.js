
var initialOriention = "endways";
function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        initialOriention = "sidewards";
        if (document.getElementById("homePage").style.display != "block") {
            document.getElementById("packInfoPage").style.display="none";
            document.getElementById("packListPage").style.display="block";
        }
        document.getElementById("imgTwo").innerHTML = "<img src='images/bar22.png' />";
        break; 
      default:
        initialOriention = "endways";
        if (document.getElementById("homePage").style.display != "block") {
            document.getElementById("packInfoPage").style.display="block";
            document.getElementById("packListPage").style.display="none";
        }
        document.getElementById("imgTwo").innerHTML = "<img src='images/bar2.png' />";
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();
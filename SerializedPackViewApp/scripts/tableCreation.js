function propertyListInitial() {
    if (document.getElementById("serialIdValue").value == undefined) {
        alert("Waring...");
        return;
    }
    var propertyList = [];
	var currentEle = getCurrentElem(document.getElementById("serialIdValue").value);
    for (pro in currentEle) {
        if (pro != "parentId") {
            var obj = {};
            obj.key = pro;
            obj.value = currentEle[pro];
            propertyList.push(obj);
        }
    }
    var tableContent = "";
    var displayLineColor = false;
  	for(var p in propertyList) {
        if (displayLineColor) {
        	tableContent = tableContent + "<tr height=20px bgcolor=#add9c0>";
            displayLineColor = false;
        } else {
        	tableContent = tableContent + "<tr height=20px>";
            displayLineColor = true;
        }
     	for (var pp in propertyList[p]) {
            tableContent = tableContent + "<td>" + propertyList[p][pp] + "</td>";
     	}
        tableContent = tableContent + "</tr>";
  	}
  	document.getElementById("propertyView").innerHTML = tableContent;
}
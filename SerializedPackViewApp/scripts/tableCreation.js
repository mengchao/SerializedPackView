function propertyListInitial() {
    document.getElementById("packInfoPage").style.display="block";
    document.getElementById("packListPage").style.display="none";
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
        if (pro == "item") {
            document.getElementById("itemNumberView").innerHTML = "&nbsp;&nbsp;" + currentEle[pro];
        }
        if (pro == "imgSrc") {
            document.getElementById("itemImghandler").innerHTML = "<img id=itemImg src=" + currentEle[pro] + " />"
        }
    }
    var tableContent = "";
    var displayLineColor = true;
  	for(var p in propertyList) {
        if (propertyList[p].key != "imgSrc" & propertyList[p].key != "item") {
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
  	}
  	document.getElementById("propertyView").innerHTML = tableContent;
}
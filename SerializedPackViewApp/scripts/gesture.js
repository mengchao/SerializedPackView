        $(document).kendoTouch({
            enableSwipe: true,
            swipe: function (e) {
                if (e.direction == "left") {
                    if (document.getElementById("packInfoPage").style.display == "block") {
                        var rightSer = getNextSibling(document.getElementById("serialIdValue").value);
                        if (rightSer == undefined) {
                            alert("The last item.");
                        } else {
                            document.getElementById("serialIdValue").value = rightSer.id;
                            propertyListInitial();
                        }
                    }
                } else {
                    if (e.direction == "right") {
            			if (document.getElementById("packInfoPage").style.display == "block") {
                            var leftSer = getPrevSibling(document.getElementById("serialIdValue").value);
                            if (leftSer == undefined) {
                                alert("The first item.");
                            } else {
                                document.getElementById("serialIdValue").value = leftSer.id;
                                propertyListInitial();
                            }
                        }
                    }
                }
            }
        });
        // $(document).on("swipeleft", function () {
        //     var rightSer = getNextSibling(document.getElementById("serialIdValue").value);
        //     if (rightSer == undefined) {
        //         alert("The last item.");
        //     }
        //     else {
        //         document.getElementById("serialIdValue").value = rightSer.id;
        //         propertyListInitial();
        //     }
        // });
        // $(document).on("swiperight", function () {
        //     var leftSer = getPrevSibling(document.getElementById("serialIdValue").value);
        //     if (leftSer == undefined) {
        //         alert("The first item.");
        //     }
        //     else {
        //         document.getElementById("serialIdValue").value = leftSer.id;
        //         propertyListInitial();
        //     }
        // });
        $(document).on("swipeup", function () {
            if (document.getElementById("packInfoPage").style.display == "block") {
                var childSer = getFirstChild(document.getElementById("serialIdValue").value);
                if (childSer == undefined) {
                    alert("The lowest level.");
                } else {
                    document.getElementById("serialIdValue").value = childSer.id;
                    propertyListInitial();
                }
            }
        });
        $(document).on("swipedown", function () {
            if (document.getElementById("packInfoPage").style.display == "block") {
                var parentSer = getParentElem(document.getElementById("serialIdValue").value);
                if (parentSer == undefined) {
                    alert("The top level.");
                } else {
                    document.getElementById("serialIdValue").value = parentSer.id;
                    propertyListInitial();
                }
            }
        });
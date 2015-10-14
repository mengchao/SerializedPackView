

<script src="https://bs-static.cdn.telerik.com/1.2.5/everlive.all.min.js"></script>

(function () {
    var apiKey = "w8BNCS5DnlNZ2hie";

    var el = new Everlive(apiKey);

    var data = el.data('SerialMaster');
    data.get()
        .then(function (data) {
                alert(JSON.stringify(data));
        		//var data1 = data[1];
        		//alert(JSON.stringify(data));
            },
            function (error) {
                alert(JSON.stringify(error));
            });
}());
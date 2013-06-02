function newsletterUpload() {
    var url = "http://localhost:8888/data.php?username=corlios&pastId=5&healthScore=87&foodScore=20";
    var xhr = Ti.Network.createHTTPClient();
    xhr.onerror = function() {};
    xhr.onload = function() {
        Ti.API.info(this.responseText);
    };
    xhr.open("GET", url);
    xhr.send();
}

module.exports = newsletterUpload;
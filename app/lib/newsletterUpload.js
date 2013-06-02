/**
 * @author Andrew Corliss
 */
function newsletterUpload() {
	
	var url = 'http://localhost:8888/data.php?username=corlios&pastId=5&healthScore=87&foodScore=20';
	
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onerror = function(e)
	{
		//alert('There was an error in retrieving the data, please try again shortly');
	}
	
	xhr.onload = function()
	{
		Ti.API.info(this.responseText);
		
		//var json = JSON.parse(this.responseText);
		
		//Ti.API.info(json.result);

	}
	
	xhr.open('GET', url);
	xhr.send();
}
module.exports = newsletterUpload;
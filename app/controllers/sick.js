$.table.addEventListener('click', function(e){
	Ti.API.info(e.row.sub);
	//$.row.setBackgroundColor('blue');
	//Save the information to a database
	//Then call back in Chart view and display possible conditions
	//Note: Unable to use model database due to pre-existing errors
	var service = require('/dBase');
	var test = new service();
	
	test.add(e.row.sub, e.row.myId);
	
	e.row.setBackgroundColor('yellow');
	
	
});

var dataArray = [];

var url = 'http://hack4colorado.itriagehealth.com/api/v1/symptoms?per_page=100'

getBody();

function getBody()
{
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onerror = function(e)
	{
		alert('There was an error in retrieving the data, please try again shortly');
	}
	
	xhr.onload = function()
	{
		var json = JSON.parse(this.responseText);
		
		//Ti.API.info(json);
		
		var myJson = json.symptoms;
		
		//Ti.API.info(myJson);
						 
		for (var i in json.symptoms)
		{			
			
			var args = {
				title: json.symptoms[i].name,
				id:		json.symptoms[i].id
			};
							
			//Ti.API.info('=> '+ json.conditions[i].treatment);
						
			var row = Alloy.createController('sickRow', args).getView();
			
			dataArray.push(row);
			//dataArray = null;
		};
		$.table.setData(dataArray);

	}
	
	xhr.open('GET', url);
	xhr.send();
}

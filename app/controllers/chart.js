var service = require('/dBase');
var test = new service();

Ti.App.addEventListener('Database_Update', populate);

function populate()
{
	var results = test.myInfo();
	
	//Ti.API.info(results);
	$.sym.text = results[0].name;
	$.sym2.text = results[1].name;
	$.sym3.text = results[2].name;
	
	for (var i = 0; i < results.length; i++)
	{
		//Ti.API.info(results[i]);
		getCond(results[i].id);
		
	}
}
populate();

var myArray = [];

function getCond(sym)
{
	var url = 'http://hack4colorado.itriagehealth.com/api/v1/';
	url += 'symptoms/'+sym+'/conditions.json?content=lite';
	
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onerror = function(e)
	{
		alert('There was an error in retrieving the data, please try again shortly');
	}
	
	xhr.onload = function()
	{
		var json = JSON.parse(this.responseText);
		
		//Ti.API.info(json.conditions);		
	 	
		for (var i in json.conditions)
		{
			var myArgs = {
				condition: json.conditions[i].name,
				con_id: json.conditions[i].id,
				symp: sym
			};
			
			myArray.push(myArgs);
			//syncData(myArgs);
			//newRow();
		};
		//syncData();

	}
	
	xhr.open('GET', url);
	xhr.send();
}
var newArray = [];

function newRow()
{
	/*
	if (myArray.con_id == 51)
		{
			var myData = {
				id: myArray.con_id,
				title: myArray.condition
			};
			
			var row = Alloy.createController('tableRow', myData).getView();
			
			newArray.push(row);
		}
		$.table.setData(newArray);
	*/
/*
	for (var i = 0; i < myArray.length; i++)
	{
		Ti.API.info(myArray[i].condition);
		if (myArray[i].con_id == 51)
		{
			var myData = {
				id: myArray[0].symp,
				title: myArray[0].condition
			};
			
			var row = Alloy.createController('tableRow', myData).getView();
			
			newArray.push(row);
		}
		$.table.setData(newArray);

	}
*/
}

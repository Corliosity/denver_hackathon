$.table.addEventListener('click', function(e){
	//alert(e.rowData.myId);
	
	var args = {
		title: e.rowData.myId,
		subtitle: e.rowData.sub,
		phone: e.rowData.ph,
		email: e.rowData.email,
		img: e.rowData.img
	}
	
	var rowDetail = Alloy.createController('Detail', args).getView();
	
	Alloy.Globals.tabGroup.activeTab.open(rowDetail);
});

var dataArray = [];
var url = "http://localhost:8888/doctors.php"
//Api call your key is: bb21eddf16a5997f
getList();

function getList()
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
				 
		for (var i = 0; i < json.length; i++)
		{
			var args = {
				id: json[i].practice,
				title: json[i].name,
				phone: json[i].phone,
				img: json[i].img,
				email: json[i].email
			};
			
			var row = Alloy.createController('tableRow', args).getView();
			
			dataArray.push(row);
			
			//dataArray = null;
		};
		$.table.setData(dataArray);

	}
	
	xhr.open('GET', url);
	xhr.send();
}

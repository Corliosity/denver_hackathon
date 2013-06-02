//Home tab will act as central hub of app displaying the overall health bar of the user
//From this tab an update will be sent to a database containing the health bar and contributing factors
//This data will impact the SendGrid Email system and what to send a user.

var service = require('/newsletterUpload');
var test = new service();

//test.dropDBTable();

$.chart.addEventListener('click', function(e){
	Ti.API.info(' text ' + JSON.stringify(e.source));

	// load the view controller and call the index method
	var viewController = Alloy.createController('chart').getView();
	
	// pass in the tab since we are faking a navigation controller
	//viewController.index($.tab1);
	Alloy.Globals.tabGroup.activeTab.open(viewController);
});

$.doc.addEventListener('click', function(e){
	Ti.API.info(' text ' + JSON.stringify(e.source));

	// load the view controller and call the index method
	var viewController = Alloy.createController('doctor').getView();
	
	// pass in the tab since we are faking a navigation controller
	//viewController.index($.tab1);
	Alloy.Globals.tabGroup.activeTab.open(viewController);
});

$.sick.addEventListener('click',function(e){
	Ti.API.info(' text ' + JSON.stringify(e.source));

	// load the view controller and call the index method
	var viewController = Alloy.createController('sick').getView();
	
	// pass in the tab since we are faking a navigation controller
	//viewController.index($.tab1);
	Alloy.Globals.tabGroup.activeTab.open(viewController);
});

$.set.addEventListener('click',function(e){
	Ti.API.info(' text ' + JSON.stringify(e.source));

	// load the view controller and call the index method
	var viewController = Alloy.createController('settings').getView();
	
	// pass in the tab since we are faking a navigation controller
	//viewController.index($.tab1);
	Alloy.Globals.tabGroup.activeTab.open(viewController);
});

var fb = require('facebook');

fb.requestWithGraphPath('me/feed', {}, 'GET', function(e) {
    if (e.success) {
       // Ti.API.info(e.result);
        var json = JSON.parse(e.result);
        
       // Ti.API.info(json);
        //Ti.API.info('Getting Data => ' + json);
        getPost(json.paging.previous);
        
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});

function getPost(e) {
	
	var url = e;
	
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onerror = function(e)
	{
		alert('There was an error in retrieving the data, please try again shortly');
	}
	
	xhr.onload = function()
	{
		//Ti.API.info(this.responseText);
		
		var json = JSON.parse(this.responseText);
		
		//Ti.API.info(json.result);
						 
		for (var i in json.data)
		{			
			//Ti.API.info(json.data[i]);
							
			//Ti.API.info('=> '+ json.conditions[i].treatment);			
			//dataArray = null;
		};

	}
	
	xhr.open('GET', url);
	xhr.send();
}

getTweet();

function getTweet(){
	
	var url = 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=createtheinno';
	
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onerror = function(e)
	{
		alert('There was an error in retrieving the data, please try again shortly');
	}
	
	xhr.onload = function()
	{
		//Ti.API.info(this.responseText);
		
		var json = JSON.parse(this.responseText);
		
		//Ti.API.info(json);
						 
		getAlchemy(json[0].id_str);

	}
	
	xhr.open('GET', url);
	xhr.send();
}

function getAlchemy(e) {
	Ti.API.info(e);
	var url = 'http://access.alchemyapi.com/calls/url/URLGetTextSentiment?showSourceText=1&';
	url += 'url=http://twitter.com/createtheinno/status/340943329409773568&';
	url += 'apikey=29fe802e70afbc7a5086936ff3880b20d2adea08&outputMode=json';
	
	Ti.API.info(url);
	
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onerror = function(e)
	{
		alert('There was an error in retrieving the data, please try again shortly');
	}
	
	xhr.onload = function()
	{
		//Ti.API.info(this.responseText);
		
		var json = JSON.parse(this.responseText);
		
		//Ti.API.info(json.docSentiment);
		//Json.score will be factored into the application health bar
		//At this writing the formula will be fx = (mental Health * 1)^2 + (physical * 1.5)^2 + (diet * 1.3)^2
		//Formula will require more work but serves as a base for the overall user health
		//A base rating will be determined by agreed upon factors from health professionals
		if (json.docSentiment.type == 'positive')
		{
			$.healthImage.setImage('/GreenArrow.png');
			$.over.text = 'You are 89% Healthy';
		}
						 
	}
	
	xhr.open('GET', url);
	xhr.send();
	
}


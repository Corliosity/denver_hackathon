
var fb = require('facebook');

	fb.appid = '607629162582048';
	fb.perissions = ['read_stream'];

	fb.addEventListener('login', function(e) {
		if (e.success) {
			alert('Logged in');
		}
	});
	
	fb.forceDialogAuth = false;
	
	fb.requestWithGraphPath('me/feed', {}, 'GET', function(e) {
    if (e.success) {
       // Ti.API.info(e.result);
        var json = JSON.parse(e.result);
        
        Ti.API.info(json);
        
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});



$.myHome.add(fb.createLoginButton({
    top : '125dp',
    style : fb.BUTTON_STYLE_WIDE
}));


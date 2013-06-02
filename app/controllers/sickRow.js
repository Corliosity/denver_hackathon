//Alloy.Globals.counter || (Alloy.Globals.counter = 0);
//var counter = ++Alloy.Globals.counter;

var args = arguments[0] || {};
 
$.title.text = args.title;
//$.subTitle.text = args.id;

$.row.myId = $.title.text;
$.row.sub = args.id;



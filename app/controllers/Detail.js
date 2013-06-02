var args = arguments[0] || {};

Ti.API.info(args.img);

$.docImg.setImage(args.img);
$.docName.text = args.title;
$.docPhone.text = args.phone;
$.docE.text = args.email;
$.prac.text = args.subtitle;
$.win.title = args.title;


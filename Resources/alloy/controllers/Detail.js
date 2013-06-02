function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.docImg = Ti.UI.createImageView({
        left: "5dp",
        top: "5dp",
        id: "docImg"
    });
    $.__views.win.add($.__views.docImg);
    $.__views.docName = Ti.UI.createLabel({
        right: "10dp",
        top: "5dp",
        id: "docName"
    });
    $.__views.win.add($.__views.docName);
    $.__views.prac = Ti.UI.createLabel({
        right: "10dp",
        top: "30dp",
        id: "prac"
    });
    $.__views.win.add($.__views.prac);
    $.__views.docPhone = Ti.UI.createLabel({
        right: "10dp",
        top: "50dp",
        id: "docPhone"
    });
    $.__views.win.add($.__views.docPhone);
    $.__views.docE = Ti.UI.createLabel({
        right: "10dp",
        top: "70dp",
        id: "docE"
    });
    $.__views.win.add($.__views.docE);
    $.__views.face = Ti.UI.createImageView({
        top: "175dp",
        left: "20dp",
        id: "face",
        image: "/social.jpg"
    });
    $.__views.win.add($.__views.face);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info(args.img);
    $.docImg.setImage(args.img);
    $.docName.text = args.title;
    $.docPhone.text = args.phone;
    $.docE.text = args.email;
    $.prac.text = args.subtitle;
    $.win.title = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
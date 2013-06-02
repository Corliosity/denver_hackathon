function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.myHome = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: false,
        id: "myHome"
    });
    $.__views.myHome && $.addTopLevelView($.__views.myHome);
    $.__views.twit = Ti.UI.createButton({
        top: "20dp",
        title: "Access Twitter",
        id: "twit"
    });
    $.__views.myHome.add($.__views.twit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fb = require("facebook");
    fb.appid = "607629162582048";
    fb.perissions = [ "read_stream" ];
    fb.addEventListener("login", function(e) {
        e.success && alert("Logged in");
    });
    fb.forceDialogAuth = false;
    fb.requestWithGraphPath("me/feed", {}, "GET", function(e) {
        if (e.success) {
            var json = JSON.parse(e.result);
            Ti.API.info(json);
        } else e.error ? alert(e.error) : alert("Unknown response");
    });
    $.myHome.add(fb.createLoginButton({
        top: "125dp",
        style: fb.BUTTON_STYLE_WIDE
    }));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
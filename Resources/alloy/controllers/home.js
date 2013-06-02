function Controller() {
    function getPost(e) {
        var url = e;
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("There was an error in retrieving the data, please try again shortly");
        };
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            for (var i in json.data) ;
        };
        xhr.open("GET", url);
        xhr.send();
    }
    function getTweet() {
        var url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=createtheinno";
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("There was an error in retrieving the data, please try again shortly");
        };
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            getAlchemy(json[0].id_str);
        };
        xhr.open("GET", url);
        xhr.send();
    }
    function getAlchemy(e) {
        Ti.API.info(e);
        var url = "http://access.alchemyapi.com/calls/url/URLGetTextSentiment?showSourceText=1&";
        url += "url=http://twitter.com/createtheinno/status/340943329409773568&";
        url += "apikey=29fe802e70afbc7a5086936ff3880b20d2adea08&outputMode=json";
        Ti.API.info(url);
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("There was an error in retrieving the data, please try again shortly");
        };
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            if ("positive" == json.docSentiment.type) {
                $.healthImage.setImage("/GreenArrow.png");
                $.over.text = "You are 89% Healthy";
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.myHome = Ti.UI.createWindow({
        backgroundColor: "#60B2FF",
        navBarHidden: true,
        tabBarHidden: true,
        id: "myHome"
    });
    $.__views.image = Ti.UI.createImageView({
        top: 0,
        id: "image",
        image: "/AIH_Logo.png"
    });
    $.__views.myHome.add($.__views.image);
    $.__views.health = Ti.UI.createView({
        width: "80%",
        height: "50dp",
        top: "75dp",
        id: "health"
    });
    $.__views.myHome.add($.__views.health);
    $.__views.healthImage = Ti.UI.createImageView({
        top: 0,
        id: "healthImage",
        image: "/YellowArrow.png"
    });
    $.__views.health.add($.__views.healthImage);
    $.__views.over = Ti.UI.createLabel({
        top: "125dp",
        text: "You Are 79% healthy",
        id: "over"
    });
    $.__views.myHome.add($.__views.over);
    $.__views.nav = Ti.UI.createView({
        id: "nav"
    });
    $.__views.myHome.add($.__views.nav);
    $.__views.chart = Ti.UI.createButton({
        font: {
            fontSize: "9px"
        },
        width: "80dp",
        height: "80dp",
        left: "30dp",
        top: "175dp",
        backgroundImage: "/Chart.png",
        accessibilityHint: "Click for patient Chart",
        id: "chart"
    });
    $.__views.nav.add($.__views.chart);
    $.__views.doc = Ti.UI.createButton({
        font: {
            fontSize: "9px"
        },
        width: "80dp",
        height: "80dp",
        left: "130dp",
        top: "175dp",
        backgroundImage: "/SmallerDoctor.png",
        accessibilityHint: "Click for Local Doctors",
        id: "doc"
    });
    $.__views.nav.add($.__views.doc);
    $.__views.sick = Ti.UI.createButton({
        font: {
            fontSize: "9px"
        },
        width: "80dp",
        height: "80dp",
        left: "230dp",
        top: "175dp",
        backgroundImage: "/Symptoms.png",
        accessibilityHint: "Click for Symptom Identifier",
        id: "sick"
    });
    $.__views.nav.add($.__views.sick);
    $.__views.set = Ti.UI.createButton({
        top: "225dp",
        height: "50dp",
        width: "100dp",
        visible: false,
        id: "set",
        title: "Settings"
    });
    $.__views.nav.add($.__views.set);
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Recomendations"
    });
    var __alloyId4 = [];
    __alloyId4.push($.__views.sectionFruit);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Eating Right",
        id: "__alloyId5"
    });
    $.__views.sectionFruit.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Join a workout group",
        id: "__alloyId6"
    });
    $.__views.sectionFruit.add($.__views.__alloyId6);
    $.__views.table = Ti.UI.createTableView({
        top: "325dp",
        data: __alloyId4,
        id: "table"
    });
    $.__views.myHome.add($.__views.table);
    $.__views.home = Ti.UI.createTab({
        window: $.__views.myHome,
        id: "home",
        title: "Home",
        icon: "KS_nav_ui.png"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var service = require("/newsletterUpload");
    new service();
    $.chart.addEventListener("click", function(e) {
        Ti.API.info(" text " + JSON.stringify(e.source));
        var viewController = Alloy.createController("chart").getView();
        Alloy.Globals.tabGroup.activeTab.open(viewController);
    });
    $.doc.addEventListener("click", function(e) {
        Ti.API.info(" text " + JSON.stringify(e.source));
        var viewController = Alloy.createController("doctor").getView();
        Alloy.Globals.tabGroup.activeTab.open(viewController);
    });
    $.sick.addEventListener("click", function(e) {
        Ti.API.info(" text " + JSON.stringify(e.source));
        var viewController = Alloy.createController("sick").getView();
        Alloy.Globals.tabGroup.activeTab.open(viewController);
    });
    $.set.addEventListener("click", function(e) {
        Ti.API.info(" text " + JSON.stringify(e.source));
        var viewController = Alloy.createController("settings").getView();
        Alloy.Globals.tabGroup.activeTab.open(viewController);
    });
    var fb = require("facebook");
    fb.requestWithGraphPath("me/feed", {}, "GET", function(e) {
        if (e.success) {
            var json = JSON.parse(e.result);
            getPost(json.paging.previous);
        } else e.error ? alert(e.error) : alert("Unknown response");
    });
    getTweet();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
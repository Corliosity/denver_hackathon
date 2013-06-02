function Controller() {
    function populate() {
        var results = test.myInfo();
        $.sym.text = results[0].name;
        $.sym2.text = results[1].name;
        $.sym3.text = results[2].name;
        for (var i = 0; results.length > i; i++) getCond(results[i].id);
    }
    function getCond(sym) {
        var url = "http://hack4colorado.itriagehealth.com/api/v1/";
        url += "symptoms/" + sym + "/conditions.json?content=lite";
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("There was an error in retrieving the data, please try again shortly");
        };
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            for (var i in json.conditions) {
                var myArgs = {
                    condition: json.conditions[i].name,
                    con_id: json.conditions[i].id,
                    symp: sym
                };
                myArray.push(myArgs);
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
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#60B2FF",
        navBarHidden: false,
        id: "win2",
        title: "Your Health Chart"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.you = Ti.UI.createImageView({
        left: "5dp",
        top: "5dp",
        id: "you",
        image: "/photo.jpg"
    });
    $.__views.win2.add($.__views.you);
    $.__views.nam = Ti.UI.createLabel({
        right: "10dp",
        top: "5dp",
        text: "Andrew Corliss",
        id: "nam"
    });
    $.__views.win2.add($.__views.nam);
    $.__views.ov = Ti.UI.createLabel({
        right: "10dp",
        top: "20dp",
        text: "Overall Health: 90%",
        id: "ov"
    });
    $.__views.win2.add($.__views.ov);
    $.__views.current = Ti.UI.createLabel({
        top: "40dp",
        right: "10dp",
        text: "Your Current Information",
        id: "current"
    });
    $.__views.win2.add($.__views.current);
    $.__views.we = Ti.UI.createLabel({
        top: "60dp",
        right: "10dp",
        text: "Weight: 165 lbs.",
        id: "we"
    });
    $.__views.win2.add($.__views.we);
    $.__views.he = Ti.UI.createLabel({
        top: "80dp",
        right: "10dp",
        text: "Height: 5 foot 11 inches",
        id: "he"
    });
    $.__views.win2.add($.__views.he);
    $.__views.more = Ti.UI.createLabel({
        top: "100dp",
        right: "10dp",
        text: "More Information:",
        id: "more"
    });
    $.__views.win2.add($.__views.more);
    $.__views.act = Ti.UI.createLabel({
        left: "10dp",
        top: "150dp",
        text: "Your Current Symptoms:",
        id: "act"
    });
    $.__views.win2.add($.__views.act);
    $.__views.sym = Ti.UI.createLabel({
        left: "30dp",
        top: "175dp",
        id: "sym"
    });
    $.__views.win2.add($.__views.sym);
    $.__views.sym2 = Ti.UI.createLabel({
        left: "30dp",
        top: "195dp",
        id: "sym2"
    });
    $.__views.win2.add($.__views.sym2);
    $.__views.sym3 = Ti.UI.createLabel({
        left: "30dp",
        top: "215dp",
        id: "sym3"
    });
    $.__views.win2.add($.__views.sym3);
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Possible Conditions"
    });
    var __alloyId0 = [];
    __alloyId0.push($.__views.sectionFruit);
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        id: "__alloyId1"
    });
    $.__views.sectionFruit.add($.__views.__alloyId1);
    $.__views.rowView = Ti.UI.createView({
        layout: "vertical",
        height: "65dp",
        id: "rowView"
    });
    $.__views.__alloyId1.add($.__views.rowView);
    $.__views.title = Ti.UI.createLabel({
        left: "2dp",
        font: {
            fontWeight: "bold",
            fontSize: "20px"
        },
        text: "Anxiety",
        id: "title"
    });
    $.__views.rowView.add($.__views.title);
    $.__views.subTitle = Ti.UI.createLabel({
        left: "30dp",
        text: "Not Serious or Life Threatening",
        id: "subTitle"
    });
    $.__views.rowView.add($.__views.subTitle);
    $.__views.table = Ti.UI.createTableView({
        top: "275dp",
        data: __alloyId0,
        id: "table"
    });
    $.__views.win2.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var service = require("/dBase");
    var test = new service();
    Ti.App.addEventListener("Database_Update", populate);
    populate();
    var myArray = [];
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    function getBody() {
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("There was an error in retrieving the data, please try again shortly");
        };
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            json.symptoms;
            for (var i in json.symptoms) {
                var args = {
                    title: json.symptoms[i].name,
                    id: json.symptoms[i].id
                };
                var row = Alloy.createController("sickRow", args).getView();
                dataArray.push(row);
            }
            $.table.setData(dataArray);
        };
        xhr.open("GET", url);
        xhr.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.sick = Ti.UI.createWindow({
        backgroundColor: "#60B2FF",
        navBarHidden: false,
        id: "sick",
        title: "Symptoms"
    });
    $.__views.sick && $.addTopLevelView($.__views.sick);
    $.__views.search = Ti.UI.createSearchBar({
        top: 0,
        filterAttribute: "title",
        id: "search"
    });
    $.__views.__alloyId11 = Alloy.createController("sickRow", {
        id: "__alloyId11"
    });
    var __alloyId12 = [];
    __alloyId12.push($.__views.__alloyId11.getViewEx({
        recurse: true
    }));
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId12,
        search: $.__views.search,
        id: "table"
    });
    $.__views.sick.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.table.addEventListener("click", function(e) {
        Ti.API.info(e.row.sub);
        var service = require("/dBase");
        var test = new service();
        test.add(e.row.sub, e.row.myId);
        e.row.setBackgroundColor("yellow");
    });
    var dataArray = [];
    var url = "http://hack4colorado.itriagehealth.com/api/v1/symptoms?per_page=100";
    getBody();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
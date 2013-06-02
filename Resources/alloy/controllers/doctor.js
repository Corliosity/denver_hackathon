function Controller() {
    function getList() {
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("There was an error in retrieving the data, please try again shortly");
        };
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            for (var i = 0; json.length > i; i++) {
                var args = {
                    id: json[i].practice,
                    title: json[i].name,
                    phone: json[i].phone,
                    img: json[i].img,
                    email: json[i].email
                };
                var row = Alloy.createController("tableRow", args).getView();
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
    $.__views.doctor = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: false,
        id: "doctor",
        title: "Find Doctors"
    });
    $.__views.doctor && $.addTopLevelView($.__views.doctor);
    $.__views.search = Ti.UI.createSearchBar({
        filterAttribute: "title",
        id: "search"
    });
    $.__views.__alloyId2 = Alloy.createController("tableRow", {
        id: "__alloyId2"
    });
    var __alloyId3 = [];
    __alloyId3.push($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.table = Ti.UI.createTableView({
        top: 0,
        data: __alloyId3,
        search: $.__views.search,
        id: "table"
    });
    $.__views.doctor.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.table.addEventListener("click", function(e) {
        var args = {
            title: e.rowData.myId,
            subtitle: e.rowData.sub,
            phone: e.rowData.ph,
            email: e.rowData.email,
            img: e.rowData.img
        };
        var rowDetail = Alloy.createController("Detail", args).getView();
        Alloy.Globals.tabGroup.activeTab.open(rowDetail);
    });
    var dataArray = [];
    var url = "http://localhost:8888/doctors.php";
    getList();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
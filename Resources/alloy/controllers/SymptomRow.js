function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row",
        dataId: "",
        model: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id")
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId13 = Ti.UI.createView({
        id: "__alloyId13"
    });
    $.__views.row.add($.__views.__alloyId13);
    $.__views.name = Ti.UI.createLabel({
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.__alloyId13.add($.__views.name);
    $.__views.address = Ti.UI.createLabel({
        id: "address",
        text: "undefined" != typeof $model.__transform["id"] ? $model.__transform["id"] : $model.get("id")
    });
    $.__views.__alloyId13.add($.__views.address);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
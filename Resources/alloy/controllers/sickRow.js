function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.rowView = Ti.UI.createView({
        layout: "vertical",
        height: "50dp",
        id: "rowView"
    });
    $.__views.row.add($.__views.rowView);
    $.__views.title = Ti.UI.createLabel({
        left: "10dp",
        font: {
            fontWeight: "bold",
            fontSize: "20px"
        },
        id: "title"
    });
    $.__views.rowView.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title;
    $.row.myId = $.title.text;
    $.row.sub = args.id;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
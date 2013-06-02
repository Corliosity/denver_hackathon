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
        height: "65dp",
        id: "rowView"
    });
    $.__views.row.add($.__views.rowView);
    $.__views.title = Ti.UI.createLabel({
        left: "2dp",
        font: {
            fontWeight: "bold"
        },
        id: "title"
    });
    $.__views.rowView.add($.__views.title);
    $.__views.subTitle = Ti.UI.createLabel({
        left: "30dp",
        id: "subTitle"
    });
    $.__views.rowView.add($.__views.subTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title;
    $.subTitle.text = args.id;
    $.row.myId = $.title.text;
    $.row.sub = args.id;
    $.row.ph = args.phone;
    $.row.img = args.img;
    $.row.email = args.email;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
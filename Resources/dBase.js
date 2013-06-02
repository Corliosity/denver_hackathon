function dBase() {
    this.db = Ti.Database.open("cause");
    this.db.execute("CREATE TABLE IF NOT EXISTS symptom(id INTEGER PRIMARY KEY, name TEXT);");
    this.db.close();
}

dBase.prototype.add = function(_id, _name) {
    this.db = Ti.Database.open("cause");
    this.db.execute("INSERT INTO symptom(id, name) VALUES(?,?)", _id, _name);
    Ti.API.info("Updating your Profile please hold");
    this.db.execute('SELECT name FROM symptom WHERE name != "null" LIMIT 1');
    this.db.close();
    Ti.App.fireEvent("Database_Update");
};

dBase.prototype.myInfo = function() {
    this.db = Ti.Database.open("cause");
    var results = [];
    var result = this.db.execute("SELECT * FROM symptom");
    while (result.isValidRow()) {
        results.push({
            id: result.fieldByName("id"),
            name: result.fieldByName("name"),
            color: "black"
        });
        result.next();
    }
    result.close();
    this.db.close();
    return results;
};

dBase.prototype.dropDBTable = function() {
    this.db = Ti.Database.open("cause");
    this.db.execute("DROP TABLE IF EXISTS symptom");
    this.db.close();
    Ti.API.info("table dropped");
};

module.exports = dBase;
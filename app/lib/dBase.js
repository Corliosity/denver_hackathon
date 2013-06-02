/**
 * @author Andrew Corliss
 */
function dBase()
{
	this.db = Ti.Database.open('cause');
	
	this.db.execute('CREATE TABLE IF NOT EXISTS symptom(id INTEGER PRIMARY KEY, name TEXT);');
	this.db.close();
};

dBase.prototype.add = function(_id, _name)
{
	this.db = Ti.Database.open('cause');
	
	this.db.execute("INSERT INTO symptom(id, name) VALUES(?,?)", _id, _name);
	
	alert('Updating your Profile please hold');
	var result = this.db.execute('SELECT name FROM symptom WHERE name != "null" LIMIT 1');
	//Ti.API.info("result " + result);
	
	this.db.close();
	
	Ti.App.fireEvent("Database_Update");
	
};

dBase.prototype.myInfo = function()
{
	this.db = Ti.Database.open('cause');
	
	var results = [];
	
	var result = this.db.execute('SELECT * FROM symptom');
	
	//Ti.API.info("calling data please hold " + result);
	
	while (result.isValidRow()) {
		results.push({
			//add these attributes for the benefit of a table view
			id: result.fieldByName('id'),
			name: result.fieldByName('name'),
			//last_name: result.fieldByName('l_name'),
			//id: result.fieldByName('id'),
			//my_ssn: result.fieldByName('ssn'),
			//my_member: result.fieldByName('member'),
			//my_code: result.fieldByName('barcode'),
			color: 'black'
		});
		//Ti.API.info('name is ' + result.fieldByName('name') + ' , amenity is ' + result.fieldByName('amenity') +  ', longitude' + result.fieldByName('capturedLong'));
		result.next();
	};
	result.close();
	//Ti.API.info(results);
	this.db.close();
	return results;
	//Ti.API.info(results);
}

dBase.prototype.dropDBTable = function(){
	this.db = Ti.Database.open('cause');
	this.db.execute("DROP TABLE IF EXISTS symptom");
	//db.execute("UPDATE fugitives SET captured = 1, capturedLat = ?, capturedLong = ? WHERE id = ?",_lat,_lng,_id);
	this.db.close();
	Ti.API.info('table dropped')
	//Dispatch a message to let others know the database has been update
}

module.exports = dBase;
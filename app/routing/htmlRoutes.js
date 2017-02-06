var path = require("path");

////////////         ROUTES        ////////////////////

module.exports = function(app){
	app.get("/tables", function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/tables.html"));
	});

	app.get("/reserve", function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/reserve.html"));
	});
	// if you are using the app and URL IS NOT DEFINED, send to homepage
	app.use( function(req, res){
		res.sendFile(path.join(__dirname+"/../public/index.html"));
	});
};

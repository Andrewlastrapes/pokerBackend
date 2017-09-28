var to_json = require('xmljson').to_json;

var xml = "" + "<Data>" + "<Leagues>" + '<league IdLeague="1" IdSport="NFL" Description="NFL">' +
'<banner ab="True" vtm="NFL - Sep 28" htm=""/>' + '<game idgm="2570336" gdesc="" idgmtyp="79" gmdt="20170928" idlg="1" gmtm="17:25:00" idspt="NFL" vpt="" hpt="" vnum="101" hnum="102" evtyp="" idgp="2570336" gpd="Game" vtm="Chicago Bears" htm="Green Bay Packers" stats="false" propCount="0" descgmtyp="10k-3k-3k USD">'+ '<line voddst="281" hoddst="-350" ovt="-45.5" ovoddst="-110" unt="45.5" unoddst="-110" vsprdt="7" vsprdoddst="-110" hsprdt="-7" hsprdoddst="-110" vspt="" vspoddst="" hspt="" hspoddst="" voddsh="+281" hoddsh="-350" vsprdh="+7-110" hsprdh="-7-110" ovh="o45&frac12;-110" unh="u45&frac12;-110" vsph="" hsph="" voddshr="0" vsprdhr="0" ovhr="0" vsphr="0" vsproddsnr="" hsproddsnr="" ovoddsnr="" unoddsnr="" voddsnr="" hoddsnr="" vspoddsnr="" hspoddsnr="" voddsnrh="" hoddsnrh="" vsprdnrh="" hsprdnrh="" ovnrh="" unnrh="" vspnrh="" hspnrh="" btot="False" bsprd="False" bml="False" haschild="True" related="True" EmptyGame="False"/>'+ '</game>' + '</Leagues>'




to_json(xml, function(error, data){
	console.log(JSON.stringify(data))
});


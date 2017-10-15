
$.ajax({
	url: "/nba",
	method: "GET",
	headers:  {
		"JsonOdds-API-Key": "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"
		}
	
}).done(function(NBA){


	

	for (var i = 0; i < NBA.length; i++){

		$(".Games").append(NBA[i].AwayTeam + " @ " + NBA[i].HomeTeam + "<br>")
		$(".Games").append(NBA[i].HomeTeam + ": " + NBA[i].Odds[0].PointSpreadHome + "<br>")
		$(".Games").append(NBA[i].AwayTeam + ": " + NBA[i].Odds[0].PointSpreadAway + "<br>")
		$(".Games").append(NBA[i].HomeTeam + " Money Line: " + NBA[i].Odds[0].MoneyLineHome+ "<br>")
		$(".Games").append(NBA[i].AwayTeam + " Money Line: " +NBA[i].Odds[0].MoneyLineAway+ "<br>" + "<br>" + "<br>" + "<br>")


	

}
})


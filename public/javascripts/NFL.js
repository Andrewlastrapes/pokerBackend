
$.ajax({
	url: "/nfl",
	method: "GET",
	headers:  {
		"JsonOdds-API-Key": "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"
		}
	
}).done(function(NFL){


	

	for (var i = 0; i < NFL.length; i++){

		$(".Games").append(NFL[i].AwayTeam + " @ " + NFL[i].HomeTeam + "<br>")
		$(".Games").append(NFL[i].HomeTeam + ": " + NFL[i].Odds[0].PointSpreadHome + "<br>")
		$(".Games").append(NFL[i].AwayTeam + ": " + NFL[i].Odds[0].PointSpreadAway + "<br>")
		$(".Games").append("Over/Under: " + NFL[i].Odds[0].TotalNumber + "<br>")
		$(".Games").append(NFL[i].HomeTeam + " Money Line: " + NFL[i].Odds[0].MoneyLineHome+ "<br>")
		$(".Games").append(NFL[i].AwayTeam + " Money Line: " +NFL[i].Odds[0].MoneyLineAway+ "<br>" + "<br>" + "<br>" + "<br>")


	

}
})



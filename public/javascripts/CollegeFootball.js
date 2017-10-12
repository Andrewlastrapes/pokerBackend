
$.ajax({
	url: "/CollegeFootball",
	method: "GET",
	headers:  {
		"JsonOdds-API-Key": "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"
		}
	
}).done(function(CollegeFootball){
	for (var i = 0; i < CollegeFootball.length; i++){

		$(".Games").append(CollegeFootball[i].AwayTeam + " @ " + CollegeFootball[i].HomeTeam + "<br>")
		$(".Games").append(CollegeFootball[i].HomeTeam + ": " + CollegeFootball[i].Odds[0].PointSpreadHome + "<br>")
		$(".Games").append(CollegeFootball[i].AwayTeam + ": " + CollegeFootball[i].Odds[0].PointSpreadAway + "<br>")
		$(".Games").append("Over/Under: " + CollegeFootball[i].Odds[0].TotalNumber + "<br>")
		$(".Games").append(CollegeFootball[i].HomeTeam + " Money Line: " + CollegeFootball[i].Odds[0].MoneyLineHome+ "<br>")
		$(".Games").append(CollegeFootball[i].AwayTeam + " Money Line: " +CollegeFootball[i].Odds[0].MoneyLineAway+ "<br>" + "<br>" + "<br>" + "<br>")

	// $(".Matchup" + i).append(CollegeFootball[i].AwayTeam + " @ " + CollegeFootball[i].HomeTeam)
	// $(".SpreadHome" + i).append(CollegeFootball[i].HomeTeam + ": " + CollegeFootball[i].Odds[0].PointSpreadHome)
	// $(".SpreadAway" + i).append(CollegeFootball[i].AwayTeam + ": " + CollegeFootball[i].Odds[0].PointSpreadAway)
	// $(".OverUnder" + i).append("Over/Under: " + CollegeFootball[i].Odds[0].TotalNumber)
	// $(".MoneyLineHome" + i).append(CollegeFootball[i].HomeTeam + " Money Line: " + CollegeFootball[i].Odds[0].MoneyLineHome)
	// $(".MoneyLineAway" + i).append(CollegeFootball[i].AwayTeam + " Money Line: " +CollegeFootball[i].Odds[0].MoneyLineAway)


}
})



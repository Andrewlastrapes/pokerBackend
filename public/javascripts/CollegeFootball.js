
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
		$(".Games").append(CollegeFootball[i].AwayTeam + " Money Line: " +CollegeFootball[i].Odds[0].MoneyLineAway+ "<br>")

		$(".Games").append(
			$('<input>', {
				type: 'text',
				val: $('.Games' + i).text()
			})
			);
		$(".Games").append(
			$('<input>', {
				type: "submit"
			}))
		$(".Games").append("<br>" + "<br>" + "<br>" + "<br>")

}
})



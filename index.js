$(document).ready(() => {

	$("#searchBtn").click(() => {
		let id = $("#imdId").val();
		let title = $("#title-id").val();
		let year = $("#year-id").val();
		if(id.length == 0 && title.length == 0){
			param = 'y='+year;
		}
		else if(id.length == 0 && year.length == 0){
			param = 't='+title;
		}
		else {
			param = 'i='+id;
		}
		getAllData(param);
	})

	$("#resetBtnId").click(() => {
		$("#row-id").find("input").val("");
	})
});

let getAllData = (param) => {

	$.ajax({
		type : 'GET',
		dataType : 'json',
		async : true,
		url : 'https://www.omdbapi.com/?apikey=f3f44962&'+param,
		success : (response) => {	
			if(response.length == 0){
				alert("data not found");
			}
			else if(response.Response == "False") {
				alert(response.Error);
			}
			else{		
				$("#card-id").text(response.Title);
				if(response.Poster == "N/A"){
					$("#title-img").attr('src',"dummyImg.jpeg");
				}
				else{
					$("#title-img").attr('src',response.Poster);
				}
				$("#card-id-text").text("Writer :"+response.Writer);
				$("#year").text(response.Year);
				$("#duration").text(response.Runtime);
				$("#released").text(response.Released);
				$("#genre").text(response.Genre);
				$("#director").text(response.Director);
				$("#actors").text(response.Actors);
				$("#genre").text(response.Genre);
				$("#plot").text(response.Plot);
				$("#language").text(response.Language);
				$("#country").text(response.Country);
				$("#awards").text(response.Awards);
				$("#ratings").text(response.Ratings[0].Value);
				$("#metascore").text(response.Metascore);
				$("#imdbrating").text(response.imdbRating);
				$("#imdbvotes").text(response.imdbVotes);
				$("#type").text(response.Type);
				$("#dvd").text(response.DVD);
				$("#boxoffice").text(response.BoxOffice);
				$("#production").text(response.Production);
				$("#website").text(response.Website);
				$("#website").attr('href',response.Website);
			}
		},
		error: (err) => {
            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
	});
}

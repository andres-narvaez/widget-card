//data
var persona = {
	"perfil": [
		{"firstname": "Andrés", "lastname": "Narváez", "occupation": "Web Designer and Frontend", "views": 245, "comment": 398, "likes": 499},
		{"firstname": "Felipe", "lastname": "Gómez", "occupation": "Multimedia Designer"}
	]
};


//inject data
document.getElementById('name').innerHTML = persona.perfil[0].firstname + " " + persona.perfil[0].lastname;
document.getElementById('occupation').innerHTML = persona.perfil[0].occupation;
document.getElementById('views').innerHTML = persona.perfil[0].views;
document.getElementById('comment').innerHTML = persona.perfil[0].comment;
document.getElementById('likes').innerHTML = persona.perfil[0].likes;


// counter likes
var likecounter = persona.perfil[0].likes + 1;

$(".it-likes").click( function (){
	$("#likes").empty();
	$("#likes").append(likecounter);
}); 	

// Trigger form comments
$(document).ready(function(){
    $('.modal-trigger').leanModal();
  });
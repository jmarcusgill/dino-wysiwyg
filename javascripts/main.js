$.ajax('./db/dinosaurs.json').done(function(data) {
  var dinoArray = data.dinosaurs;
  makeDom(dinoArray);
}).fail(function(error) {
  console.log("you suck at this", error);
});

function makeDom(myArrayToPrint) { //parameter that takes in any type of array (dinoArray, musicArray, foodArray)
  var myDomString = "";
  for (var i = 0; i < myArrayToPrint.length; i++) {
    if (i%3 === 0) {
      myDomString += `<div class="row">`;
    }
    myDomString += `<div class="col-sm-6 col-md-4 dinoCard">`;
    myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
    myDomString += `<section>`;
    myDomString += `<img src="${myArrayToPrint[i].img}">`;
    myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p>`;
    myDomString += `</section>`;
    myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;
    myDomString += `</div>`;
    if (i%3 === 2) {
      myDomString += `</div>`;
  }
}
  $("#dinosaurs").append(myDomString);
}

$("#dinosaurs").on("click", ".dinoCard", function(e) {  //1. event 2. where you want to bubble up to 3. function
  $(".dinoCard").removeClass("dottedBorder"); //removes border class from all dinoCards
  $(this).addClass("dottedBorder"); //adds border class to dinoCards
  $("#textbox").val("").focus(); //clears input text and focuses when clicked
});

$("#textbox").keyup(mirrorText);

function mirrorText(e) {
  var selectedCard = $(".dottedBorder");
  var bioTyped = $("#textbox").val();
  var bio = $(".dottedBorder").find("p.bio"); //.find() looks through all the children and returns what's in ()
  bio.html(bioTyped);

  if (e.keyCode === 13) {
    $("#textbox").val("");
  }
}


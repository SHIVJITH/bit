function load_img() { 
    var start=document.getElementById("dropstart").value;
    var end=document.getElementById("dropend").value;
    var file;

    if(start == "select" || end == "select" || start == end){
      file ="original with block"
      window.alert("Please select Valid Start and Destination")
    }
    else if(start=="main_gate"&& end == "boys_hostel" || end=="main_gate"&& start == "boys_hostel" ){
      file = "main_gate"+"boys_hostel";
    }
    else if(start=="main_gate"&& end == "girls_hostel" || end=="main_gate"&& start == "girls_hostel" ){
      file = "main_gate"+"girls_hostel";
    }
    else if(start=="boys_hostel"&& end == "girls_hostel" || end=="boys_hostel"&& start == "girls_hostel"){
      file = "girls_hostel"+"boys_hostel";
    }
    else{
      file ="original with block"
    }

    //var orinal_img=document.getElementById("map");
    mapSprite.src='img/'+file+'.png';
    load_route()
    
}

const direction={
  one:{icon:"forward", text:"Walk Stright 200Mtrs from gate", isDone :false},
  two:{icon:"left", text:"Take Left after Mechanical Block", isDone :false},
  three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
  four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
}
const mListElement = document.querySelector("#myUL");
const mapprdistance = document.querySelector("#distance");
  function load_route() {
    
      mListElement.innerHTML = "";
    mapprdistance.innerHTML ="";
    for(let val in direction){
      console.log(direction[val]);
      const listElement = document.createElement("li");

      listElement.innerHTML = direction[val].text;

      mListElement.appendChild(listElement);
    }
    mapprdistance.innerHTML = "Approximate Distance :" +" " + "400 Mtrs";
  }







var canvas = document.getElementById('Canvas');
var context = canvas.getContext("2d");

// Map sprite
var mapSprite = new Image();
mapSprite.src = "img/original with block.png";

var Marker = function () {
    this.Sprite = new Image();
    this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png"
    this.Width = 12;
    this.Height = 20;
    this.XPos = 0;
    this.YPos = 0;
}

var Markers = new Array();

var mouseClicked = function (mouse) {
    // Get corrent mouse coords
    var rect = canvas.getBoundingClientRect();
    var mouseXPos = (mouse.x - rect.left);
    var mouseYPos = (mouse.y - rect.top);

    console.log("Marker added");

    // Move the marker when placed to a better location
    var marker = new Marker();
    marker.XPos = mouseXPos - (marker.Width / 2);
    marker.YPos = mouseYPos - marker.Height;

    Markers.push(marker);
}

// Add mouse click event listener to canvas
canvas.addEventListener("mousedown", mouseClicked, false);

var firstLoad = function () {
    context.font = "15px Georgia";
    context.textAlign = "center";
}

firstLoad();

var main = function () {
    draw();
};

var draw = function () {
    // Clear Canvas
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw map
    // Sprite, X location, Y location, Image width, Image height
    // You can leave the image height and width off, if you do it will draw the image at default size
    context.drawImage(mapSprite, 0, 0, 700, 700);

    // Draw markers
    for (var i = 0; i < Markers.length; i++) {
        var tempMarker = Markers[i];
        // Draw marker
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

        // Calculate postion text
        var markerText = "Postion (X:" + tempMarker.XPos + ", Y:" + tempMarker.YPos;

        // Draw a simple box so you can see the position
        var textMeasurements = context.measureText(markerText);
        context.fillStyle = "#666";
        context.globalAlpha = 0.7;
        context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
        context.globalAlpha = 1;

        // Draw position above
        context.fillStyle = "#000";
        context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
    }
};

setInterval(main, (1000 / 60)); // Refresh 60 times a second
function load_img() { 
    var start=document.getElementById("dropstart").value;
    var end=document.getElementById("dropend").value;
    var file=start+end;
    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png';
    load_route()
    
}
function zoomin() { 
  var GFG = document.getElementById("map"); 
  var currHeight = GFG.clientHeight; 
    GFG.style.height = (currHeight + 40) + "px"; 
} 
function zoomout() { 
  var GFG = document.getElementById("map"); 
  var currHeight = GFG.clientHeight; 
    GFG.style.height = (currHeight - 40) + "px"; 
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
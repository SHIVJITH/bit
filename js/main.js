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

    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png';
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
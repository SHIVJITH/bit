function load_img() { 
    var start=document.getElementById("dropstart").value;
    var end=document.getElementById("dropend").value;
    var file=start+end;
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
    if(mListElement != null){
      mListElement.innerHTML = "";
    }
    for(let val in direction){
      console.log(direction[val]);
      const listElement = document.createElement("li");

      listElement.innerHTML = direction[val].text;

      mListElement.appendChild(listElement);
    }
    mapprdistance.innerHTML = mapprdistance.innerHTML +" " + "400 Mtrs";
  }
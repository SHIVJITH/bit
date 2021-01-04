function load_img() { 

    var file=document.getElementById("drop").value;

    if (file=="select"){
      file ="original with block"
      window.alert("Please select Valid Start and Destination")
    }

    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png';
    
    load_route(file)
    
}

// const direction={
//   one:{icon:"forward", text:"Walk Stright 200Mtrs from gate", isDone :false},
//   two:{icon:"left", text:"Take Left after Mechanical Block", isDone :false},
//   three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
//   four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
// }

// const direction={
//   one:{icon:"forward", text:"Walk Stright 200Mtrs from gate", isDone :false},
//   two:{icon:"left", text:"Take Left after Mechanical Block", isDone :false},
//   three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
//   four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
// }

const mListElement = document.querySelector("#myUL");
const mapprdistance = document.querySelector("#distance");

  function load_route(file_ck) {
    console.log(file_ck)
     
    // Edit the instruction here
     if(file_ck=='main_gate_to_boys_hostel'){
      var direction={
            one:{icon:"forward", text:"Walk Stright 200Mtrs from gate", isDone :false},
            two:{icon:"left", text:"Take Left after Mechanical Block", isDone :false},
            three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
            four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
          }
      var Est_distance=100
  
    }
    else if(file_ck=='main_gate_to_girls_hostel' ){
      var direction={
        one:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
        two:{icon:"left", text:"main_gate_to_girls_hostel", isDone :false},
        three:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
        four:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
        five:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
        six:{icon:"left", text:"main_gate_to_girls_hostel", isDone :false},
        seven:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
        eight:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
        nine:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false}
      }
      var Est_distance=200
    }

    else if(file_ck== 'main_gate_to_parking'){
      var direction={
        one:{icon:"forward", text:"main_gate_to_parking", isDone :false},
        two:{icon:"left", text:"main_gate_to_parking", isDone :false},
        three:{icon:"forward", text:"main_gate_to_parking", isDone :false},
        four:{icon:"right", text:"main_gate_to_parking", isDone :false}
      }
      var Est_distance=300
    }

    else if(file_ck=='main_gate_to_principal_office' ){
      var direction={
        one:{icon:"forward", text:"main_gate_to_principal_office", isDone :false},
        two:{icon:"left", text:"main_gate_to_principal_office", isDone :false},
        three:{icon:"forward", text:"main_gate_to_principal_office", isDone :false},
        four:{icon:"right", text:"main_gate_to_principal_office", isDone :false}
      }
      var Est_distance=400
    }

    else if (file_ck=='parking_to_principal_office'){
      var direction={
        one:{icon:"forward", text:"parking_to_principal_office", isDone :false},
        two:{icon:"left", text:"parking_to_principal_office", isDone :false},
        three:{icon:"forward", text:"parking_to_principal_office", isDone :false},
        four:{icon:"right", text:"parking_to_principal_office", isDone :false}
      }
      var Est_distance=500
    }
    
      mListElement.innerHTML = "";
    mapprdistance.innerHTML ="";
    for(let val in direction){
      console.log(direction[val]);
      var listElement = document.createElement("li");

      listElement.innerHTML = direction[val].text;

      mListElement.appendChild(listElement);
      

    }
    mapprdistance.innerHTML = "Approximate Distance :" +" " + Est_distance;
  }
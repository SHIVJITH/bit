function load_img() { 
    var file=document.getElementById("drop").value;
    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png'; 
    load_route(file)  
}
const mListElement = document.querySelector("#myUL");
const mapprdistance = document.querySelector("#distance");

  function load_route(file_ck) {
    console.log(file_ck)
     
      // Edit the instruction here
      if(file_ck=='main_gate_to_boys_hostel'){
        var direction={
              one:{id:"1",icon:"forward", text:"Walk Stright 175Mtrs from gate  ", isDone :false},
              two:{id:"2",icon:"left", text:"Take the sixth left  ", isDone :false},
              // three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
              // four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
            }
        var Est_distance='200 Mtrs'
    
      }
      else if(file_ck=='main_gate_to_girls_hostel' ){
        var direction={
          one:{id:"1",icon:"forward", text:"Walk Stright 150Mtrs from gate  ", isDone :false},
          two:{id:"2",icon:"right", text:"Take the third right  ", isDone :false},
          // three:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
          // four:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
          // five:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
          // six:{icon:"left", text:"main_gate_to_girls_hostel", isDone :false},
          // seven:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
          // eight:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
          // nine:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false}
        }
        var Est_distance='250 Mtrs'
      }
  
      else if(file_ck== 'main_gate_to_parking'){
        var direction={
          one:{id:"1",icon:"forward", text:"Walk Stright 150Mtrs from gate  ", isDone :false},
          two:{id:"2",icon:"left", text:"Take the second left ", isDone :false},
          // three:{icon:"forward", text:"main_gate_to_parking", isDone :false},
          // four:{icon:"right", text:"main_gate_to_parking", isDone :false}
        }
        var Est_distance='50 Mtrs'
      }
  
      else if(file_ck=='main_gate_to_principal_office' ){
        var direction={
          one:{id:"1",icon:"forward", text:"Walk Stright 70Mtrs from gate ", isDone :false},
          two:{id:"2",icon:"left", text:"Take the third left  ", isDone :false},
          // three:{icon:"forward", text:"main_gate_to_principal_office", isDone :false},
          // four:{icon:"right", text:"main_gate_to_principal_office", isDone :false}
        }
        var Est_distance='75 Mtrs'
      }
  
      else if (file_ck=='parking_to_principal_office'){
        var direction={
          one:{id:"1",icon:"forward", text:"Take a left and wallk Stright 20Mtrs from gate  ", isDone :false},
          two:{id:"2",icon:"left", text:"Take the first left  ", isDone :false},
          // three:{icon:"forward", text:"parking_to_principal_office", isDone :false},
          // four:{icon:"right", text:"parking_to_principal_office", isDone :false}
        }
        var Est_distance='25 Mtrs'
      }
      
      mListElement.innerHTML = "";
      mapprdistance.innerHTML ="";
      for(let val in direction){
        console.log(direction[val]);
        var listElement = document.createElement("li");
        var id_name="list"+direction[val].id
        console.log(id_name)
        listElement.setAttribute("id", id_name );
        var pass_para="load_icon("+direction[val].id+")"
        listElement.setAttribute("onclick", pass_para);
        listElement.innerHTML = direction[val].text;
        mListElement.appendChild(listElement);
      }
      mapprdistance.innerHTML = "Approximate Distance :" +" " + Est_distance;
    }
  
  
    function load_icon(list_id){
      console.log(list_id)
      var icon=document.createElement("i");
      icon.setAttribute("class", "fas fa-check-circle");
      icon.style.fontSize="35px";
      icon.style.color="green";
      icon.style.padding = "0px 0px 0px 20px"
      list_id="list"+list_id
      document.getElementById(list_id).appendChild(icon);
    }
const direction={
    one:{icon:"forward", text:"Walk Stright 200Mtrs from gate", isDone :false},
    two:{icon:"left", text:"Take Left after Mechanical Block", isDone :false},
    three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
    four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
}

for(let val in direction){
        console.log(direction[val]);
}
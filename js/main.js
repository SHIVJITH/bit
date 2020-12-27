function load_img() { 
    var start=document.getElementById("dropstart").value;
    var end=document.getElementById("dropend").value;
    var file=start+end;
    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png'
    }

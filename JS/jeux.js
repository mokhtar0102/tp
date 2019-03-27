var d = Math.floor(Math.random() * 100) ;
var i=0;

var nb = prompt("entrer");
var b=true;
while ((i<8 ) && (b=true)){


if (nb>d)  {
    console.log("le nb inferieur de "+nb);
    nb = prompt("entrer le nb , il vous reste "+(8-i)+" tentative ");
}
else if (nb<d){
    console.log("le nb superieur de "+nb);
    nb = prompt("entrer le nb , il vous reste "+(8-i)+" tentative ");
    }
else if (nb=d){
        console.log("mabrouuk rbe7t,le nombre est "+d);

        b=false;
        

    }
    

    

    i++
}    
if (b=true){
    console.log("dzl khsert el nb ="+d);
}


 
            function myfun()
            {
            var name=$("#no").val();
            var gensel;
            if ($('#gen1').checked) {
 gense1 = $('#gen1').val();
 

} else if(document.getElementById('gen2').checked){
        gense1 = document.getElementById('gen2').value;    
} else if(document.getElementById('gen3').checked){
        gense1 = document.getElementById('gen3').value;    
} else if(document.getElementById('gen4').checked){
        gense1 = document.getElementById('gen4').value;    
}

var doc = document.getElementById("course1");
var grd1= doc.options[doc.selectedIndex].text;
var doc1 = document.getElementById("course2");
var grd2=doc1.options[doc1.selectedIndex].text;
var doc2 = document.getElementById("course3");
var grd3=doc2.options[doc2.selectedIndex].text;
var rd;
rd=myfun2(grd1, grd2, grd3);
if(rd=="Student failed"){
    document.getElementById("siri").innerHTML= "For the "+gense1+" Student "+name+" is failed";     
}else{
document.getElementById("siri").innerHTML="For the "+gense1+" GPA for "+name+" is "+rd;}

/*if(grd1!="A"&&grd1!="B"&&grd1!="C"&&grd1!="D"&&grd1!="F"){
        alert("please enter the course1 val()");
}
if(grd2!="A"&&grd2!="B"&&grd2!="C"&&grd2!="D"&&grd2!="F"){
        alert("please enter the course2 val()");
}
if(grd3!="A"&&grd3!="B"&&grd3!="C"&&grd3!="D"&&grd3!="F"){
        alert("please enter the course3 val()");
}*/
            }
function myfun2(grd1, grd2, grd3){
    var rd1;
    var rd2;
    var rd3;
    var rd0
if(grd1=="F"||grd2=="F"||grd3=="F"){
   rd0= "Student Failed";     
}else{
if(grd1=="A"){
rd1=4;
}else if (grd1=="B"){
        rd1=3;
} else if (grd1=="C"){
        rd1=2;
}  else if (grd1=="D"){
        rd1=1;
}
if(grd2=="A"){
rd2=4;
}else if (grd2=="B"){
        rd2=3;
} else if (grd2=="C"){
        rd2=2;
}  else if (grd2=="D"){
        rd2=1;
}
if(grd3=="A"){
rd3=4;
}else if (grd3=="B"){
        rd3=3;
} else if (grd3=="C"){
        rd3=2;
}  else if (grd3=="D"){
        rd3=1;
}
rd0=(rd1+rd2+rd3)/3;

}
return rd0;
}




         
var allP = [];
var allB = [];
var i = 0; 
function function1() {
    alert("are you sure you want to leave this page ");
}
function myFunction() {
    var para = document.createElement("P");
    var para2 = document.createElement("div");
    var para3 = document.createElement("button");
    var para4 = document.createElement("mySpan");
    var para5 = document.createElement("mySpan");
    para3.style.margin="33px"
    para5.setAttribute('class', "fa fa-plus-square-o 2x"); 
    para3.style.width = '10%' ;
    para3.style.height = '140px' ;
    para2.style.width = "42%";

    para.innerHTML = "This is a paragraph."+(++i);
    para.style.color = "red";
    para.style.fontSize = "xx-large";
    para2.style.border = "medium solid #0000FF";
    para3.appendChild(para5);
    para4.appendChild(para3);
    para.appendChild(para4);
    para2.appendChild(para);

    allP.push(para);
 
    allB.push(para3);

  
    document.getElementById("myDIV").appendChild(para2);
    allP[0].innerHTML = i;

    var nullpara = document.createElement("div");
    var nullpara1=document.createElement("P");
    nullpara.appendChild(nullpara1);
    document.getElementById("myDIV").appendChild(nullpara);

    
}
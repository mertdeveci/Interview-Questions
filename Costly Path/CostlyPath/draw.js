
function findPath(){ 
    let value=parseInt(document.getElementById("range").value);
    if(value===0){ // range değeri (row) 0 ise Skor ekranına sıfır yaz
        document.getElementById("num").textContent="0";
        return;
    }
    let biggestId=[];
    let biggestWay=[];
    let twoDimensionalArray =[];
    let binaryWay=[];
    createTwoDimensionalArray(twoDimensionalArray,value);
    createBinaryPathArray(binaryWay,value);
    findThePath(binaryWay,twoDimensionalArray,value,biggestId,biggestWay);
    drawPath(biggestId,value);
    
}

 function drawPath(biggestId){
     for(i=0;i<biggestId.length;i++){
        document.getElementById(biggestId[i]).style.backgroundColor="red";
     }
     nodes=document.querySelectorAll(".circle");
     for(i=0;i<nodes.length;i++){
        if(nodes[i].style.backgroundColor!="red"){
            nodes[i].style.opacity="0.5";
        }else{
            nodes[i].style.opacity="1";
        }
     }
 }

function findThePath(binaryWay,twoDimensionalArray,value,biggestId,biggestWay){
    biggest=0;
    let way=[];
    let id=[];
    for(i=0;i<binaryWay.length;i++){
        octet=binaryWay[i];
        way=[];
        id=[];
        x=0;
        y=0;
        toplam=0;
        for(j=0;j<value;j++){
            if(octet.charAt(j)==0){
                //console.log( twoDimensionalArray[x][y]);
                toplam+=parseInt(twoDimensionalArray[x][y]);
                way.push(twoDimensionalArray[x][y]);
                id.push(x+"x"+y);
                x++;
                
            }else{
                //console.log(twoDimensionalArray[x][y]);
                toplam+=parseInt(twoDimensionalArray[x][y]);
                way.push(twoDimensionalArray[x][y]);
                id.push(x+"x"+y);
                x++;
                y++;
            }
        }
       // console.log(" Toplam:"+id);
        if(toplam>=biggest){
             keepBiggestWay=[...way];
             keepBiggestId=[...id];
            biggest=toplam;
        }
    }
    document.getElementById("num").innerHTML=biggest;
    for(i=0;i<value;i++){
        biggestWay.push(keepBiggestWay[i]);
        biggestId.push(keepBiggestId[i]);
    }
   
}


function createTwoDimensionalArray(twoDimensionalArray,value){
    let oneDimensionalArray=[];
    for(i=0;i<document.querySelectorAll(".circle").length;i++){
        oneDimensionalArray[i]=document.querySelectorAll(".circle")[i].textContent;
    }

    k=0;
    for(i=0;i<value;i++){
        for(j=0;j<=i;j++){
            document.querySelectorAll(".circle")[k].id=i+"x"+j;
            k++;
        }
    }
   
    for (var i = 0; i < value; i++){
        for(var j=0;j<=i;j++){
             twoDimensionalArray[i] = new Array(j);
        }
    }

    k=0;
    for (var i = 0; i < value; i++){
        for(var j=0;j<=i;j++){
             twoDimensionalArray[i][j] = oneDimensionalArray[k];
             k++;
        }
    }
    // console.log(twoDimensionalArray);
    
}


function createBinaryPathArray(binaryArray,value){
    for(i=0;i<Math.pow(2,value-1);i++){
        binary=Number(i).toString(2);
        binary = binary.padStart(value-1,0);
        binaryArray[i]=binary;
    }
}

document.getElementById("range").addEventListener("input",manage);
// range değeri değişirse işlem yapılsın


let size=0; // row=0 , başlangıç değeri


function manage(){  // Oyun Yönetim/Kontrol Alanı
    refreshChild(); 
    let value=parseInt(document.getElementById("range").value);
    // range değerini al 0-10 arasında değer geliyor
    
    if(value<size){ // range değeri size'dan (şuan ki değerden) küçükse altta kalan rowları sil
        deleteChild(value);
        size=value;
    }else{          // range değeri size'dan (şuan ki değerden) büyükse yeni row'lar çiz
        addChild(value);
        size=value;
    }
    findPath();
}





function addChild(value){   // Girilen size değeri kadar row ekleme 
    while(size<=value){
        let row=createRow();
        for(i=0;i<size;i++){
            row.appendChild(createCircle());
        }
        size++;
    }
    document.querySelector("body").appendChild(row);
}

function deleteChild(value){    // Girilen size değeri kadar row silme 
    let element = document.querySelectorAll(".row");
    while(size>=value){
        element[element.length-1].remove();
        size--;
    }
}

function refreshChild(){        
    // Piramidin boyu arttığında veya azaldığında en uzun yol değişirse eski yol node'larını default hale getir
    let elements=document.querySelectorAll(".circle");
    for(i=0;i<elements.length;i++){
        elements[i].style.backgroundColor="#0E70FD";
    }
}

function createCircle(){
    // Node üretimi ve içeriğine random değerlerin atanması
    let circle = document.createElement("div");
    circle.classList.add("col","col-1", "m-1","circle");
    
    circle.textContent= Math.floor((Math.random() * 10) + 1);
    return circle;
}

function createRow(){
    // row üretimi (İçine node değerleri return yapıldığı yerde atanıyor)
    row=document.createElement("div");
    row.classList.add("row","justify-content-center","m-2");
    return row;
}


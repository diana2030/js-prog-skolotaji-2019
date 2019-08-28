function samazinat(){
    let i=document.getElementById("vertiba").value;
    if(i<2){
            alert("Samazināt var tikai vērtību kura ir lielāka par 1!");
        }
        else {i--;}
    
    document.getElementById("vertiba").value = i;
}
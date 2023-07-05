
//main container
const mainContainer = document.querySelector(".container");

//ciclo
for( let i = 1; i <= 100; i++){    
    console.log(i)
//creazione elemento virtuale
    let boxContainer = document.createElement("div");
    boxContainer.classList.add("box", "text-center", "border", "d-flex","justify-content-center", "align-items-center", "fw-semibold", "fs-5", "bg-primary");
    mainContainer.append(boxContainer);
//innerhtml box   
    boxContainer.innerHTML = (i);


// if con indentazione
    if(i % 3 ===0){
        if (i % 5 === 0){
            boxContainer.innerHTML = ("Fizz Buzz");
            boxContainer.classList.add("bg-danger") 
        } else {
            boxContainer.innerHTML = ("Fizz");
            boxContainer.classList.add("bg-warning");
        } 
    } else if ( i % 5 === 0){
        boxContainer.innerHTML = ("Buzz");
        boxContainer.classList.add("bg-success")
    }
    
//if senza indentazione
    // if (i % 3 === 0){
    //     boxContainer.innerHTML = ("Fizz");
    //     boxContainer.classList.add("bg-warning");
    // } 

    // if (i % 5 === 0){
    //     boxContainer.innerHTML = ("Buzz");
    //     boxContainer.classList.add("bg-success")
    // }

    // if (i % 3 === 0 && i % 5 === 0) {
    //     boxContainer.innerHTML = ("Fizz Buzz");
    //     boxContainer.classList.add("bg-danger")       
    // }

}
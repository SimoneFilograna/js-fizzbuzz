for( let i = 1; i <= 100; i++){    
    console.log(i)

    const mainContainer = document.querySelector(".container");
    let boxContainer = document.createElement("div");
    boxContainer.classList.add("box", "text-center", "border", "d-flex","justify-content-center", "align-items-center", "fw-semibold", "fs-5", "bg-primary");
    mainContainer.append(boxContainer);
    
    boxContainer.innerHTML = (i);


    if (i % 3 === 0){
        boxContainer.innerHTML = ("Fizz");
        if (i % 5 === 0) {
            boxContainer.innerHTML = ("Fizz Buzz");
            boxContainer.classList.add("bg-danger") 
        } else {
            boxContainer.classList.add("bg-warning");
        }
    } 

    if (i % 5 === 0){
        boxContainer.innerHTML = ("Buzz");
        boxContainer.classList.add("bg-success")
    }

    // if (i % 3 === 0 && i % 5 === 0) {
    //     boxContainer.innerHTML = ("Fizz Buzz");
    //     boxContainer.classList.add("bg-danger")       
    // }

}
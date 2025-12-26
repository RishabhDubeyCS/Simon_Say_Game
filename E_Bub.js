// Event Bubbling Example  parent element is also printing when child is clicked to Solve this issue we can use event.stopPropagation() method

// Event Bubbling Example 

{/* <div >
      
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    </div> */}

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
   
    console.log("div clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul clicked");
});


for (let li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li clicked");
    });
    // Stop parent click events if needed
        // event.stopPropagation();
}





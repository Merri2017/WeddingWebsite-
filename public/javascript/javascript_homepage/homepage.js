
//console.log("im connected")
//create an array of every element with class name gallery-item
let galleryItems = document.getElementsByClassName("gallery-item")
// using the for loop we are going through each div element item once,
// with the addEventListener we are calling the function to change the text
// red whenever the client 
// clicks on the picture.
for(i = 0; i< galleryItems.length; i++){
	let item = galleryItems[i]
	item.addEventListener("mousedown", function(){
		item.style.color = "red"
	})
}

// here, using loop to go through each div item once and with event calling
//calling function to change the color back to black when user removes mouse
for(i = 0; i< galleryItems.length; i++){
	let item = galleryItems[i]
	item.addEventListener("mouseup", function(){
		item.style.color = "black"
	})
}


console.log(galleryItems)

let form = document.getElementById("form");
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")


// step 1 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked")
    formValidation();
})
//we use addEventlistner here for the submit button
// here()=>{} this a call back function and to check if our submit button is workig we will have to go to browser and check in console
//  as we click the submit button the behaviour is different , it refreshes automatically and we have to prevent it from happening , thats why we give a random variable (e) and then give the function preventDefault 
// now the button will be clicked as as we gave console.log("button clicked") it will appear as "button clicked"
// till here the whenver the button is clicked it submits




// step 2:
// next, whenever thr submit button is clicked it should trigger the callback function named formValidation
// since the function formValidation as to trigger two things while submitting the button that is either SUCCESS or FAILURE that is why we use condtional statment ( if statement)
// input here is nothig but the inside text of the submit button , if the user submits the blank input page then it will throw  error in red.

// step 2
let formValidation = () => {
    msg.innerHTML = "post cannot be blank"
    if (input.value === "") {
        console.log("failure")
    }
    else {
        console.log("success")
        msg.innerHTML = " "
        acceptData()
    }
}


// here input.value === "" means
// input.value is the entire thing which we write inside the submit button and === "" refers if its equal to "blank" then consol.log as failure since the input is blank
// or else it will console.log as success that means if anything is writtten inside input it will show as success.
// very imp thing to undestand is function call should happen inside the eventListner because bydefault javascript works from top to bottom.
// if we call the function formValidation outside  then submit button will show results as failure because bydeault the input shows blank input.



// step3

// when the submit button is clicked when input is of blank page , the user should know there is some error thats why in html before submit button create a div with any class or id,
// here I will give id name msg - <div id="msg"></div> and in css with id  .msg give it property and value colour : red , so that the error message will appear in red.
// inside the formValidation function  -  msg.innerHTML="post cannot be blank" to appear on browser.


// step 4
// now when the blank input is submitted it will appear in red saying post cannot be blank
// we face a issue here even when the input is filled with text and while submitting the button stil it comes "post cannot be blank", now lets fix this
//  in formValidation we just have to write msg.innerHtml = " " after console.log ("success") it means whenevr there is a message written inside input, tere should not be anything appearing.




// step 5 : ACCEPT AND STORE THE DATA   

// create an object and then give a new function 

let data = {};
let acceptData = () => {

    data["text"] = input.value;
    console.log(data)
    createPost();
}

// then call the function inside the formValidation function after  success conditon 
// when the submit button now is clicked when there is a text inside input , the console will show the answer in the form of object 


// step 6 : upload the data in screen , whatver the input as been put isnide the text box , now it as to be uploaded on the screen once the submit button is clciked.

let createPost = () => {

    posts.innerHTML +=
        ` <div>
    <p>${data.text}</p>
    <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
    </span>
</div > 
    `;
    input.value = " "
}


// now when the new text is put inside the input the other outside data gets delete automatically, how to fix it ?
//      posts.innerHTML = data.text;     just add + symbol before = , like this       posts.innerHTML += data.text;



// step 7:

// how to rest the input - just write - input.value = " " , automatically after a text as been written , the input page will be blank ( reset automatically)





// step 8 :
// how to delete the updated input from screen 

// {/* <i class="fas fa-trash-alt"></i> */} since this is trash icon for deleting , pass  the delete function in this i class 


//                         <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>  
// (this) = this means will dlete only that particular line where deletePost(this) as been written, other line of text wont be deleted.
// then pass a keyword (e) and then give e.remove() to delete , it will only remove the trash icon
//     e.parentElement.remove(); it will remove both the edit and trash icon.

//     e.parentElement.parentElement.remove(); will delete the entire line. text , edit icon and tash icon




let deletePost = (e) => {
    e.parentElement.parentElement.remove();


}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove();


};

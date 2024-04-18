let input=document.querySelector("#input");
let addBtn=document.querySelector(".contact");
let container=document.querySelector(".container");







//get from local storage
function getLocalStorage(){
let savedContacts=localStorage.getItem("savedcontacts");
if(savedContacts!==null){
    savedContacts=JSON.parse(savedContacts);

}
else{
    savedContacts=[];
}
return savedContacts;

}

//load saved contacts on webpage
window.onload= function(){
    let savedcontacts=getLocalStorage();
    if(savedcontacts){
        for(let i=0; i <savedcontacts.length; i++){
            let contact=savedcontacts[i];
            let displayContactList=document.createElement("li");
            displayContactList.innerHTML=contact;
            container.appendChild(displayContactList);
        }


    }
}

   

addBtn.addEventListener("click",(e)=>{

    const newContact=input.value;
    let contactList=document.createElement("li");
    contactList.innerHTML=newContact;
    container.appendChild(contactList);
    input.value="";
    addLocalStorage(newContact);

//add local storage
 function addLocalStorage(newContact){
    let savedContacts=localStorage.getItem("savedcontacts");
    if(savedContacts !== null){
      savedContacts=JSON.parse(savedContacts);
    }
    else {
        savedContacts=[];
    }
    savedContacts.push(newContact);
    localStorage.setItem("savedcontacts",JSON.stringify(savedContacts));

    
}

//update from local storage
function updateLocalStorage(){
    let contacts=document.querySelectorAll(".conatiner li");
    let updatedContacts=[];
    for(let i=0; i<contacts.length;i++){
        let contact=contacts[i];
        updatedContacts.push(contact.textContent);
    }
    localStorage.setItem("savedcontacts",JSON.stringify(updatedContacts));
}


  

//span
let span=document.createElement("span");
contactList.appendChild(span);

//edit Icon
let editIcon=document.createElement("i");
editIcon.classList.add('bx','bxs-edit-alt');
span.appendChild(editIcon);
//deleteIcon
let deleteIcon=document.createElement('i');
deleteIcon.classList.add('bx','bxs-trash');
span.appendChild(deleteIcon);
//completeIcon
let completeIcon= document.createElement("input");
completeIcon.setAttribute("type","checkbox");
span.appendChild(completeIcon);

//event listeners
deleteIcon.addEventListener("click",()=>{
    contactList.remove();
    updateLocalStorage()
})

editIcon.addEventListener("click",()=>{
    contactList.contentEditable="true";
    contactList.focus();
    updateLocalStorage(newContact)
    
})

completeIcon.addEventListener("click",()=>{
if(completeIcon.checked){
    contactList.style.textDecoration="line-through"
    contactList.style.padding="5px 10px"
    updateLocalStorage(newContact)
}
else{
    contactList.style.textDecoration="none"
}



})
  

  





});
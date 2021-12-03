/* This file is where all your work should go for Assignment 2.  Please remove this comment. */


//cleanUpPage works for all pages
function cleanUpPage() {
    $main.children().remove();
}

function createSingleIndex(object) {
    let contact = document.createElement("a");
    let div = document.createElement("div");
    let p = document.createElement("p");

    //contact.href = "page3.html";
    div.classList.add("contact");
    p.innerHTML = object.name;

    div.append(p);
    contact.append(div);
    return contact;
}

function renderIndex() {
    for (let i = 0;i < contactList.length;i++) {
        $main.append(createSingleIndex(contactList[i]));
    } 
}

function renderView(object) {
    console.log(object)
    let contact = document.createElement("div");
    let contactName = document.createElement("div");
    let profilePic = document.createElement("img");
    let contactEmail = document.createElement("div");
    let contactPhone = document.createElement("div");
    let contactAddress = document.createElement("div");
    let buttons = document.createElement("div");
    let editButton = document.createElement("button");
    let closeButton = document.createElement("button");

    contact.classList.add("contactinfo");
    contactName.classList.add("contactname");
    profilePic.classList.add("profilepic");
    contactEmail.classList.add("contactemail");
    contactPhone.classList.add("contactphone");
    contactAddress.classList.add("contentaddress");
    buttons.classList.add("buttons");
    editButton.classList.add("button");
    editButton.classList.add("edit");
    closeButton.classList.add("button");
    closeButton.classList.add("close");

    profilePic.src = "img/profile.jpg";
    profilePic.alt = "Profile picture";
    editButton.value = "Edit"
    closeButton.value = "Close";

    contactName.innerHTML = object.name;
    contactEmail.innerHTML = object.email;
    contactPhone.innerHTML = object.phone;
    contactAddress.innerHTML = object.address;
    editButton.innerHTML = "Edit";
    closeButton.innerHTML = "Close";

    contactName.append(profilePic);
    buttons.append(editButton);
    buttons.append(closeButton);
    contact.append(contactName);
    contact.append(contactEmail);
    contact.append(contactPhone);
    contact.append(contactAddress);
    contact.append(buttons);

    $main.append(contact);
}

function renderCreate() {
    let contactEdit = document.createElement("div");
    let contactImg = document.createElement("div");
    let profilePic = document.createElement("img");
    let formDiv = document.createElement("div");
    let form = document.createElement("form");

    let inputContainer1 = document.createElement("div");
    let contactName = document.createElement("input");
    let extraField1 = document.createElement("button");

    let inputContainer2 = document.createElement("div");
    let contactPhone = document.createElement("input");
    let extraField2 = document.createElement("button");

    let inputContainer3 = document.createElement("div");
    let contactAddress = document.createElement("input");
    let extraField3 = document.createElement("button");

    let inputContainer4 = document.createElement("div");
    let contactEmail = document.createElement("input");
    let extraField4 = document.createElement("button");

    let inputContainer5 = document.createElement("div");
    let submitButton = document.createElement("button");
    let resetButton = document.createElement("button");

    contactEdit.classList.add("contactedit");
    contactImg.classList.add("contactimg");
    profilePic.classList.add("profilepic");
    formDiv.classList.add("form");

    inputContainer1.classList.add("inputcontainer");
    contactName.id = "contactname";
    contactName.placeholder = "Contact Name";
    extraField1.classList.add("extrafield");
    extraField1.id = "extranamefield";

    inputContainer2.classList.add("inputcontainer");
    contactPhone.id = "contactphone";
    contactPhone.placeholder = "Contact Phone";
    extraField2.classList.add("extrafield");
    extraField2.id = "extraphonefield";

    inputContainer3.classList.add("inputcontainer");
    contactAddress.id = "contactaddress";
    contactAddress.placeholder = "Contact Address";
    extraField3.classList.add("extrafield");
    extraField3.id = "extraaddressfield";

    inputContainer4.classList.add("inputcontainer");
    contactEmail.id = "contactemail";
    contactEmail.placeholder = "Contact Email";
    extraField4.classList.add("extrafield");
    extraField4.id = "extraemailfield";

    inputContainer5.classList.add("buttons");
    submitButton.classList.add("button");
    submitButton.classList.add("save");
    submitButton.id = "savecontact";
    resetButton.classList.add("button");
    resetButton.classList.add("cancel")
    resetButton.id = "cancel";
    submitButton.name = "savecontact";
    resetButton.name = "cancel";

    profilePic.src = "img/profile.jpg";
    profilePic.alt = "Profile picture";
    

    submitButton.innerHTML = "Save";
    resetButton.innerHTML = "Cancel";

    inputContainer1.append(contactName);
    inputContainer1.append(extraField1);
    inputContainer2.append(contactPhone);
    inputContainer2.append(extraField2);
    inputContainer3.append(contactAddress);
    inputContainer3.append(extraField3);
    inputContainer4.append(contactEmail);
    inputContainer4.append(extraField4);
    inputContainer5.append(submitButton);
    inputContainer5.append(resetButton);

    form.append(inputContainer1);
    form.append(inputContainer2);
    form.append(inputContainer3);
    form.append(inputContainer4);
    

    contactImg.append(profilePic);
    formDiv.append(form);
    formDiv.append(inputContainer5);

    contactEdit.append(contactImg);
    contactEdit.append(formDiv);
    $main.append(contactEdit);
}

console.log("functions loaded");


const $createContactButton  = $("#newcontact");
const $contactsHomeButton   = $("#contactshome");
let $resetContactButton;
let $saveContactButton;
let contactView = document.querySelectorAll(".contact");
console.log(contactView)
contactView.forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        for (let i = 0; i < contactList.length; i++) {
            console.log(`${element.firstChild.innerHTML} - ${contactList[i].name}`)
            if (element.firstChild.innerHTML == contactList[i].name) {
                console.log(contactList[i])
                console.log("TEST")
                cleanUpPage();
                renderView(contactList[i]);
                let $closeButton = $(".close");
                $closeButton.click(loadContactsHome);
                break;
            } else {
                loadContactsHome(event);
            }
        }
        
    })
});
function loadContactView() {
}


function loadCreateContact(event) {
    event.preventDefault();
    cleanUpPage();
    renderCreate();
    $resetContactButton   = $("#cancel");
    $saveContactButton    = $("#savecontact");
    const $contactName        = $("#contactname");
    const $contactPhone       = $("#contactphone");
    const $contactAddress     = $("#contactaddress");
    const $contactEmail       = $("#contactemail");

    $saveContactButton.click(saveContact);
    $resetContactButton.click(loadContactsHome);

    function saveContact(event) {
        event.preventDefault();
        if ($contactName.val() != "" && $contactPhone.val() != "" && $contactAddress.val() != "" && $contactEmail.val()) {
            contactList.push({
                name: $contactName.val(),
                phone: $contactPhone.val(),
                address: $contactAddress.val(),
                email: $contactEmail.val()
            })
            loadContactsHome(event);
        }
    }
}

function loadContactsHome(event) {
    event.preventDefault();
    cleanUpPage();
    renderIndex();
    let contactView = document.querySelectorAll(".contact");
    console.log(contactView)
    contactView.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            for (let i = 0; i < contactList.length; i++) {
                console.log(`${element.firstChild.innerHTML} - ${contactList[i].name}`)
                if (element.firstChild.innerHTML == contactList[i].name) {
                    console.log(contactList[i])
                    console.log("TEST")
                    cleanUpPage();
                    renderView(contactList[i]);
                    let $closeButton = $(".close");
                    $closeButton.click(loadContactsHome);
                    break;
                } else {
                    loadContactsHome(event);
                }
            }
        })
    });
}




$("#newcontact").click(loadCreateContact);
$contactsHomeButton.click(loadContactsHome);

//const nidx = (idx == len-1)? 1: idx+1
//this is an if statement that compares idx to len and sets it to one if true, idx+1 otherwise.
//VERY IMPORTANT
//<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans" rel="stylesheet">
loadContactsHome(event);
console.log("driver loaded")
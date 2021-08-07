var prompt=require('prompt-sync')();
class AddressBookService{
    firstName;
    lastName;
    address;
    city;
    state;
    zipcode;
    phoneNumber;
    emailId;

    constructor(firstName, lastName, address, city, state, zipcode, phoneNumber, emailId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
    }

    
    get firstName() {
        return this._firstName;
    }
    set firstname(firstname) {
        let pattern = Regex('^[A-Z]{1}[a-z]{3,}$');
        if (pattern.test(firstname)){
            this._firstname = firstname;
        }
        else {
            throw 'Entered FirstName is Incorrect';
        }
    }

    get lastName() {
        return this._lastName;
    }
    set lastname(lastname) {
        pattern = Regex('^[A-Z]{1}[a-z]{3,}$');
        if (pattern.test(lastname)){
            this._lastname = lastname;
        }
        else{
             throw 'Entered LastName is Incorrect!';
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
         pattern = Regex('^[A-Z]{1}[a-z]{4,}$');
        if (pattern.test(address)){
            this._address = address;
        }
        else{ 
            throw 'Entered Address is Incorrect!';
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        pattern = Regex('^[A-Z]{1}[a-z]{4,}$');
        if (pattern.test(city)){
            this._city = city;
        }
        else {
            throw 'Entered City is Incorrect!';
        }
    }

    get state() {
        return this._state;
    }
    set state(state) {
        pattern = Regex('^[A-Z]{1}[a-z]{4,}$');
        if (pattern.test(state)){
            this._state = state;
        }
        else{
             throw 'Entered State is Incorrect!';
        }
    }

    get zipcode() {
        return this._zip;
    }
    set zipcode(zipcode) {
        pattern = Regex('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if (pattern.test(zipcode)){
            this._zipcode = zipcode;
        }
        else {
            throw 'Zipcode is Incorrect!';
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        pattern = Regex('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
        if (pattern.test(phoneNumber)){
            this._phoneNumber = phoneNumber;
        }
        else {
            throw 'Entered PhoneNumber is Incorrect!';
        }
    }

    get emailId() {
        return this._emailId;
    }
    set emailId(emailId) {
        pattern = Regex('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
        if (pattern.test(emailId)){
            this._emailId = emailId;
        }
        else{ 
            throw 'EmailId is Incorrect!';
        }
    }

    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zipCode+" ,phoneNumber="+this.phoneNumber+" ,email="+this.emailId;
    }

}


let contactArray = new Array();
function addContact(){
    let firstName = prompt("Enter Firstname: ");
    let lastName = prompt("Enter Lastname: ");
    if(contactArray.find((contact)=>(contact.firstName+" "+contact.lastName)==(firstName+" "+lastName))){   
        console.log("Given contact already present in addressbook.");
        return;
    }
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City name: ");
    let state = prompt("Enter State name: ");
    let zip = prompt("Enter pincode: ");
    let phoneNumber = prompt("Enter Phone number: ");
    let emailId = prompt("Enter email id: ");
    try{
        let contact = new AddressBookService(firstName,lastName,address,city,state,zip,phoneNumber,emailId);
        contactArray.push(contact);
        console.log("Contact is added. ");
    }catch(Exception){
        console.log(Exception);
    }
}


function editContact(firstName){
    let contact;
    for(let i = 0; i < contactArray.length; i++){
        if(contactArray[i].firstName === firstName)
            contact = contactArray[i];
        if(contact != null){
            let input = 1;
            while(input != 9){
                console.log("\nChoose to edit: \n1. First Name \n2. Last Name \n3. Address \n4. City \n5. State");
                console.log("6. Zipcode \n7. Phone Number \n8. Email \n9. View Edited Details & Exit");
                input = prompt("Enter Your Choice: ");
                input = parseInt(input);
                switch (input) {
                    case 1: let fname = prompt("Enter the firstname: ");
                            contact.firstName = fname;
                            break;
                    case 2: let lname = prompt("Enter the last Name: ");
                            contact.lastName = lname;
                            break;
                    case 3: let address_edit = prompt("Enter the address: ");
                            contact.address = address_edit;
                            break;
                    case 4: let city_edit = prompt("Enter the city: ");
                            contact.city = city_edit;
                            break;
                    case 5: let state_edit = prompt("Enter the state: ");
                            contact.state = state_edit;
                            break;
                    case 6: let zip_edit = prompt("Enter the pincode: ");
                            contact.zip = zip_edit;
                            break;
                    case 7: let phone_edit = prompt("Enter the phone number: ");
                            contact.phoneNumber = phone_edit;
                            break;
                    case 8: let mail_edit = prompt("Enter the email: ");
                            contact.email = mail_edit;
                            break;
                    case 9: console.log("\n",contact);
                            break;
                    default: console.log("Choose Correct Choice");
                    }
                }
            }
    }
}

let deletContact=()=>{
    if(contactArray.length==0){
        console.log("No contacts in the list");
    }   
    let name = prompt("Enter contact firstname you want to delete: ");
    let found = contactArray.find((contact)=>contact.firstName == name);
    if(found==undefined){
        console.log("No such contact in Addressbook.");
    }else{
        contactArray = contactArray.filter((contacts)=>contacts.firstName!=name);
        console.log("Contact is deleted from Addressbook.")
    }
}

function searchByCityOrState(searchCityOrState, choice){
    let contacts = new Array();
    if(choice == 1){
        contacts = contactArray.filter(contact => contact.city === searchCityOrState)
    }
    if(choice == 2){
        contacts = contactArray.filter(contact => contact.state === searchCityOrState)
    }
    console.log("Contact: ",contacts);
}

function countByCityOrState(countCityOrState, choice){
    let contacts = new Array();
    if(choice == 1){
        console.log("Contacts in "+countCityOrState+" city are: ",contactArray.filter(contact => contact.city == countCityOrState).reduce(contact => contact + 1, 0));
    }
    if(choice == 2){
        console.log("Contacts in "+countCityOrState+" state are: ",contactArray.filter(contact => contact.state == countCityOrState).reduce(contact => contact + 1, 0));
    }
}

function sortContactByCityStateOrZip(inputToSort){
    if(inputToSort == 1){
        contactArray.sort(function(a, b) { return a.city.localeCompare(b.city)});
        for(let i = 0; i < contactArray.length; i++)
        console.log(contactArray[i].toString(),"\n");
    }
    if(inputToSort == 2){
        contactArray.sort(function(a, b) { return a.state.localeCompare(b.state)});
        for(let i = 0; i < contactArray.length; i++)
        console.log(contactArray[i].toString(),"\n");
    }
    if(inputToSort == 3){
        contactArray.sort(function(a, b) { return parseInt(a.zip) - parseInt(b.zip)});
        for(let i = 0; i < contactArray.length; i++)
        console.log(contactArray[i].toString(),"\n");
    }
}

let choice = 0;
do{
    console.log("Press: \n1) Add Contact \n2) Edit Contact \n3) View Contact \n4)delete contact \n5)number of contacs \n6)Search City or state \n7) Count by city or state \n8) Alphabetical Sorting by name \n9) Sort By City, State or Zip \n0)Exit:");
    choice = Number(prompt("Enter your choice: "));
    if(choice == 1){
        addContact();
    }
    if(choice == 2){
        if(contactArray.length==0){
            console.log("No contacts in Addressbook.");
        }
        let userData = prompt("Enter the contact firstname which you want to edit: ");
        editContact(userData); 
    }
    if(choice == 3){
        for(let i = 0; i < contactArray.length; i++)
            console.log(contactArray[i].toString(),"\n");
    }
    if(choice == 4){
        deletContact();
    }
    if(choice == 5){
        console.log("Number of Contacts: "+contactArray.reduce(contact=>contact + 1, 0));
    }
    if(choice == 6){
        console.log("1) Search By City  2) Search By State");
        let ch = Number(prompt("Enter your choice: "));
        switch (ch){
            case 1: let city = prompt("Enter the city name: ");
                    searchByCityOrState(city, 1);
                    break;
            case 2: let state = prompt("Enter the state name: ");
                    searchByCityOrState(state, 2);
                    break;
        }
    }
    if(choice == 7){
        console.log("1) Count By City   2) Count By State");
        let choice = Number(prompt("Enter your choice: "));
        switch (choice){
            case 1: let city = prompt("Enter the city name: ");
                    countByCityOrState(city, 1);
                    break;
            case 2: let state = prompt("Enter the state name: ");
                    countByCityOrState(state, 2);
                    break;
        }
    }
    if(choice == 8){
        console.log(contactArray.sort((a,b)=>a.firstName.localeCompare(b.firstName)));
    }
    if(choice == 9){
        console.log("Sort Contacts based on \t1.) City \t2.) State \t3.) Zip")
        let inputToSort = parseInt(prompt("Enter your choice:  "))
        sortContactByCityStateOrZip(inputToSort);
    }
}while(choice != 0);
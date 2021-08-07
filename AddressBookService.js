class AddressBookService{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
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

    get zip() {
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
let addressBookService = new AddressBookService("Nithin", "Krishna", "Tirupati", "Tirupati", "Andhra", "514586", "+91 9988665544", "sathram.nithin@gmail.com");
console.log("AddressBook: " + addressBookService.toString());
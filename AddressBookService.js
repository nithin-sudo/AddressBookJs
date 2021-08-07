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
        return this.firstName;
    }
    set firstName(value) {
        this.firstName = value;
    }

    get lastName() {
        return this.lastName;
    }
    set lastName(value) {
        this.lastName = value;
    }

    get address() {
        return this.address;
    }
    set address(value) {
        this.address = value;
    }

    get city() {
        return this.city;
    }
    set city(value) {
        this.city = value;
    }

    get state() {
        return this.state;
    }
    set state(value) {
        this.state = value;
    }

    get zip() {
        return this.zip;
    }
    set zip(value) {
        this.zip = value;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(value) {
        this.phoneNumber = value;
    }

    get email() {
        return this.email;
    }
    set email(value) {
        this.email = value;
    }

    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zipCode+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }

}
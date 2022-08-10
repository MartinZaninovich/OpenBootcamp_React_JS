export class Contact {
    firstName = "";
    lastName = "";
    eMail = "";
    isConnected = true;

    constructor(firstName, lastName, eMail, isConnected) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.isConnected = isConnected;
    }
}

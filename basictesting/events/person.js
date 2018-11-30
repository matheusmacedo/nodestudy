var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        // return, console.log does not work because this is the prototype
        return this.firstname + ' ' + this.lastname;
    }
}

module.exports = person;
class users {
    #firstname;
    #lastname;
    #living;
    constructor(firstname, lastname, living){
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#living = living;
        this.bookslibery = [];
    }
    libery(){
        this.bookslibery.push(borrowablebook.name);
        alert(`you have this book:${borrowablebook.name}.`);
    }
}

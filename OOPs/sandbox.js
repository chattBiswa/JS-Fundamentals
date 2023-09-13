class User {
    constructor(name){
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(`${this.name} logged-in`);
        return this; // method chaining
    }

    logout(){
        console.log(`${this.name} logged-out`);
        return this;
    }

    updateScore(){
        this.score++;
        console.log(`score now is ${this.score}`);
        return this;
    }
}

const user1 = new User('user1');
const user2 = new User('user2');

user1.login().updateScore().updateScore().logout();
user2.login().logout();

function User(someUserName) {
  this.userName = someUserName;
  this.followers = [];
  this.iFollow = [];

  this.addFollower = function (someUser) {
    this.followers.push(someUser);
    someUser.iFollow.push(this); 
  };

  this.sendMessage = function (myPost) {
    this.followers.forEach((follower) => {
      follower.getMessage(myPost, this.userName); 
    });
  };
  this.getMessage = function (theMessage, sender) {
    console.log(
      this.userName + " you have massage from " + sender + " : " + theMessage
    );
  };
}

let myUser1 = new User("mosha");
let myUser2 = new User("ron");
let myUser3 = new User("yuni");
let myUser4 = new User("gal");



myUser1.addFollower(myUser2);
myUser1.sendMessage("Hello to Everybody !! ");

myUser2.addFollower(myUser3);
myUser2.sendMessage("hello");

myUser3.addFollower(myUser1);
myUser3.sendMessage("Hello you to");

myUser2.addFollower(myUser3);
myUser3.sendMessage("hello, you like to coding ? ");




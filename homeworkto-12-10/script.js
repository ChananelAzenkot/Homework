function User(someUserName) {
  this.userName = someUserName;
  this.followers = [];
  this.iFollow = [];

  this.addFollower = function (someUser) {
    this.followers.push(someUser); // Adding the follower to my List of followers (line 29)
    someUser.iFollow.push(this); // Adding my Self to follower list of the people followed by him (line 30)
  };

  this.sendMessage = function (myPost) {
    this.followers.forEach((follower) => {
      follower.getMessage(myPost, this.userName); //myUser2.getMessage... ; myUser3.getMessage... ; myUser4.getMessage...
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

myUser1.sendMessage("Hello");

myUser1.addFollower(myUser2);
//myUser1 is being followed by myUser2
//myUser2 is following myUser1
myUser1.sendMessage("Hello you to");
myUser1.addFollower(myUser3);
myUser1.sendMessage("hello");
myUser1.addFollower(myUser4); //myUser1.followers.push(myUser4); myUser4.iFollow.push(myUser1);
myUser1.sendMessage("Hello you to");

myUser2.addFollower(myUser3);
myUser2.sendMessage("hello, you like to coding ? ");

myUser2.addFollower(myUser4);

myUser3.addFollower(myUser4);


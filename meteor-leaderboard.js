playersList = new Mongo.Collection('players');
console.log("Hello world");

if (Meteor.isClient) {
  console.log("Hello Client");
}

if (Meteor.isServer) {
  console.log("Hello Server");
}
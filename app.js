const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema ({
  name: {
    type:String,
    required: true
  },
  rating:{
    type: Number,
    min: 1,
    max:[10,"Ratings should go between 1 and 10"]
  } ,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "icecream",
  rating: 10,
  review: "excellent"
})

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const tree = new Fruit ({
  name: "tree",
  rating: 10,
  review: "excellent"
})

// tree.save();

const person = new Person ({
  name: "Amy",
  age: 18,
  favouriteFruit: tree
})

// person.save()

const sausage = new Fruit ({
  name: "sausage",
  rating: 1,
  review: "not good"
})

sausage.save();

Person.updateOne({name: "Peter"}, {favouriteFruit:sausage }, function(err){} )



// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 7,
//   review: "good fruit"
// });
//
// const banana = new Fruit ({
//   name: "banana",
//   rating: 5,
//   review: "good juicy fruit"
// });
//
// const orange = new Fruit ({
//   name: "orange",
//   rating: 10,
//   review: "good very good fruit"
// });


// Fruit.insertMany([kiwi, banana, orange], function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("successfully saved all fruits to fruitsDB");
//   }
// })


Fruit.find(function(err, array){

  if(err){
    console.log(err);

  } else {

    // mongoose.connection.close();

    array.forEach(function (element){
      console.log(element.name)
    })

  }
})


// Fruit.updateOne({_id : "616763db43b6526cc4bd8cf0" }, {name : "chocolate"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("updated successfully");
//   }
// })

// Fruit.deleteOne({name: "Kiwi"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted successfully");
//   }
// })

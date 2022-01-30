require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:0zKO7EEtKuXUYerO@cluster0.vafkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name : { 
    type: String, 
    required: true,
    default: ''
  },
  age : Number,
  favoriteFoods : [String]
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let testPerson = new Person(
    {
      name: 'Test Person',
      age: 999,
      favoriteFoods: ["Pizza","Pasta","Hot Dogs"]
    }
  );

  testPerson.save(function(err,data){
    if(err){
      return console.log(error);
    }
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if(err){
      console.log(err);
    }
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, data){
      if(err){
        console.log(err);
      }
      done(null, data);
    }
  );
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function(err, data){
    if(err){
      console.log(err);
    }
    done(null, data);
})};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

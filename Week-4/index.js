// Creating a Person class
const Person = function () {};

// Creating a method initialize to assign name and age of the person
Person.prototype.initialize = function (name, age) {
	this.name = name;
	this.age = age;
};

// Creating a new class teacher
function Teacher(name) {
	/**
	 * Calling Person in the different context, and passing the name with the this
	 */
	Person.call(this, name); //  acting as super() in es6 class features
}

// Creating Teacher a sub class of Person
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

// Creating a method teach in teacher class

Teacher.prototype.teach = function (subject) {
	this.subject = subject;
	console.log(`${this.name} is teaching ${subject}`);
};

const him = new Teacher();

// Passing the name and age variable
const firstName = 'Rupesh',
	age = 26;
him.initialize(firstName, age);

// Calling the method teach and passing the subject
const subject = 'Maths';
him.teach(subject);

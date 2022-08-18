// import fetch from "cross-fetch";
// class HelloWorld {
//   constructor(public message: string) {}
// }
// var hello = new HelloWorld("Hello there!");
// console.log(hello.message);
// let object = { name: "bravo" };
// function flipCoin() {
//   return Math.random() < 0.5;
// }
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
// function liveDangerously(x?: number | null) {
//   // No error
//   console.log(x!.toFixed());
// }
// liveDangerously(2);
// // liveDangerously(null);
// let x = !!"opa";
// console.log(typeof x);
// type voidFunc = () => void;
// const f2: voidFunc = () => true;
// const f3: () => void = () => true;
// const c3 = f3();
// console.log(c3);
// interface Person {
//   name: string;
//   age: number;
// }
// interface ReadonlyPerson {
//   readonly name: string;
//   readonly age: number;
// }
// let writablePerson: Person = {
//   name: "Person McPersonface",
//   age: 42,
// };
// // works
// let readonlyPerson: ReadonlyPerson = writablePerson;
// console.log(readonlyPerson.age); // prints '42'
// writablePerson.age++;
// console.log(readonlyPerson.age); // prints '43'
// interface Box {
//   contents: unknown;
// }
// let x22: Box = {
//   contents: "hello world",
// };
// function okej(items) {
//   console.log(items);
// }
// okej([1, 2, 3]);
// function okej2(...items) {
//   console.log(items);
// }
// okej2(33);
// okej2(22, 33, 34);
// okej2([1, 2, 3]);
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// console.log(b);
// console.log(c);
// type StringBooleansNumber = [string, ...boolean[], number];
// let tapl: StringBooleansNumber = ["yes", true, true, true, 10];
// let [z0, z1, ...z2] = tapl;
// console.log(z0);
// console.log(z1);
// console.log(z2);
// interface Checkable {
//   check(name: string): boolean;
// }
// class NameChecker implements Checkable {
//   check(s: string) {
//     return s.toLowerCase() === "ok";
//   }
// }
// class Base {
//   greet() {
//     console.log("Hello, world!");
//   }
// }
// class Derived extends Base {
//   greet(name?: string) {
//     if (name === undefined) {
//       super.greet();
//     } else {
//       console.log(`Hello, ${name.toUpperCase()}`);
//     }
//   }
// }
// const d = new Derived();
// d.greet();
// d.greet("reader");
// let be: Base = d;
// be.greet();
// // console.log("varA", varA);
// // var varA = 10;
// // console.log("letA", letA);
// // const letA = 12;
// let counterIncrement = (function () {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// })();
// console.log(counterIncrement());
// console.log(counterIncrement());
// let configurationSingleton = (() => {
//   // private value of the singleton initialized only once
//   let config;
//   const initializeConfiguration = (values) => ({
//     randomNumber: Math.random(),
//     values: values || {},
//     number: values.number || 5,
//     size: values.size || 10,
//   });
//   // We export the centralized method to return
//   // the singleton's value
//   return {
//     getConfig: (values) => {
//       // initialize the singleton only once
//       if (config === undefined) {
//         config = initializeConfiguration(values);
//       }
//       // and always return the same value
//       return config;
//     },
//   };
// })();
// const configObject = configurationSingleton.getConfig({ size: 8 });
// // prints number: 5, size: 8, randomNumber: someRandomDecimalValue
// console.log(configObject);
// const configObject1 = configurationSingleton.getConfig({ number: 8 });
// // prints number: 5, size: 8, randomNumber: same randomDecimalValue // como no primeiro config
// console.log(configObject1);
// interface Animal {
//   dateOfBirth: any;
// }
// interface Dog extends Animal {
//   breed: any;
// }
// class AnimalHouse {
//   resident: Animal;
//   constructor(animal: Animal) {
//     this.resident = animal;
//   }
// }
// class DogHouse extends AnimalHouse {
//   // Does not emit JavaScript code,
//   // only ensures the types are correct
//   // declare resident: Dog;
//   constructor(dog: Dog) {
//     super(dog);
//   }
// }
// let dog = new DogHouse({ dateOfBirth: "1995", breed: "mali" });
// console.log(dog);
// function* generatorFunction() {
//   yield "Neo";
//   yield "Morpheus";
//   yield "Trinity";
//   return "The Oracle";
// }
// const generator = generatorFunction();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// // console.log(generator.return("Life is beautiful!"));
// console.log(generator.next());
// function* getGenerator() {
//   console.log(yield);
//   console.log(yield);
//   return "Bravo!";
// }
// let generator2 = getGenerator();
// generator2.next(100);
// generator2.next(200);
// generator2.next(300);
// console.log(generator2.next(400));
// function* generatorFunction(oo) {
//   while (true) {
//     oo = yield oo * 10;
//   }
// }
// let generator = generatorFunction(100);
// for (let i = 1; i < 5; i++) {
//   console.log(generator.next(i));
// }
// const getUsers = async function () {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await response.json();
//   return json;
// };
// // Call the getUsers function and log the response
// getUsers().then((response) => console.log(response));
// const mapp = new Map();
// console.log(mapp);
// mapp.set("firstName", "Luke");
// mapp.set("lastName", "Skywalker");
// mapp.set("occupation", "Jedi Knight");
// console.log(mapp);
// console.log(Object.fromEntries(mapp));
// console.log(Array.from(mapp));
// const key = { name: "World" };
// const map2 = new Map();
// map2.set(key, { surname: "Hello" });
// console.log(map2.get(key));
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"
// // named
// Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// class Rectangle {}
// const p = new Rectangle();
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }
// class Dog extends Animal {
//   constructor(name) {
//     super(name); // call the super class constructor and pass in the name parameter
//   }
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }
// const d = new Dog("Mitzie");
// d.speak(); // Mitzie barks.
// class User {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// class ContentWriter extends User {
//   posts = [];
// }
// const writer = new ContentWriter("John Smith");
// console.log(writer.name); // => 'John Smith'
// console.log(writer.getName()); // => 'John Smith'
// console.log(writer.posts); // => []
// const enum Orientation {
//   East,
//   West,
// }
// let directionInNumber = Orientation.East;
// console.log(directionInNumber);
// enum Orientation {
//   East,
//   West,
//   North,
//   South,
// }
// namespace Orientation {
//   export function yourFunction() {
//     console.log("I am in a Enum");
//   }
// }
// Orientation.yourFunction();
// console.log(Orientation);
// const a2: Array<any> = new Array(2, 3);
// const s2 = a2[0]; // No cast required
// console.log(s2.substr(0, 1)); // TypeScript does not safe guard
//
// class Human {
//   public greeting: string = "Hello";
// }
// class Lion {
//   public greeting: string = "Grrrrrr";
// }
// class Tulip {
//   public greeting: string = "...";
// }
// class LivingSpecies_1 {
//   public species: Human;
//   constructor(species: Human) {
//     this.species = species;
//   }
//   public sayHello(): void {
//     console.log(this.species.greeting);
//   }
// }
// const species1 = new LivingSpecies_1(new Lion());
// species1.sayHello();
// Three classes that inherit a common one
// interface Greeter {
//   greeting: string;
// }
// class Human implements Greeter {
//   // Implement the common interface
//   public greeting: string = "Hello";
// }
// class Lion implements Greeter {
//   // Implement the common interface
//   public greeting: string = "Grrrrrr";
// }
// class Tulip {
//   // Does not implement the common interface
//   public greeting: string = "...";
// }
// class LivingSpecies {
//   private species: Greeter;
//   constructor(species: Greeter) {
//     this.species = species;
//   }
//   public sayHello(): void {
//     console.log(this.species.greeting);
//   }
// }
// const species1 = new LivingSpecies(new Human());
// species1.sayHello();
// const species2 = new LivingSpecies(new Lion());
// species2.sayHello();
// const species3 = new LivingSpecies(new Tulip());
// species3.sayHello();
// class LivingSpecies<T extends Greeter> {
//   private species: T;
//   constructor(species: T) {
//     this.species = species;
//   }
//   public sayHello(): void {
//     console.log(this.species.greeting);
//   }
// }
// const species1 = new LivingSpecies(new Human());
// species1.sayHello();
// const species2 = new LivingSpecies(new Lion());
// species2.sayHello();
// const species3 = new LivingSpecies(new Tulip());
// species3.sayHello();
// interface IMyInterfaceWithConstructor<T> {
//   new(param: string): T; // Force to have a constructor with the signature of 1 parameter that is a string
// }
// function createInstance<T>(ctor: IMyInterfaceWithConstructor<T>, param1: string): T { // Create a new type T
//   return new ctor(param1);
// }
// class C1 {
//   constructor(name: string) { // We can create from createInstance function because 1 parameter and string
//       console.log("Initializing class C1 with string: " + name);
//   }
// }
// class C2 {
//   constructor(name: string) { // We can create from createInstance function because 1 parameter and string
//       console.log("Initializing class C2 with string: " + name);
//   }
// }
// const inst1 = createInstance(C1, "Instance 1");
// const inst2 = createInstance(C2, "Instance 2");
//---------------------------------------------------------------------------------------
// class IdentificatedGeneric<S> extends Array<S> {
//   public id: string; // Enhancement of Array class
//   public constructor(id: string) {
//       super();
//       this.id = id;
//   }
// }
// function concatenate<S, T1 extends IdentificatedGeneric<S>>(list1: T1, list2: T1): T1 {
//   if (list1.id === list2.id) { // Comparison to ensure from the same id, possible because both extends IdentificatedGeneric
//       const oneList = [...list1, ...list2] as T1;
//       return oneList;
//   }
//   throw Error("Must be the same id");
// }
// const l1 = new IdentificatedGeneric<string>("l1");
// const l2 = new IdentificatedGeneric<string>("l2");
// const l3 = new IdentificatedGeneric<number>("l1");
// const l4 = new IdentificatedGeneric<string>("l1");
// l1.push("1", "2");
// l2.push("100", "200");
// l3.push(5, 6);
// l4.push("500", "600");
// const c3 = concatenate(l1, l4);
// console.log(c3);
//---------------------------------------------------------------------------------------
// interface MyGenericWithDefault<T = string> {
//   myTypeWhichIsStringIfNotSpecified: T;
// }
// const myGeneric1: MyGenericWithDefault<number> = {
//   myTypeWhichIsStringIfNotSpecified: 1,
// };
// const myGeneric2: MyGenericWithDefault = {
//   myTypeWhichIsStringIfNotSpecified: "string",
// };
// const myGeneric3: MyGenericWithDefault<string> = {
//   myTypeWhichIsStringIfNotSpecified: "string",
// };
//---------------------------------------------------------------------------------------
// interface InterfaceGenericDefinedTwoPlace<T = string> {
//   myProp: T;
// }
// interface InterfaceGenericDefinedTwoPlace<T> {}
// interface InterfaceGenericDefinedTwoPlace {}
// let x: InterfaceGenericDefinedTwoPlace = { myProp: "stringHere" };
// let y: InterfaceGenericDefinedTwoPlace<number> = { myProp: 10 };
// console.log(x);
// console.log(y);
//---------------------------------------------------------------------------------------
// interface TypeA {
//   prop1: string;
//   prop2: number;
// }
// function printProps<T, K extends keyof T>(p1: T, p2: K[]): void {
//   // Extends all properties' name of T
//   console.log("Printing:");
//   p2.forEach((propName) => {
//     console.log(`Name: ${String(propName)} and value: ${p1[propName]}`);
//   });
// }
// let a: TypeA = { prop1: "p1", prop2: 2 };
// printProps(a, ["prop1"]);
// printProps(a, ["prop1", "prop2"]);
// printProps(a, ["not", "working"]);
//---------------------------------------------------------------------------------------
// without mapped types:
// The interface that define a structure that allows re-assignment of values
// interface OriginalInterface {
//   x: number;
//   y: string;
// }
// // The interface that defines a structure that allows assignment only at creating
// interface ReadOnlyOriginalInterface {
//   readonly x: number;
//   readonly y: string;
// }
// let variable1: OriginalInterface = { x: 1, y: "2" };
// let variable2: ReadOnlyOriginalInterface = { x: 1, y: "2" };
// // A function that transform one object to the other type
// function mapOriginalInterfaceToBeReadOnly(
//   o: OriginalInterface
// ): ReadOnlyOriginalInterface {
//   return o;
// }
// let variable3 = mapOriginalInterfaceToBeReadOnly(variable1);
// // variable3.x = 2;
// The interface that we want to have readonly without defining another interface
// interface OriginalInterface {
//   x: number;
//   y: string;
// }
// // The mapped type that map a generic type with the readonly constraint
// type ReadonlyInterface<T> = { readonly [P in keyof T]: T[P] };
// const a: ReadonlyInterface<OriginalInterface> = { x: 2, y: "ok" };
// The interface that we want to have readonly without defining another interface
// interface OriginalInterface {
//   x: number;
//   y: string;
// }
// // The mapped type that map a generic type with the readonly constraint
// type ReadonlyInterface<T> = { readonly [P in keyof T]: T[P] };
// // Function that convert the object from one type to another
// function genericInterfaceToReadOnly<T>(o: T): ReadonlyInterface<T> {
//   return Object.freeze(o);
// }
// const original: OriginalInterface = { x: 0, y: "1" };
// const originalReadonly = genericInterfaceToReadOnly(original);
// // originalReadonly.x = 3; // error TS2540: Cannot assign to 'x'
// type LivingThing = Record<Extract<keyof Animal, keyof Human>, string>;
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// type RecordType1 = Record<"m1" | "m2" | "m3", string>;
// A pragmatic usage of the Record mapped type is when you are receiving user input data and need to convert it into a strongly-typed object.
// This scenario is quite common if you take input from a web form. The user enters data as a string, but the business logic requires a
// type such as a number, boolean, etc.
//It’s always better to throw an object instead of a string. The reason is that throwing an object comes with a whole execution stack since the object must inherit from the base interface Error.
// class MySpecificError extends Error {
//   public data: string;
//   constructor(data: string, message: string) {
//     super(message);
//     Object.setPrototypeOf(this, MySpecificError.prototype); // Restore prototype chain
//     // OR:
//     // Object.setPrototypeOf(this, new.target.prototype); // Restore prototype chain
//     this.data = data;
//   }
// }
// throw new MySpecificError("dataHere", "My Message");
// The code above needed to have a call to Object.setPrototypeOf and you may ask why. The reason is that with the introduction of TypeScript version 2.1 when using EcmaScript 6, the Error constructor uses new.target to handle the prototype chain
// function withPromise(p1: number): Promise<string> {
//   if (p1 > 10) return Promise.reject("My error message");
//   return Promise.resolve("String as expected when all good");
// }
// console.log(withPromise(12));
// console.log(withPromise(8));
//The object sent by the exception into the catch clause can use instanceOf to narrow a particular treatment depending on the type.
//The reason is that since TypeScript 2.1, the constructor functions Error, Array, and Map don’t propagate.
//The workaround is using the setPrototypeOf function in the constructor of each class in the hierarchy. The function sets the prototype to another object.
// class ArgumentNullException extends Error {
//   constructor(public name: string) {
//     super("Argument was undefined");
//     // Object.setPrototypeOf(this, ArgumentNullException.prototype);
//   }
// }
// class ReferenceException extends Error {
//   constructor(public x: number, public y: number) {
//     super("Reference was undefined");
//     Object.setPrototypeOf(this, ReferenceException.prototype);
//   }
// }
// function throwTwoExceptions(switcher: boolean) {
//   if (switcher) {
//     throw new ArgumentNullException("Switcher");
//   }
//   throw new ReferenceException(1, 2);
// }
// try {
//   throw new ArgumentNullException("Switcher");
// } catch (ex) {
//   if (ex instanceof ArgumentNullException) {
//     console.log("I can access name:" + ex.name);
//   } else if (ex instanceof ReferenceException) {
//     console.log("I can access x and y:" + ex.x + " and " + ex.y);
//   }
// }
// interface Animal {
//   name: string;
//   sound: string;
// }
// interface Human {
//   name: string;
//   nickname: string;
// }
// type LivingThing = Extract<keyof Animal, keyof Human>;
// function sayMyName(who: Record<LivingThing, string>): void {
//   console.log(who.name);
// }
// const animal: Animal = { name: "Lion", sound: "Rawwwhhh" };
// const human: Human = { name: "Jacob", nickname: "Jaco-bee" };
// sayMyName(animal);
// sayMyName(human);
// interface Animal {
//   name: string;
//   gender: string;
//   sound: string;
// }
// interface Human {
//   name: string;
//   gender: string;
//   nickname: string;
// }
// // type LivingThing = Extract<keyof Animal, keyof Human>;
// type LivingThing = Exclude<keyof Animal, "sound">;
// function sayMyName(who: Record<LivingThing, string>): void {
//   console.log(who.name + " is of type " + who.gender);
// }
// const animal: Animal = { name: "Lion", sound: "Rawwwhhh", gender: "Male" };
// const human: Human = { name: "Jacob", nickname: "Jaco-bee", gender: "Boy" };
// sayMyName(animal);
// sayMyName(human);
// type LivingThing = Exclude<keyof Animal, keyof NoisyLivingSpecies>;
// function getName(): string {
//   return "Name";
// }
// type FunctionType = ReturnType<typeof getName>;
// const varX: FunctionType = "This is a string";
// console.log(varX);
//ReturnType becomes important in case the return type changes in the future
// conditional types
// async function asyncFunction(){
//   return await Math.random();
// }
// type functionType4 = ReturnType<typeof asyncFunction>; // Promise<number>
// type functionType5 = ReturnTypeFromPromise<functionType4>; // number
// type ReturnTypeFromPromise<T> = T extends Promise<infer U> ? U : T;
// let arr = ["a", "b", "c"];
// for (let i in arr) console.log(i);
// for (let value of arr) console.log(value);
// let obj = {
//   name: "Nikola",
//   surname: "Tesla",
// };
// for (let i in obj) console.log(i);
// for of does not exists for objects
// let listArrayPrimitive = { m1: "valuem1", m2: 2 };
// const keys = Object.keys(listArrayPrimitive);
// const entries = Object.entries(listArrayPrimitive); // require to have "lib": [ "es2017.object" ]
// console.log("keys", keys);
// console.log("entries", entries);
// Index signature
// interface MyGenericDictionary<T> {
//   // Generic for the value
//   [id: string]: T; // The type T is the only accepted value
// }
// const dict2: MyGenericDictionary<string> = {
//   ["100"]: "hundred",
//   ["200"]: "two hundreds",
// };
// const dict3: MyGenericDictionary<number> = { ["100"]: 100, ["200"]: 200 };
// console.log(dict2);
// console.log(dict3);
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
var a = init();
a();

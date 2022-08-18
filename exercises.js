// class Base {
//   name = "base";
//   constructor() {
//     console.log("My name is " + this.name);
//   }
// }
// class Derived extends Base {
//   name = "derived";
//   constructor() {
//     super();
//     console.log("My name is " + this.name);
//   }
// }
// // Prints "base", not "derived"
// const d = new Derived();
// console.log(d.name);
// class Base {
//   protected m = 10;
//   display() {
//     console.log(this.m);
//   }
// }
// class Derived extends Base {
//   // No modifier, so default is 'public'
//   m = 15;
// }
// const d = new Derived();
// const b = new Base();
// // console.log(b.m);
// console.log(d.m); // OK
// d.display();
// class Base {
//   constructor() {
//     Object.defineProperty(this, "x", {
//       enumerable: true,
//       configurable: true,
//       writable: true,
//       value: 1,
//     });
//   }
// }
// class Derived1 extends Base {
//   constructor() {
//     super(...arguments);
//     Object.defineProperty(this, "x", {
//       enumerable: true,
//       configurable: true,
//       writable: true,
//       value: 5,
//     });
//   }
// }
// class Derived2 extends Base {
//   display() {
//     console.log(this.x);
//   }
//   f1(other) {
//     other.x = 10;
//   }
// }
// class A {
//   constructor() {
//     Object.defineProperty(this, "x", {
//       enumerable: true,
//       configurable: true,
//       writable: true,
//       value: 10,
//     });
//   }
// }
// const a = new A();
// console.log(a["x"]);

class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  };
}

const batman = new Hero("Batman");

setTimeout(batman.logName, 1000);

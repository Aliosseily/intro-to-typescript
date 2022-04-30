// modifiers
// modifiers are keywords that we can place on different methods and properties inside of class.
// the goal of these modifires is to restrict access to different functions or different variables.
// public: This method can be called any where, any time. (by default)
// private: This method can only be called by other methods in the same class.
/* 
protected: This method can only be called by other methods in the same class, or by other
           methods in child classes.
*/

// we donot mark methods as being private over any type of security like being hacked
// or some thing like that or having some malicious user
// when we define a method as private, we are not adding in any layer of application security.
// the only reason to mark something as private is to restrict the different methods
// that other developers can call.
//And the reason we want to do that is if we might have a method that very deeply
//manipulates a class and maybe there's some, like, really complicated special way to use it.
//And maybe we don't trust other developers to call that method safely.
//If other developers call a given method, they might just inadvertently break something
//inside of application.
//And so if that's the case, if we have some method that we just don't want other developers to call
//because it's very likely they're going to break something, we will mark it as being private.

class Vehicle {
  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }
  // this shorthand of the above
  // we can add modifiers to ovariables as well
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// vehicle.honk(); you cannot call honk because it is protected modifier

class Car extends Vehicle {
  // if we ovverride a method from parent class like drive, we cannot the modifier here in the child class
  // we use private whenever we want to restrict access to a function.
  constructor(public wheels: number, color: string) {
    super(color); // call the constructor of parent class
  }
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
// car.honk(); you cannot call honk because it is protected modifier

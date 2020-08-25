// A Class is a blueprint to create an object with some(fields) values and (methods)
// functions to represent a thing

// 1) This method can be called anywher, anytime
// 2) This method can only be called by other methods in this class
// 3) This method can be called by other methods in this class, or by other methods in child classes

class Vehicle {
  // This is a public method by default
  honk(): void {
    console.log("beeeeeee");
  }

  //  protected method is initialized with the word "protected"
  protected tyres(): void {
    console.log("change them");
  }
}

class Car extends Vehicle {
  // Public method specified, "default" can be omitted
  public drive(): void {
    console.log("gooooooooo");
  }
  //   privite property, initialized with the word "private"
  private lookUnderHood(): void {
    console.log("parts");

    //   Now chiled via via inheritance are able to use it
    this.tyres();
  }
}

const car = new Car();

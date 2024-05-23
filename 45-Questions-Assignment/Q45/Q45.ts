function Cars(
  Manufacturer: string,
  Model_Name: string,
  Color?: string,
  Optional_Feature?: string
): object {
  let car_object: {
    Manufacturer: string;
    Model_Name: string;
    Color?: string;
    Optional_Feature?: string;
  } = {
    Manufacturer: Manufacturer,
    Model_Name: Model_Name,
  };
  if (Color != undefined) {
    car_object.Color = Color;
  }
  if (Optional_Feature != undefined) {
    car_object.Optional_Feature = Optional_Feature;
  }
  return car_object;
}
let carObject = Cars("Toyota", "Corolla")
let carObject2 = Cars("Toyota", "Supra", "Red", "Turbo")

console.log(carObject);
console.log(carObject2);



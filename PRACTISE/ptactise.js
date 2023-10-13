let obj = {
  car: "Porshe",
  number: 123,
};

let copy = Object.assign({}, obj);
obj.name = "Elen";

console.log(copy);

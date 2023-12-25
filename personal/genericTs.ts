// generic

// -------------1------------

// function getSize(arr:number[]): number {
//     return arr.length;
// }

const getSize = <T>(arr: T[]): number => {
  return arr.length;
};

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize(arr3);

// --------------2-----------------

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m12: Mobile<string> = {
  name: "s21",
  price: 1000,
  option: "good",
};

// --------------3--------------------

interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "bmw", color: "red" };
const book: Book = { price: 3000 };

const showName = <T extends { name: string }>(data: T): string => {
  return data.name;
};

showName(user);
showName(car);
// showName(book);

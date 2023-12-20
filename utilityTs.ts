//keyof

interface User2 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User2; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "age";

//Partial<T> : 모든 프로퍼티를 옵셔널로 변경시킨다.

interface User3 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin: Partial<User3> = {
  id: 1,
  name: "Bob",
};

//Required<T> : 모든 프로퍼티를 필수로 변경시킨다.
interface User4 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Required<User4> = {
  id: 1,
  name: "Bob",
  age: 4,
};

//Readonly<T> :프로퍼티를 읽기 전용으로 변경시킨다. 객체 생성시 할당 가능하고 이후 수정이 불가능.

//Record<K,T>

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

const score: Record<Grade, Score> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

interface User5 {
  id: number;
  name: string;
  age: number;
}

const isValid = (user: User5) => {
  const result: Record<keyof User5, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
};

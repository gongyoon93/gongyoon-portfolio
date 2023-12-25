function makeCounter() {
  let num = 0; // 은닉화

  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2

// 클로져는 함수와 렉시컬 환경의 조합이다. 함수가 생성(호출)될 시점의 외부 변수를 기억, 생성 이후에도 접근 가능

// 함수 선언문(표현식은 x)은 코드가 실행될 때 초기화 됨 -전역 렉시컬 환경의 makeAdder이 function으로 초기화(let과 const는 초기화 x, ,var는 o)
// 함수가 호출되었을 때 함수의 렉시컬 환경이 생성된다. - makeAdder(3) 호출로 함수 렉시컬 환경 생성, 전역 렉시컬의 add3이 function으로 초기화,
//                                                                             add3(2)를 호출해서 익명함수의 렉시컬 환경이 생성
// 최근 렉시컬 환경을 따라 변수를 찾아 외부 역순으로 참조해간다.

// counter를 초기화, 리턴하는 값이 있어야 하므로 함수를 리턴하는 함수 구조를 갖고 있다.

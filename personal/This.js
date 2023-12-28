function test() {
  console.log(this);
}

test();

function main() {
  console.log(this);
}

const object = {
  name: "gongyoon",
  main,
};

main();
object.main();

// -----------------------------------

function main2() {
  console.log(this);
}

main2();

const mainBind = main2.bind({ name: "h1" });
mainBind();

const object2 = {
  mainBind,
};

object2.mainBind();

// -----------------------  This --------------------------------
// - this는 함수를 호출하는 객체이다.
// - window객체는 브라우저에 대한 정보를 갖고 있는 전역 객체이다. 전역적인 문맥(전역 스코프)에서 전역함수의 this에 접근하면
//   this는 window객체(전역 객체)가 된다. use strict(엄격 모드)에서는 undefind가 된다.
// - bind({name: 'h1'})을 호출하면 호출한 객체는 {name:'h1'}이 된다.
//   메소드인 경우 객체가 아닌 객체의 메소드에 bind를 걸어 this 값을 변경한다.
// - 함수(function(){console.log(this)})를 DOM요소(button)의 이벤트 처리기(addEventListener)로 사용할 경우 이벤트를 발생한 DOM요소가
//   this값이 된다.
// - 함수 선언문에서의 this는 함수를 호출하는 방법에 따라 this가 변화, bind 사용하지만 함수 표현식(arrow function)은 호출에 따라서
//   this가 변하지 않는다.

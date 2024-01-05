// 로그인 방식은 왜 필요할까?

// 무상태(Stateless)
// 비 연결적인 특성으로 연결이 해제됨과 동시에 서버와 클라이언트는 클라이언트가 이전에 요청한 결과에 대해 잊어버리게 된다. 따라서 요청을 할 때마다 서버에 연결을 해야한다.
// HTTP의 이러한 특성으로 인해 'Stateless Protocol'이라고 불리기도 하며 웹사이트는 매 페이지에서 로그인이 되어있는 상태인지 확인하는 로그인 인증 방식이 필요하다.

// session 방식이란?
// 방문자가 웹서버에 접속해 있는 상태를 하나의 단위로 보고 그것을 session이라고 한다.
// 웹서버는 이러한 각 단위에 세션 Id를 부여하고 같은 브라우저인지 구별한다.
// 브라우저를 닫거나 서버에서 이 (세션 Id가 들어있는)쿠키를 삭제했을때 삭제가 된다.
// session을 사용한다고 해서 cookie를 안쓰는 것은 아니다. 다만 cookie에 중요 정보를 넣지 않았기 때문에 탈취 되더라도 해석해도 의미없는 문자열인 세션 Id가 들어있다.

// session 방식의 flow
// 1.
// 클라이언트가 서버에게 로그인 정보가 들어있는 파라미터와 함께 login 요청을 한다.
// 2.
// 서버에서 login인증을 하고 정보가 올바르면 세션 객체를 생성하고 세션 Id를 Set-cookie를 통해 클라이언트에게 전달한다.
// 3.
// 세션 객체는 서버에 저장해놓는다.
// 4.
// 클라이언트가 서버에 작업을 요청할 때 요청 헤더에 세션 Id가 같이 전달된다(쿠키이므로 통신시 계속 왔다갔다함)
// 5.
// 서버에서는 클라이언트로부터 받은 요청헤더에 세션Id를 확인해서 세션 객체를 검색하고 정보가 있으면 요청한 작업에 대해 응답해주고 통신을 종료한다.
//  장점
// 쿠키방식과 동일하지만 쿠키에 아무런 의미가 없는 세션Id가 저장이 되므로 탈취되더라도 해석할 수 없다.
//  단점
// 하지만 해커가 중간에 가로채서 훔친 쿠키로 http요청을 보낼 수 있는 하이재킹 공격을 당할 수 있다.
//        해결법 : (1) HTTPS를 사용해 요청 자체를 탈취해도 안의 정보를 읽기 힘들게 한다.
//                (2) 세션에 유효시간을 넣어 유효시간이 끝나면 더이상 해커가 이용할 수 없게 한다.
// 서버에 세션객체를 저장해놓기 때문에 사용자가 다수일 경우 부하가 높아진다.
// 확장시 모든 서버가 접근할 수 있도록 별도의 중앙 세션 관리 시스템이 필요하다
// 확장성이 좋지 않다 (여러 대의 서버 컴퓨터를 추가할 경우 각 서버마다 세선 정보가 저장되기 때문에)
// CORS : 웹 어플리케이션에서 세션을 관리할 때 자주 사용되는 쿠키는 단일 도메인 및 서브 도메인에서만 작동하도록 설계되어 있다. 따라서 쿠키를 여러 도메인에서 관리하는것은 번거롭다
//  토큰 방식 (ft.JWT)
// 토큰 방식의 대표 JWT는 Json Web Token의 약자로 세션방식과 유사하게 token에 사용자를 인증할 수 있는 여러 정보를 실어서 클라이언트에게 보내준다.
// JWT란?
// 세션 방식과 큰 차이는 인증 정보를 서버쪽에 저장을 하지 않는 다는 것이다.  idle에 jwt를 추가하면 여러가지 메소드를 사용할 수 있게 되는데 이것을 이용하여 뚝딱뚝딱 넣고 싶은 정보를 넣어서 token을 만들어 낸다. 이 token은 육안으론 해석하기 힘든 문자열로 만들어져 있고  https://jwt.io/에서 해독하면 json형태로 들어있는 정보를 볼 수 있다.

// JWT의 flow

// 1.
// 클라이언트가 서버에게 로그인 정보가 들어있는 파라미터와 함께 login 요청을 한다.(세션과 동일)
// 2.
// 로그인 정보가 올바르면 서버에서 (해독하면)json형식으로 된 토큰을 발행한다.
// (이 토큰안에는 넣고 싶은 정보를 모두 넣을 수 있는데 이 토큰이 클라이언트에게 보내지기 때문에 탈취 당할 위험이 있으므로 비밀번호와 같은 중요 정보는 넣지 않아야한다.)
//  3.  발급한 후 JWT를 브라우저로 보낸다. (헤더 또는 쿠키 등을 통해)
//  4. 이후 클라이언트는 이 토큰을 어딘가(세션스토리지, 로컬스토리지 등) 저장해 놓았다가(또는 쿠키) 요청시마다 함께 서버로 보낸다.
//  5. 서버에서는 요청과 함께 온 토큰을 해독해서 만료시간이 지났는지, 사용자가 맞는지 등을 확인한다.
//  6. 요청 작업에 대해 응답해주고 통신을 종료한다.
//  장점
// auth0을 이용하면 아이디를 카카오, 네이버처럼 다른 사이트에서 이용할 수 있다
// 서버측 부하를 낮출 수 있고 독립적이기 때문에 능률적으로 접근 권한관리를 할 수 있고 분산/클라우드 기반 인프라 스트럭처에 잘 대응할 수 있다.
// 별도의 인증 저장소가 필요하지 않다. 인증서버와 db에 의존하지 않아도 된다.
//  단점
// 서버로부터 받은 토큰이 쿠키 또는 로컬스토리지, 세션스토리지에 저장이 되므로 탈취당할 위험은 있다. 따라서 token에 중요 정보를 넣어 놓지 않아야한다.
// 토큰에 넣는 데이터가 많아질 수록 토큰이 길어지는데 매 api호출 시마다 토큰 데이터를 서버에 전달하는데 그만큼 네트워크 대역폭 낭비가 심할 수 있다.
// 한번 발급된 token은 수정, 폐기가 불가하다.
// 해결법 :  Access token의 Expire time을 짧게 하고 Refresh token을 이용해서 중간중간 Access token을 재발급하게 해서 Access token이 탈취되더라도 해커가 이용할 수 있는 시간을 최소화한다.

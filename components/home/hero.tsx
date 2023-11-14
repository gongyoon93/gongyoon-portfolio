import Link from "next/link";
import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          저는 성장하는 프론트엔드 개발자 GongYoon 입니다.
          <br className="hidden lg:inline-block" />
          오늘도 한 단계 성장하고자 합니다.
        </h1>

        {/* <p className="mb-8 leading-relaxed">
          모든 국민은 종교의 자유를 가진다. 모든 국민은 통신의 비밀을 침해받지
          아니한다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
          압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을
          제시하여야 한다.
        </p> */}
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;

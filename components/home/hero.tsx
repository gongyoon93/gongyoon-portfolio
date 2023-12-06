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

        <p className="mb-8 leading-relaxed">
          주도적으로 성장할 수 있는 포인트를 찾으며 <br />
          새로운 인사이트를 얻을 수 있는 준비가 되어 있습니다.
        </p>
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

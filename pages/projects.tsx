import Head from "next/head";
import Layout from "../components/layout";
import { GetStaticProps } from "next";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import { ProjectInfo } from "../type";

const Projects = ({ projects }: { projects: ProjectInfo[] }) => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
          <Head>
            <title>GongYoon Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-4xl font-bold sm:text-6xl">
            총 프로젝트:
            <span className="pl-4 text-blue-500">{projects.length}</span>
          </h1>
          <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectItem key={project.id} data={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;

// 빌드 타임에 호출
export const getStaticProps: GetStaticProps = async (context) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "descending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const results = await res.json();
  const projects = await results.results;

  return { props: { projects }, revalidate: 1 };
  // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
  // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
};

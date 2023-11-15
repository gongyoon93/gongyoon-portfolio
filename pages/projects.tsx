import Head from "next/head";
import Layout from "../components/layout";
import { GetStaticProps } from "next";
import { TOKEN, DATABASE_ID } from "../config";

interface ProjectInfo {
  id: string;
  properties: {
    이름: { id: string; type: string; title: { plain_text: string }[] };
    날짜: {
      id: string;
      type: string;
      date: { start: Date | null; end: Date | null };
    };
    태그: {
      id: string;
      type: string;
      multi_select: { name: string; color: string }[];
    };
  };
  url: string;
}

const Projects = ({ projects }: { projects: ProjectInfo[] }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>GongYoon Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>총 프로젝트: {projects.length}</h1>

        {projects.map((project) => (
          <>
            <h1 key={project.id}>
              {project.properties["이름"].title[0].plain_text}
            </h1>
          </>
        ))}
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

  return { props: { projects } };
};

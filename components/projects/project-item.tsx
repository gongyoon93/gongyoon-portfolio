import { ProjectInfo } from "../../type";
import Image from "next/image";

type InfoProps = {
  data: ProjectInfo;
};

const ProjectItem = ({ data }: InfoProps) => {
  const cover = data.cover.file?.url || data.cover.external.url;
  const title = data.properties["이름"].title[0]?.plain_text;
  const description = data.properties["설명"].rich_text[0]?.plain_text;
  const tags = data.properties["태그"]?.multi_select;
  const notionUrl = data?.url;
  const url = data.properties["URL"].url;
  const github = data.properties["GitHub"].rich_text[0]?.href;
  const notionType =
    data.properties["타입"].rich_text[0]?.plain_text === "Notion";
  const start = data.properties["날짜"].date?.start?.toString();
  const end = data.properties["날짜"].date?.end?.toString();

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={cover}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">
          {notionType && notionUrl ? (
            <a className="mg-0.25rem" target="_blank" href={notionUrl}>
              {title}
            </a>
          ) : (
            title
          )}
        </h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        {/* 링크는 새로운 창이 열리도록 수정  */}
        {url && (
          <a className="mt-2" target="_blank" href={url}>
            URL 바로가기
          </a>
        )}
        {github && (
          <a className="mt-2" target="_blank" href={github}>
            Github 바로가기
          </a>
        )}
        {start || end ? (
          <p className="mt-2 ">
            작업기간 : {start} {start && end ? "~" : ""} {end}
          </p>
        ) : (
          ""
        )}
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

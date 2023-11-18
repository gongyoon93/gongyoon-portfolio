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
  const url = data?.url;
  //   const github = data.properties.GitHub
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
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        {url && (
          <a target="_blank" href={url}>
            URL 바로가기
          </a>
        )}{" "}
        {/* 링크는 새로운 창이 열리도록 수정  */}
        {start || end ? (
          <p className="my-1 ">
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

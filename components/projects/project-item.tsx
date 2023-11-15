import { ProjectInfo } from "../../type";
import Image from "next/image";

type InfoProps = {
  data: ProjectInfo;
};

const ProjectItem = ({ data }: InfoProps) => {
  const cover = data.cover.file?.url || data.cover.external.url;
  const title = data.properties["이름"].title[0].plain_text;
  const description = data.properties["설명"].rich_text[0].plain_text;
  const tag = data.properties["태그"].multi_select;
  //   const github = data.properties.GitHub
  const duration = `${data.properties["날짜"].date.start} ~ ${data.properties["날짜"].date.end}`;

  return (
    <div className="flex flex-col m-3 bg-slate-700 rounded-xl w-full">
      <Image
        className="rounded-t-xl"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
        alt="cover image"
        src={cover}
      />
      <div className="p-4 flex flex-col">
        <h1>{title}</h1>
        <h3>{description}</h3>
        <a href="">깃허브 바로가기</a>
        {/* <h1>
        {tag.map((item) => (
          <span>{item}</span>
        ))}
      </h1> */}
        <h1>{duration}</h1>
      </div>
    </div>
  );
};

export default ProjectItem;

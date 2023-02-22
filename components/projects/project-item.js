import Image from "next/image";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.이름.title[0]?.plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select

  return (
    <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md w-full">
      <Image
        src={imgSrc}
        width={100}
        height={60}
        layout="reponsive"
        objectFit="none"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>

        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tags.id}>{aTag.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

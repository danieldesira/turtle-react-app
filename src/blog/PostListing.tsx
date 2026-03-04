import SafeRawHtmlWrapper from "./SafeRawHtml";

type Props = {
  title: string;
  authorName: string;
  excerpt: string;
  modifiedDate: string;
};

function PostListing({ title, authorName, excerpt, modifiedDate }: Props) {
  return (
    <div className="flex flex-col gap-1 bg-primary text-white rounded-sm p-2 max-w-96">
      <div className="flex gap-2">
        <span className="font-bold text-xl">{title}</span>
        <span className="font-light text-lg">{authorName}</span>
      </div>
      <div className="font-medium text-sm">
        <SafeRawHtmlWrapper html={excerpt} />
      </div>
      <span className="font-light text-sm">
        {modifiedDate.replace("T", " ")}
      </span>
    </div>
  );
}

export default PostListing;

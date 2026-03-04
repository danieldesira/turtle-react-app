import { Link } from "react-router";
import SafeRawHtmlWrapper from "./SafeRawHtml";

type Props = {
  id: number;
  title: string;
  authorName: string;
  excerpt: string;
  modifiedDate: string;
};

function PostListing({ id, title, authorName, excerpt, modifiedDate }: Props) {
  return (
    <Link to={`/blog/${id}`}>
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
    </Link>
  );
}

export default PostListing;

import SafeRawHtmlWrapper from "./SafeRawHtml";
import { formatDate } from "./utils";

type Props = {
  authorName: string;
  date: string;
  content: string;
  isEven: boolean;
};

function Comment({ authorName, date, content, isEven }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 ${isEven ? "bg-slate-800" : "bg-primary"} text-white p-2 rounded-sm`}
    >
      <SafeRawHtmlWrapper html={content!} />
      <div className="flex justify-between">
        <span className="font-light text-lg">{authorName}</span>
        <span className="font-light text-sm">{formatDate(date!)}</span>
      </div>
    </div>
  );
}

export default Comment;

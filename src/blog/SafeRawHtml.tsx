type Props = { html: string };
import DOMPurify from "dompurify";

function SafeRawHtmlWrapper({ html }: Props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
  );
}

export default SafeRawHtmlWrapper;

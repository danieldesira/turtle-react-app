import { useLoaderData } from "react-router";
import type { GetPostRepliesResponse, Post } from "./interfaces";
import SafeRawHtmlWrapper from "./SafeRawHtml";
import { formatDate } from "./utils";
import Comment from "./Comment";

function PostPage() {
  const { post, replies } = useLoaderData() as {
    post: Post;
    replies: GetPostRepliesResponse;
  };

  return (
    <div className="flex flex-col gap-3">
      <header
        className="flex justify-center items-center flex-wrap py-38 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url(${post.featured_image})` }}
      >
        <h2 className="text-2xl font-bold">{post.title}</h2>
      </header>
      <div className="flex flex-col p-2 gap-2">
        <SafeRawHtmlWrapper html={post.content!} />
        <span className="font-light text-lg">{post.author?.nice_name}</span>
        <span className="font-light text-sm">{formatDate(post.modified!)}</span>
      </div>
      {replies.found ? (
        <div className="flex flex-col p-2 gap-2">
          <h3 className="text-xl font-bold">Comments</h3>
          {replies.comments?.map(({ ID, author, date, content }, index) => (
            <Comment
              key={ID}
              authorName={author?.nice_name ?? ""}
              date={date!}
              content={content!}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      ) : (
        <span>No comments yet... Be the first!</span>
      )}
    </div>
  );
}

export default PostPage;

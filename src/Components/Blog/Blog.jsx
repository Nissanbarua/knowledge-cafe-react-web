import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { cover, title, hashtag, author_img, author, post_date, reading_time } =
    blog;

  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between mt-4  ">
        <div className="flex justify-center items-center">
          <img className="w-[60px]" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="font-bold text-2xl"> {author} </h3>
            <p> {post_date} </p>
          </div>
        </div>
        <div className="flex space-x-4 justify-center items-center mr-4">
          <p>{reading_time} min read</p>
          <span className="text-2xl" onClick={() => handleAddToBookmark(blog)}>
            {" "}
            <CiBookmark></CiBookmark>{" "}
          </span>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4">
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button onClick={()=> handleMarkAsRead(reading_time)} className="text-purple-600 underline">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;

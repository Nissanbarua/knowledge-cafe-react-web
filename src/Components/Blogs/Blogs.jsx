import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

 
const Blogs = ({ handleAddToBookmark,handleMarkAsRead }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="grid col-span-2">
      {blog.map((blog) => (
        <Blog
        handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead : PropTypes.func
};
export default Blogs;

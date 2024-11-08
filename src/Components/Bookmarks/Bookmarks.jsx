import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="">
      <div>
        <h3 className="text-2xl">Reading Time : {readingTime}</h3>
      </div>
      <h2 className="font-bold text-2xl">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;

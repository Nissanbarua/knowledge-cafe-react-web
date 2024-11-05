import "./App.css";
import Blog from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
     <Header></Header>
     <main className="grid grid-cols-3 mx-auto container">
     <Blog></Blog>
     <Bookmarks></Bookmarks>
     </main>
    </>
  );
}

export default App;

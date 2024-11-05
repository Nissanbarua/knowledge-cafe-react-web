import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
          const [blog, setBlog] = useState([])

          useEffect(()=>{
                    fetch('blog.json')
                    .then(res =>res.json())
                    .then(data => setBlog(data))
          },[])
          return (
                    <div className="grid col-span-2">
                            <h2 className="text-4xl">Blog</h2> 
                    </div>
          );
};

export default Blogs;
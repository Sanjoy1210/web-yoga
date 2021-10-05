import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Posts from '../Posts/Posts';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('./blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="blogs-section">
      <div className="blog-title">
        <p className="text-center text-danger fw-bold">// Our Blogs</p>
        <h1 className="text-center fw-bolder">Read Our Articles</h1>
      </div>
      <div className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
              }
            </div>
            <div className="col-md-4">
              <div className="search-container w-100 mb-4">
                <input
                  type="text"
                  placeholder="search..."
                />
                <button className="search-btn"><i className="fa fa-search search-icon"></i></button>
              </div>

              <div className="recent-post">
                <h3>Recent Posts</h3>
                <Posts></Posts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
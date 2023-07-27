import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import BlogForm from "./components/BlogForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShadowContext from './context/ShadowContext';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState("false");
  const [filteredData, setfilteredData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setBlogs(response.data);
        setfilteredData(response.data);
        setData("true");
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}/`)
      .then(() => setBlogs(blogs.filter((blog) => blog.id !== id)))
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    let keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    let arr = [];
    arr = blogs.filter((blogs) => blogs.title.toLowerCase().includes(keyword));
    setfilteredData(arr);
  };
  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------
  const shadow = "shadow-lg shadow-slate-700"; // Move the shadow variable here

  return (
    <Router>
      <Navbar />
      <div className="mx-auto container my-5 ">
    
        <Routes>
          <Route
            index
            element={
              <ShadowContext.Provider value={shadow}>
              <BlogList
                blogs={blogs}
                setBlogs={setBlogs}
                filteredData={filteredData}
                handleSearch={handleSearch}
                handleDelete={handleDelete}
                data={data}
              /> 
              </ShadowContext.Provider>
            }
          />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="blog/manage/:id?" element={<BlogForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

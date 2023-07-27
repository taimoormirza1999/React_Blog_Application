import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BlogForm() {
  const { id } = useParams();
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/admin/post/${id}`)
        .then((response) => {
          setTitle(response.data.title);
          setExcerpt(response.data.excerpt);
          setSlug(response.data.slug);
          setContent(response.data.content);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { title, excerpt, content, slug };
    const url = id
      ? `http://127.0.0.1:8000/api/admin/post/${id}`
      : "http://127.0.0.1:8000/api/admin/post";
    const method = id ? "put" : "post";
    console.log(url);
    axios[method](url, data)
      .then(() => history("/"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="max-w-2xl mx-auto mt-6">
        <h1 className="mb-4 text-xl font-extrabold  text-slate-300 md:text-2xl lg:text-3xl ">
          {id ? "Edit" : "Create"} Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-400 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-full"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="excerpt"
              className="block text-gray-400 font-bold mb-2"
            >
              Excerpt
            </label>
            <input
              type="text"
              id="excerpt"
              className="border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-full"
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-gray-400 font-bold mb-2"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              className="border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-full"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-400 font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              className="border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-full"
              rows="8"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {id ? "Save" : "Create"}
            </button>
            <button type="button" onClick={() => history('/')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

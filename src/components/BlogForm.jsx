import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Heading from "./Heading";
import { memo } from "react";
import Input from "./Input";

function BlogForm() {
  const { id } = useParams();
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/admin/post/${id}`)
        .then((response) => {
          setTitle(response.data.title);
             })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSlug(title)
    const data = { title, excerpt, content, slug, userId: 1 };
    axios.post('http://restapiv1-env.eba-ndi2mqdf.ap-northeast-1.elasticbeanstalk.com/api/admin/post/', data)
    .then(response => {
      window.location.href="/";
    })
    .catch(error => console.log(error));
    // const url = id
  //     ? `https://jsonplaceholder.typicode.com/posts/${id}`
  //     : "https://jsonplaceholder.typicode.com/posts";
  //   const method = id ? "put" : "post";
  //   console.log(data);
  //   axios[method](url, data)
  //     .then(() => history("/"))
  //     .catch((error) => console.log(error));
  };
  // console.log("Form render");
  return (

    <>
      <div className="max-sm:w-4/5 w-1/2 mx-auto mt-6">
       
        <Heading text={id ? "Edit" : "Create"}/>

        <form onSubmit={handleSubmit}>
          <Input setTitle={setTitle} title={title} label="Title" />
          <Input setTitle={setExcerpt} title={excerpt} label="Excerpt" />
          {/* <Input setTitle={setContent} title={content} label="Content" /> */}
          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-400 font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="body"
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
export default memo(BlogForm);
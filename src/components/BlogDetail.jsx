import { useState, useEffect,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ShadowContext from '../context/ShadowContext';

import LinkButton from "./LinkButton";
import Comment from "./Comment";

export default function BlogDetail() {
  const shadow = useContext(ShadowContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response1) => setBlog(response1.data))
      .catch((error) => console.log(error));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => setComment(response.data))
      .catch((error) => console.log(error));
  
  }, [id]);

  if (!blog) {
    return <div className="text-white mx-auto my-3">Content is Loading...</div>;
  }
  return (
  
<div className={`mx-auto rounded-full my-5 ${shadow}`}>
  <div className={`imgsection relative bg-gray-700 sm bg-myColor rounded-lg ${shadow}`}>

<img className="mx-auto w-full max-h-96 transition-all duration-300  cursor-pointer object-cover px-3 pb-3 shadow-xl mb-5" src={`https://picsum.photos/1200/630?car=${id}`} alt="image description"/>
<div className="inner_imagesection">
<div className="relative">
<img className={`w-10 h-10  p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 shadow-lg rounded-full absolute bottom-1 left-2 ${shadow}`} src={`https://picsum.photos/500/300?person=${id}`} alt=""/>
<span className="bottom-0 left-8 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
</div>
  </div>
<section className="px-3">

<h1 className="mb-4 text-xl font-extrabold text-gray-400 dark:text-white md:text-2xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-300 from-slate-400 capitalize">{blog.title}</span></h1>
<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{blog.body.charAt(0).toUpperCase()+blog.body.slice(1)}. </p>
<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet assumenda corrupti. Quisquam beatae odio ducimus ratione placeat libero hic dolores, voluptatibus magni. Asperiores vel sunt tempora, possimus exercitationem rerum eos, iste repudiandae debitis molestiae ab. Quisquam debitis facilis quidem odio in. Reiciendis incidunt possimus quam ipsum nam porro inventore quaerat debitis, quibusdam hic recusandae fuga odit fugiat quidem iusto molestiae dolorem expedita doloremque. Consectetur rerum soluta quasi fuga nesciunt corporis ipsam, rem beatae, saepe laborum natus perferendis quam illum labore voluptatem ipsa! Molestiae, culpa. Nobis itaque dolorum tempore molestiae mollitia nisi dignissimos sequi pariatur, saepe, officiis aspernatur dicta vel esse nesciunt accusantium facere ex sit dolor sapiente delectus illum illo. Perferendis hic quas vel quod, nostrum accusantium dolore quibusdam sed voluptate ullam laborum in cumque molestiae labore dolorem, distinctio suscipit. Provident repudiandae dolorem a ratione architecto repellat aliquam? Quaerat optio ex molestias accusantium vel, libero accusamus assumenda natus autem.</p>

</section>

<section className="px-3">
  <div className="my-3">
    <h5>{5} comments</h5>
{comment.map((comment,index)=> <Comment title={comment.body} key={index} name={comment.name} />)}


  </div>
</section>
</div>
  );
}

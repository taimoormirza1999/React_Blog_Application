import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Text from "./Text";
import Heading from "./Heading";
import LinkButton from "./LinkButton";
import Comment from "./Comment";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState(null);
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
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto rounded-full ">
      <div className="imgsection relative bg-gray-700 sm bg-myColor rounded-lg">
        <img
          className="mx-auto w-full max-h-96 transition-all duration-300  cursor-pointer object-cover px-3 pb-3 shadow-xl mb-5"
          src={`https://picsum.photos/1000/300?car=${id}`}
          alt="image description"
        />
        <div className="inner_imagesection">
          <div className="relative">
            <img
              className="w-10 h-10  p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 shadow-lg rounded-full absolute bottom-5 left-2 "
              src={`https://picsum.photos/500/300?car=${id}`}
              alt=""
            />
            <span className="bottom-5 left-8 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
      </div>
      <section className="px-3">
        <Heading text={blog.title} />
        <Text
          size="sm"
          text={blog.body.charAt(0).toUpperCase() + blog.body.slice(1)}
        />
        <Text
          size="sm"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
          assumenda corrupti. Quisquam beatae odio ducimus ratione placeat
          libero hic dolores, voluptatibus magni. Asperiores vel sunt tempora,
          possimus exercitationem rerum eos, iste repudiandae debitis molestiae
          ab. Quisquam debitis facilis quidem odio in. Reiciendis incidunt
          possimus quam ipsum nam porro inventore quaerat debitis, quibusdam hic
          recusandae fuga odit fugiat quidem iusto molestiae dolorem expedita
          doloremque. Consectetur rerum soluta quasi fuga nesciunt corporis
          ipsam, rem beatae, saepe laborum natus perferendis quam illum labore
          voluptatem ipsa! Molestiae, culpa. Nobis itaque dolorum tempore
          molestiae mollitia nisi dignissimos sequi pariatur, saepe, officiis
          aspernatur dicta vel esse nesciunt accusantium facere ex sit dolor
          sapiente delectus illum illo. Perferendis hic quas vel quod, nostrum
          accusantium dolore quibusdam sed voluptate ullam laborum in cumque
          molestiae labore dolorem, distinctio suscipit. Provident repudiandae
          dolorem a ratione architecto repellat aliquam? Quaerat optio ex
          molestias accusantium vel, libero accusamus assumenda natus autem."
        />
      </section>

      <section className="px-3">
        <div className="my-3">
          <h5>{5} comments</h5>
          {comment.map((comment, index) => (
            <Comment title={comment.body} key={index} name={comment.name} />
          ))}
        </div>
      </section>
    </div>
  );
}

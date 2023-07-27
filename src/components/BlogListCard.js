import { Link } from "react-router-dom";
import Card from "./Card";

export default function BlogListCard(props) {

  return (
    props.filteredData.map((blog, index) => (
    <Link  to={`/blog/${blog.id}`} key={blog.id}>     
      <Card title={blog.title} excerpt={blog.body} id={blog.id}  handleDelete={props.handleDelete} Link={Link}/>

     </Link>
     ))
  );
}

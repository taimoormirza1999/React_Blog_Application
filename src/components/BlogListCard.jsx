import { Link } from "react-router-dom";
import Card from "./Card";
export default function BlogListCard({filteredData,handleDelete}) {
  
  return (
    filteredData.map((blog, index) => (
    <Link  to={`/blog/${blog.id}`} key={index} id={index}>     
      <Card title={blog.title} excerpt={blog.body} id={blog.id}  handleDelete={handleDelete} Link={Link}/>

     </Link>
     ))
  );
}

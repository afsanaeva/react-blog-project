import "./posts.css";
import { Link } from "react-router-dom";
export default function Posts() {
  return (
    <>
    <div className="post">
    <img
      className="postImg"
      src="https://headerpop.com/wp-content/uploads/2019/08/lifestyle-scaled.jpg"
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
      </div>
      <span>
      <Link to="/single" className="link postTitle">Lorem ipsum dolor sit ame</Link>
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>



  <div className="post">
    <img
      className="postImg"
      src="https://headerpop.com/wp-content/uploads/2019/08/lifestyle-scaled.jpg"
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
      </div>
      <span>
      <Link to="/single" className="link postTitle">Lorem ipsum dolor sit ame</Link>
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>


  </>
  )
}

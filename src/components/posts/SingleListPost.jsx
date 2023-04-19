import React from "react";
import { Link } from "react-router-dom";

function SingleListPost({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
        <p className="card-text">
          {item.body}
        </p>
        <Link to={`/posts/${item.uid}`} className="btn btn-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default SingleListPost;

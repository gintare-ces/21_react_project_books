import React from "react";
import { Link } from "react-router-dom";

function SinglePost({ item }) {
  return (
    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="card-body">
        <h5 className="card-title">{item?.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item?.author}</h6>
        <p className="card-text">
          {item?.body}
        </p>
        <div>
          Tags: {item?.tags}
        </div>
        <Link to={`/posts/`} className="btn btn-secondary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default SinglePost;

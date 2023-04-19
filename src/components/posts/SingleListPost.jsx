import React from "react";
import { Link } from "react-router-dom";
import { useAuthCtx } from "../../store/AuthProvider";

function SingleListPost({ item }) {
   const { user } = useAuthCtx()
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
        <img src={item.image} className="card-img-top w-50 h-60" alt={item.title} />
        <p className="card-text">
          {item.body}
        </p>
        <div className="d-flex gap-3 mb-3 fs-6">
        {item.tags.map((tag) => (
                <span className="badge text-bg-success " key={tag}> {tag}</span>
            ))}
        </div>
        {user.uid === item.userUid &&
            <button className="btn btn-danger">Delete</button>
        }
        <Link to={`/posts/${item.uid}`} className="btn btn-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default SingleListPost;

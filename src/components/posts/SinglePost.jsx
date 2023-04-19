import React from "react";
import { Link } from "react-router-dom";

function SinglePost({ item }) {
  const formatedDateAndTime = (msTime) =>
  new Date(msTime).toLocaleString('lt-LT', {
    dateStyle: 'medium',
    // timeStyle: 'medium',
  })
  return (
    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="card-body">
        <h5 className="card-title fs-4">{item?.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item?.author}</h6>
        <p className="card-text">
          {item?.body}
        </p>
        <img src={item?.image} className="card-img-top w-50" alt={item?.title} />
        <p className="mt-3">{item?.content}</p>
        <p className="fw-lighter">{formatedDateAndTime(item?.date)}</p>
        <div className="d-flex gap-3 mb-3">Tags: 
            {item?.tags.map((tag) => (
                <span className="badge text-bg-success fs-6" key={tag}> {tag}</span>
            ))}
        </div>
        <Link to={`/posts/`} className="btn btn-secondary">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default SinglePost;

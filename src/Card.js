import'./Card.css';
import Button from "./Button";

function Card({ name, desc, price }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <p className="fw-bold text-danger">Price: {price}</p>
          <Button text="Order Now" />
        </div>
      </div>
    </div>
  );
}

export default Card;
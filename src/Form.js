import'./Form.css';


function Form() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Make a Reservation</h2>
      <form className="mx-auto col-md-6">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Guests</label>
          <input type="number" className="form-control" min="1" required />
        </div>
        <button type="submit" className="btn btn-success w-100">Reserve Now</button>
      </form>
    </div>
  );
}

export default Form;
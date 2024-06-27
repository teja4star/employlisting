import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Empdetails = () => {
  const { empid } = useParams(     );

  const [empdata, empdatachange] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/Employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="card" style={{ textAlign: "left" }}>
      <div className="card-title">
        <h2>Employee Create</h2>
      </div>

      <div className="card-body"></div>
      {empdata && (
        <div>
          <h1>
            The employee name is : {empdata.name} ({empdata.id})
          </h1>

          <h3>Contact details</h3>

          <h5>Emial: {empdata.email}</h5>
          <h5>Emial: {empdata.phone}</h5>

          <Link className="btn btn-success" to="/"> return </Link>
        </div>
      )}
    </div>
  );
};

export default Empdetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [list, setList] = useState([]);
  let fetchData = async () => {
    let organisation = await axios.get("http://localhost:3001/organisation");
    setList(organisation.data);
    console.log(list);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center m-2">
        Registration of Organisation is Succesful
      </h1>
      <span className="ms-5">
        <Link to={"/"}>
          {" "}
          <input
            type={"submit"}
            className="btn btn-primary btn-lg"
            value={"Back to Registration"}
          ></input>
        </Link>
      </span>
      <h4 className="text-primary text-center mt-5">
        {" "}
        Registered Organisations
      </h4>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th className="col-6">Company Name</th>
            <th className="col-3">Website</th>
            <th className="col-3">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {list.map((values) => {
            return (
              <tr>
                <td>{values.companyName}</td>
                <td>{values.website}</td>
                <td>{values.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Registration;

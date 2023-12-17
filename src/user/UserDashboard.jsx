import React, { useState } from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function UserDashboard() {
  const { userName } = useProductProvider();
  const [pass, setPass] = useState(false);
  const toggle = () => {
    setPass(!pass);
  };
  return (
    <>
      <div className="container mt-5">
        <h3>Hey {userName}, Welcome to FastKart...</h3>
        <form>
          <div className="form-group mt-3">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control disabled"
              value={"indrajit@usermail.com"}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control disabled"
              value={"Indrajit Ghosh"}
            />
          </div>
        </form>
      </div>

      <div className="container my-5">
        <h3>Your Address</h3>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Enter City"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected="">Choose...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Enter ZIP Code"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Enter Phone Number"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-4 text-white"
            onClick={toggle}
          >
            Save Address
          </button>
        </form>
      </div>
      {pass && (
        <div className="passmodal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="passwordModalLabel">
                  Enter Your Password
                </h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary text-white"
                  onClick={toggle}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary text-white"
                  onClick={toggle}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

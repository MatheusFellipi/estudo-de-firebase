import { ContactsForm } from "./ContactForm";
import {firebaseDB} from "../firebase";
import { useEffect, useState } from "react";
export function Contacts() {
  const [contactsObj, setContactsObj] = useState({});
  const [currentId, setCurrentId] = useState("");
  
  useEffect(() => {
    firebaseDB.ref("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactsObj({
          ...snapshot.val(),
        });
      }
    });
  });
  
  const addOrEdit = (obj) => {
    firebaseDB.ref("contacts").push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5 text-center">Contact register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactsForm {...{ addOrEdit, currentId, contactsObj }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactsObj).map((id) => (
                <tr key={id}>
                  <td>{contactsObj[id].fullName}</td>
                  <td>{contactsObj[id].mobile}</td>
                  <td>{contactsObj[id].email}</td>
                  <td>
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentId(id);
                      }}
                      href=""
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="btn text-danger" href="">
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

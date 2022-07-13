import { useEffect, useState } from "react";

export function ContactsForm({ addOrEdit, currentId, contactsObj }) {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (currentId === "") {
      setValues({
        ...initialFieldValues,
      });
    } else {
      setValues({
        ...contactsObj[currentId],
      });
    }
  }, [currentId, contactsObj]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormInput = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };
  
  return (
    <form autoComplete="off" onSubmit={handleFormInput}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group ">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <input
          type="submit"
          value="SAVE"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
}

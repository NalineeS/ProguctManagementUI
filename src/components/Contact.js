import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnqkvddg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-2">
            <div className="card-header text-center">
              <h4>Contact Us Form</h4>
            </div>
            {/* <form action='https://formspree.io/f/xnqkvddg' method='post'> */}
            <form onSubmit={handleSubmit}>
              <div className="ms-2">
                <label for="username">Enter your Name</label>
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="form-control"
                  required
                />
                <ValidationError
                  prefix="Username"
                  field="username"
                  errors={state.errors}
                />
              </div>
              <div className="ms-2">
                <label for="email">Enter your Email</label>
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  className="form-control"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label for="message">Enter your Message</label>
                <br></br>
                <textarea
                  placeholder="type your message here......."
                  width="100%"
                  cols="65"
                  rows="6"
                  name="message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.060313419933!2d73.81546127431758!3d18.435570471766905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959360747a95%3A0xa249f5042b3843a0!2sSai%20prasad%20residency%20suraj%20construction!5e0!3m2!1sen!2sin!4v1693643306219!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

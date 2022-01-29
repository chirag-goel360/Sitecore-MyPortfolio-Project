import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const ContactMe = (props) => (
  <div>
    <div id="contact" className="contact segments">
      <div className="container">
        <div className="box-content">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="section-title section-title-left">
                  <h3>
                    <Text field={props.fields.title}></Text>
                  </h3>
                </div>
                <h2>
                  <Text field={props.fields.description}></Text>
                </h2>
                <ul>
                  <li>
                    <Link field={props.fields.facebook}>
                      &nbsp;<i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link field={props.fields.twitter}>
                      &nbsp;<i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link field={props.fields.dribble}>
                      &nbsp;<i className="fab fa-dribbble"></i>
                    </Link>
                  </li>
                  <li>
                    <Link field={props.fields.google}>
                      &nbsp;<i className="fab fa-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-right">
                <form
                  action="contact-form.php"
                  className="contact-form"
                  id="contact-form"
                  method="post"
                >
                  <div className="row">
                    <div className="col">
                      <div id="first-name-field">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                          name="form-name"
                        ></input>
                      </div>
                    </div>
                    <div className="col">
                      <div id="last-name-field">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          name="form-name"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div id="email-field">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form-control"
                          name="form-email"
                        ></input>
                      </div>
                    </div>
                    <div className="col">
                      <div id="subject-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control"
                          name="form-subject"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div id="message-field">
                        <textarea
                          cols="30"
                          rows="5"
                          className="form-control"
                          id="form-message"
                          name="form-message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button className="button" type="submit" id="submit" name="submit">
                    <Text field={props.fields.buttonText}></Text>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactMe;

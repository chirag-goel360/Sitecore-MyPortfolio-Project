import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const Experience = (props) => {
  const { experienceDetails } = props.fields;
  return (
    <div>
      <div id="resume" className="resume segments">
        <div className="container">
          <div className="box-content">
            <div className="section-title">
              <h3>
                <Text field={props.fields.title}></Text>
              </h3>
            </div>
            <div className="content">
              <div className="row ">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="content-left">
                    <div className="title-resume">
                      <h3>
                        <Text field={props.fields.experience}></Text>
                      </h3>
                      <h2>
                        <Text field={props.fields.totalexp}></Text>&nbsp;
                        <span>
                          <Text field={props.fields.designation}></Text>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="content-right">
                    <ul className="timeline">
                      {experienceDetails &&
                        experienceDetails.map((listItem, index) => (
                          <li key={`experienceDetails-${index}`}>
                            <h4>
                              <Text field={listItem.fields.Company_Name}></Text>
                            </h4>
                            <span>
                              <Text field={listItem.fields.Designation}></Text> (
                              <Text field={listItem.fields.Start_Year}></Text> -{' '}
                              <Text field={listItem.fields.End_Year}></Text>)
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

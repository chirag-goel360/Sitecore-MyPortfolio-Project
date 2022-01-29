import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const Skills = (props) => {
  const { skillsrow1, skillsrow2, skillsrow3 } = props.fields;
  return (
    <div>
      <div id="resume" className="resume segments">
        <div className="container">
          <div className="box-content">
            <div className="content">
              <div className="my-skill">
                <div className="row ">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="content-left">
                      <div className="title-resume">
                        <h3>
                          <Text field={props.fields.title}></Text>
                        </h3>
                        <h2>
                          <Text field={props.fields.frontText}></Text>&nbsp;
                          <span>
                            <Text field={props.fields.skillsText}></Text>
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="content-right">
                      <div className="card">
                        <ul className="pro-skill">
                          {skillsrow1 &&
                            skillsrow1.map((listItem, index) => (
                              <li key={`skillsrow1-${index}`}>
                                <div className="skill-title">
                                  <span>
                                    <Text field={listItem.fields.Skill_Name}></Text>
                                  </span>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="content-right">
                      <div className="card">
                        <ul className="pro-skill">
                          {skillsrow2 &&
                            skillsrow2.map((listItem, index) => (
                              <li key={`skillsrow2-${index}`}>
                                <div className="skill-title">
                                  <span>
                                    <Text field={listItem.fields.Skill_Name}></Text>
                                  </span>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="content-right">
                      <div className="card">
                        <ul className="pro-skill">
                          {skillsrow3 &&
                            skillsrow3.map((listItem, index) => (
                              <li key={`skillsrow3-${index}`}>
                                <div className="skill-title">
                                  <span>
                                    <Text field={listItem.fields.Skill_Name}></Text>
                                  </span>
                                </div>
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
      </div>
    </div>
  );
};

export default Skills;

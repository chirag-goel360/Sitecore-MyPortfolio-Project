import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const Portfolio = (props) => {
  const { projects } = props.fields;
  return (
    <div>
      <div id="portfolio" className="portfolio segments">
        <div className="container">
          <div className="box-content">
            <div className="section-title">
              <h3>
                <Text field={props.fields.title}></Text>
              </h3>
            </div>
            <div className="row no-gutters filtr-container">
              {projects &&
                projects.map((listItem, index) => (
                  <div
                    key={`projects-${index}`}
                    className="col-md-4 col-sm-12 col-xs-12 filtr-item"
                    data-category={<Text field={listItem.fields.Data_Section}></Text>}
                  >
                    <div className="content-image">
                      <Image
                        field={listItem.fields.Project_Image}
                        editable={true}
                        height="100%"
                        width="100%"
                      ></Image>
                      <div className="image-overlay"></div>
                      <div className="portfolio-caption">
                        <div className="title">
                          <h4>
                            <Text field={listItem.fields.Project_Title}></Text>
                          </h4>
                        </div>
                        <div className="subtitle">
                          <span>
                            <Text field={listItem.fields.Tech_Stack}></Text>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

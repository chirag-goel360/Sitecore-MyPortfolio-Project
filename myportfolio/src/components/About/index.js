import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const About = (props) => (
  <div>
    <div id="about" className="about segments">
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
                <div className="content">
                  <h2>
                    <Text field={props.fields.designation}></Text>
                  </h2>
                  <p>
                    <RichText field={props.fields.description}></RichText>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-right">
                <Image
                  field={props.fields.image}
                  editable={true}
                  height="100%"
                  width="100%"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

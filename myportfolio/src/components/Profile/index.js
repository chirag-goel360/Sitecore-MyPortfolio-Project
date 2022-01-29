import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const Profile = (props) => (
  <div>
    <div className="home-intro segments">
      <div className="container">
        <div className="intro-content box-content">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="intro-caption">
                <span>
                  <Text field={props.fields.information}></Text>
                </span>
                <h2>
                  <Text field={props.fields.designation}></Text>
                </h2>
                <Link className="button" field={props.fields.buttonLink}></Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="intro-image">
                <Image
                  field={props.fields.myImage}
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

export default Profile;

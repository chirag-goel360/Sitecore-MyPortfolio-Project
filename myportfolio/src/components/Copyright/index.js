import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const Copyright = (props) => (
  <div>
    <div className="footer segments">
      <div className="container">
        <div className="box-content">
          <p>
            <Text field={props.fields.title}></Text>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Copyright;

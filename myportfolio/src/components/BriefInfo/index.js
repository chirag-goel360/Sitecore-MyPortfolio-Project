import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';

const BriefInfo = (props) => {
  const rightImage = props.params !== null && props.params.rightimage === '1';
  return (
    <div className="container">
      <div className="row featurette">
        <div className={rightImage ? 'col-sm-6' : 'col-sm-6 order-sm-2'}>
          <h2 className="featurette-heading">
            <Text field={props.fields.heading} />
          </h2>
          <p style={{ fontSize: '14px!important', paddingTop: '5px!important' }} className="lead">
            <RichText className="text-left" field={props.fields.content} />
          </p>
        </div>
        <div className={rightImage ? 'col-sm-6' : 'col-sm-6 order-sm-1'}>
          <Image field={props.fields.image} editable={true} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default BriefInfo;

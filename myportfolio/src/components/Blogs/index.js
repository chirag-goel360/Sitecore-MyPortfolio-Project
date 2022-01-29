import React from 'react';
import { Text, DateField, Image } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const Blogs = (props) => {
  const { blogsItems } = props.fields;
  return (
    <div>
      <div id="blog" className="blog segments">
        <div className="container">
          <div className="section-title">
            <h3>
              <Text field={props.fields.title}></Text>
            </h3>
          </div>
          <div className="row">
            {blogsItems &&
              blogsItems.map((listItem, index) => (
                <div className="col-md-6" key={`blogsItems-${index}`}>
                  <div className="content">
                    <div className="image">
                      <Image
                        field={listItem.fields.Blog_Image}
                        editable={true}
                        height="100%"
                        width="100%"
                      ></Image>
                    </div>
                    <div className="blog-title">
                      <h4>
                        <Text field={listItem.fields.Blog_Title}></Text>
                      </h4>
                      <div className="date">
                        <DateField
                          field={listItem.fields.Blog_Date}
                          render={(date) => <em>{date.toLocaleString()}</em>}
                        ></DateField>
                        <i className="fas fa-circle"></i>{' '}
                        <span>
                          <Text field={listItem.fields.Blog_Type}></Text>
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
  );
};

export default Blogs;

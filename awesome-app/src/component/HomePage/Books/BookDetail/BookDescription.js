import React from "react";
class BookDescription extends React.Component {
  render() {
    return (
      <div>
        <h2 class="ereaders-section-heading">Book Description</h2>
        <div class="ereaders-rich-editor">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            tristique erat accumsan eros mattis aliquam. Praesent non accumsan
            mauris, non maximus libero Vestibulum scelerisque enim turpis. Duis
            justo ante, aliquam ac tempus et, porta vitae leo. Morbi sed diam
            pharetra eros maximus porttitor et in tellus. Sed ligula tellus,
            elementum vehicula lorem a, malesuada euismod eros. Aenean purus
            lacus, mattis vitae ipsum et, condimentum pulvinar arcu.
          </p>
          <p>
            Ut porta massa in risus maximus, eget sodales massa malesuada. Fusce
            et neque aliquet, mollis tellus ut, rutrum nunc. Cras congue magna
            et velit accumsan tempor. Etiam tempor nisi in tortor sagittis
            pharetra. Phasellus ut pulvinar risus. Nulla odio ipsum, sagittis at
            libero sed, sollicitudin euismod est. Phasellus congue, justo eget
            bibendum aliquet, neque elit vulputate magna,
          </p>
        </div>
        <h2 class="ereaders-section-heading">Book Detail</h2>
        <div class="ereaders-book-detail">
          <p>
            Morbi condimentum, ex ac aliquam congue, sapien eros commodo dolor,
            eu semper mauris arcu non mauris. Aliquam erat volutpat. Phasellus
            non nisi ligula. Phasellus accumsan nunc vitae enim interdum
            fringilla. Integer vel elementum diam.
          </p>
          <ul>
            <li>
              <h6>Book Title</h6>
              <p>Cover Book MockUp By ebook Pro</p>
            </li>
            <li>
              <h6>Author</h6>
              <p>Murial Barbery</p>
            </li>
            <li>
              <h6>Book Type</h6>
              <p>Business And Accounts</p>
            </li>
            <li>
              <h6>Date Published</h6>
              <p>December 13, 2017</p>
            </li>
            <li>
              <h6>Specification</h6>
              <p>Management And Technology</p>
            </li>
            <li>
              <h6>Chapters & Pages</h6>
              <p>12 Chapters And 550 Pages</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookDescription;

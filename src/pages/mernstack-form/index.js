import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import { Link } from 'gatsby'; 

const MernStackForm = props => (
 <Layout bodyClass="page-mernstack-form">
  <SEO title="MernStack Developer Form" />
  <div className="intro intro-small">
   <div className="container">
   <Link to="/mern-stack" className="button">
      Lets go back
  </Link>
    <div className="row">
     <div className="col-12">
      <h1>Mernstack Developer</h1>
     </div>
    </div>
   </div>
  </div>

  <div className="container">
   <div className="row">
   </div><br />
   <div style={{ margin: "0", paddingBottom: '80px' }}>
    <form
     className="container"
     name="mernstack-application-form"
     method="post"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     action="/thank-you"
    >
     <input type="hidden" name="form-name" value="mernstack-application-form" />

     <h3 className="mt-4">SUBMIT YOUR APPLICATION</h3>
     <p type="Resume/CV:">
      <input placeholder="ATTACH RESUME/CV" name="resume" type="file" required />
     </p>
     <p type="Full name:">
      <input type="text" required name="name"></input>
     </p>
     <p type="Email:">
      <input type="email" required name="email"></input>
     </p>
     <p type="Phone number:">
      <input type="number" required name="phone"></input>
     </p>
     <p type="Current company">
      <input type="text" required name="org"></input>
     </p>
     <h6><strong>LINKS</strong></h6>
     <p type="LinkedIn URL">
      <input type="text" placeholder="https://example.com" required name="url[LinkedIn]"></input>
     </p>
     <p type="Twitter URL">
      <input type="text" placeholder="https://example.com" required name="url[Twitter]"></input>
     </p>
     <p type="GitHub URL">
      <input type="text" placeholder="https://example.com" required name="url[Github]"></input>
     </p>
     <p type="Portfolio URL">
      <input type="text" placeholder="https://example.com" required name="url[Portfolio]"></input>
     </p>
     <p type="Other website">
      <input type="text" placeholder="https://example.com" required name="url[Other]"></input>
     </p>
     <h6><strong>ADDITIONAL INFORMATION</strong></h6>
     <p>
      <textarea style={{ width: '100%', height: '300px' }} type="text" placeholder="Add a cover letter or anything else you want to share." name="comment"></textarea>
     </p>
     <button type="submit">SUBMIT APPLICATION</button>
    </form>

   </div>

   <div className="col-8">
    <h4 className="mt-4">Business Hours</h4>
    <table className="table table-sm opening-hours-table table-bordered table-hover">
     <tbody>
      <tr>
       <td className="day font-weight-bold">Monday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Tuesday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Wednesday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Thursday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Friday</td>
       <td className="opens">9:00am - 5:00pm</td>
      </tr>
      <tr>
       <td className="day font-weight-bold">Saturday</td>
       <td className="opens">12:00pm - 5:00pm</td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>

 </Layout>
);

export default MernStackForm;
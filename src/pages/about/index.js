import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  certifications,
  education
} from "../../content_option";
import placeholder from "../../assets/images/placeholder.png"
import calendar from "../../assets/images/calendar.png"
import fav from "../../assets/images/favourite.png"
import lang from "../../assets/images/programming.png"

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Cindy Lam</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Related Experience</h3>
          </Col>
          <Col lg="7">
            {worktimeline.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 style={{fontWeight:"bold"}} className="service__title">{data.company}</h5>
                  <p style={{fontWeight:"bold"}} className="service_desc">
                  {data.date}&emsp;&emsp;&emsp;{data.position}
                  </p>
                  <p><img style={{height:25,width:25}} src={lang}></img>&emsp;{data.language}</p>
                  {data.description.map((description, i) => {
                    return (<p className="service_desc"  key={i}>
                       <img style={{height:25,width:25}} src={fav}></img>&emsp;
                       {description.des}
                    </p>)}
                  )}


                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {education.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 style={{fontWeight:"bold"}} className="service__title">{data.school}</h5>
                  <p style={{fontWeight:"bold"}} className="service_desc">
                  {data.date}&emsp;&emsp;&emsp;{data.degree}
                  </p>
                  {data.description.map((description, i) => {
                    return (<p className="service_desc"  key={i}>
                       <img style={{height:25,width:25}} src={fav}></img>&emsp;
                       {description.des}
                    </p>)}
                  )}


                </div>
              );
            })}
          </Col>
        </Row>        
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Programming Language</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            {certifications.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 style={{fontWeight:"bold"}} className="service__title">{data.title}</h5>
                  <p className="service_desc">
                    <img style={{height:25,width:25}} src={calendar}></img>&emsp;
                    {data.date}&emsp;&emsp;&emsp;
                    <img style={{height:25,width:25}} src={placeholder}></img>&emsp;
                    {data.location}
                  </p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

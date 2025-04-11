import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaLaptop,
  FaPencilRuler,
  FaBullhorn,
  FaChartLine,
  FaKeyboard,
  FaDesktop,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop size={40} />,
    count: 2481,
    label: "Editors",
    highlight: true,
  },
  { icon: <FaPencilRuler size={40} />, count: 998, label: "Designers" },
  { icon: <FaBullhorn size={40} />, count: 12, label: "Publicists" },
  { icon: <FaChartLine size={40} />, count: 49, label: "Marketers" },
  { icon: <FaKeyboard size={40} />, count: 222, label: "Ghostwriters" },
  { icon: <FaDesktop size={40} />, count: 86, label: "Web designers" },
];

const editors = [
  {
    name: "Shweta D.",
    location: "Pune, India",
    profileImg: "https://img.freepik.com/free-photo/full-length-smiling-brunette-woman-shirt-pointing-away-looking-camera-gray_171337-1192.jpg?semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
  },
  {
    name: "Ann K.",
    location: "USA",
    profileImg: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
  },
  {
    name: "Nihar W.",
    location: "New Delhi, India",
    profileImg: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.572474629.1744344967&semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
  },
  {
    name: "Piya T.",
    location: "Mumbai, India",
    profileImg: "https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?ga=GA1.1.572474629.1744344967&semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
    disabled: true,
  },
];

const Session = () => {
  return (
    <>
    
      <Container className="text-center py-5">
        <h2>
          <strong>Assemble your team of professionals</strong>
        </h2>
        <p className="mb-5">
          Our community is home to the best publishing talent on the planet.
        </p>
        <Row className="justify-content-center">
          {services.map((service, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={2} className="mb-4">
              <Card
                className={`h-100 p-3 ${
                  service.highlight
                    ? "border-warning bg-warning bg-opacity-25"
                    : ""
                }`}
                style={{ borderWidth: service.highlight ? "2px" : "1px" }}
              >
                <div className="mb-2">{service.icon}</div>
                <h4 className="fw-bold">{service.count}</h4>
                <p className="mb-0">{service.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
        <p className="text-muted">Select a service to learn more</p>
      </Container>


      <Container className="">
        <Row className="align-items-start">
          {/* Left Content */}
          <Col md={6}>
            <h4 className="fw-bold">Looking for an Editor?</h4>
            <p>
              The romantic myth of an author sitting alone in their room and
              emerging with a finished book is just that: a myth. Writing is a
              tough skill to master, and even the most talented writers need the
              help of a good editor.
            </p>
            <p>
              Whether you’re looking for professional feedback on your draft, a
              proper writing coach, or simply a last pair of eyes on your
              manuscript, you’ll find the world’s most experienced editors on
              Reedsy.{" "}
              <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                Learn more.
              </span>
            </p>
            <p>
              Lucky for you, the best professionals are already on Reedsy! Sign
              up today to come and meet them.
            </p>
            <div className="d-flex gap-3 mt-3">
              <Button
                style={{
                  backgroundColor: "#7b2cbf",
                  border: "none",
                  fontWeight: "600",
                }}
              >
                Sign up now
              </Button>
              <Button variant="outline-secondary" className="fw-semibold">
                Contact us
              </Button>
            </div>
          </Col>

          {/* Right Content t */}
          <Col md={6}>
            {editors.map((editor, idx) => (
              <Card
                key={idx}
                className="d-flex flex-row align-items-center justify-content-between p-3 my-2 shadow-sm"
                style={{
                  opacity: editor.disabled ? 0.5 : 1,
                  backgroundColor: editor.disabled ? "#f8f9fa" : "white",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={editor.profileImg}
                    alt={editor.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{editor.name}</h6>
                    {editor.location && (
                      <small className="text-muted">{editor.location}</small>
                    )}
                  </div>
                </div>
                <div className="text-end">
                  <a
                    href={editor.quoteLink}
                    className="d-block  fw-semibold text-decoration-none"
                    style={{
                      color: "#7b2cbf",
                      
                    }}
                  >
                    Request a quote
                  </a>
                  <a
                    href={editor.profileLink}
                    className="text-muted small text-decoration-none"
                  >
                    View profile
                  </a>
                </div>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Session;

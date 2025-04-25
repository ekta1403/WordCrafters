import React, { useState } from "react";
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
    profileImg:
      "https://img.freepik.com/free-photo/full-length-smiling-brunette-woman-shirt-pointing-away-looking-camera-gray_171337-1192.jpg?semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
  },
  {
    name: "Ann K.",
    location: "USA",
    profileImg:
      "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
  },
  {
    name: "Nihar W.",
    location: "New Delhi, India",
    profileImg:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.572474629.1744344967&semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
  },
  {
    name: "Piya T.",
    location: "Mumbai, India",
    profileImg:
      "https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?ga=GA1.1.572474629.1744344967&semt=ais_hybrid&w=740",
    quoteLink: "#",
    profileLink: "#",
    disabled: true,
  },
];

const Session = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (label) => {
    setSelectedService(label === selectedService ? null : label);
  };

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
                onClick={() => handleServiceClick(service.label)}
                className={`h-100 p-3 text-center ${
                  service.highlight ? "" : ""
                } ${
                  selectedService === service.label
                    ? "border-warning bg-warning bg-opacity-25 shadow"
                    : ""
                }`}
                style={{
                  borderWidth: service.highlight ? "2px" : "1px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
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

      {/* Conditional Content for Editors */}
      {selectedService === "Editors" && (
        <Container className="pb-5">
          <Row className="align-items-start">
            {/* Left Column */}
            <Col md={6}>
              <h4 className="fw-bold">Looking for an Editor?</h4>
              <p>
                The romantic myth of an author sitting alone in their room and
                emerging with a finished book is just that: a myth. Writing is a
                tough skill to master, and even the most talented writers need
                the help of a good editor.
              </p>
              <p>
                Whether you’re looking for professional feedback on your draft,
                a proper writing coach, or simply a last pair of eyes on your
                manuscript, you’ll find the world’s most experienced editors on
                Reedsy.{" "}
                <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                  Learn more.
                </span>
              </p>
              <p>
                Lucky for you, the best professionals are already on Reedsy!
                Sign up today to come and meet them.
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

            {/* Right Column */}
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
                        objectFit: "cover",
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
                      className="d-block fw-semibold text-decoration-none"
                      style={{ color: "#7b2cbf" }}
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
      )}

      {selectedService === "Designers" && (
        <Container className="pb-5">
          <Row className="align-items-start">
            {/* Left Column */}
            <Col md={6}>
              <h4 className="fw-bold">Looking for an Designers?</h4>
              <p>
                All the effort you put into writing your book will be for
                nothing if readers flee from it as soon as they see the cover,
                or if they find it full of formatting errors. Designing a book
                is as tough to master as writing it, so do yourself a favor and
                entrust your cover and layout design to a professional who knows
                how to express the theme and tone of your book in a
                split-second.{" "}
                <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                  Learn more.
                </span>
              </p>
              <p>
                Lucky for you, the best professionals are already on Reedsy!
                Sign up today to come and meet them.
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

            {/* Right Column */}
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
                        objectFit: "cover",
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
                      className="d-block fw-semibold text-decoration-none"
                      style={{ color: "#7b2cbf" }}
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
      )}

      {selectedService === "Publicists" && (
        <Container className="pb-5">
          <Row className="align-items-start">
            {/* Left Column */}
            <Col md={6}>
              <h4 className="fw-bold">Looking for an Publicist?</h4>
              <p>
                Are you ready to let the world know about your book? Then it’s
                time to secure some media coverage. Whether you’re looking for
                reviews from trusted outlets, coverage in the press, or you just
                want to put together a “blog tour”, let a Reedsy publicist give
                you a hand! They’ll bring years of experience and an unrivalled
                network of media and influencer connections.{" "}
                <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                  Learn more.
                </span>
              </p>
              <p>
                Lucky for you, the best professionals are already on Reedsy!
                Sign up today to come and meet them
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

            {/* Right Column */}
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
                        objectFit: "cover",
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
                      className="d-block fw-semibold text-decoration-none"
                      style={{ color: "#7b2cbf" }}
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
      )}

      {selectedService === "Marketers" && (
        <Container className="pb-5">
          <Row className="align-items-start">
            {/* Left Column */}
            <Col md={6}>
              <h4 className="fw-bold">Looking for an Marketer?</h4>
              <p>
                Whether you like it or not, marketing is an integral part of
                your job as an author. But that doesn’t mean you can’t get
                someone to coach you through it! Marketing is a skill, and if
                you are to learn it, you might as well do so by working with a
                seasoned book marketer. Let them work up a proper marketing
                plan, set up your advertising campaigns, or fix up your
                metadata!{" "}
                <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                  Learn more.
                </span>
              </p>
              <p>
                Lucky for you, the best professionals are already on Reedsy!
                Sign up today to come and meet them
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

            {/* Right Column */}
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
                        objectFit: "cover",
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
                      className="d-block fw-semibold text-decoration-none"
                      style={{ color: "#7b2cbf" }}
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
      )}

      {selectedService === "Ghostwriters" && (
        <Container className="pb-5">
          <Row className="align-items-start">
            {/* Left Column */}
            <Col md={6}>
              <h4 className="fw-bold">Looking for an Ghostwriter?</h4>
              <p>
                If you have this incredible story for a book, but feel you don’t
                have the skills to put it to paper… who you gonna call? That’s
                right, a Reedsy ghostwriter! They’ll be able to put together a
                compelling book proposal to pitch your idea to agents and
                publishers, and then capture your voice to tell your story the
                exact way you want it told.{" "}
                <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                  Learn more.
                </span>
              </p>
              <p>
                Lucky for you, the best professionals are already on Reedsy!
                Sign up today to come and meet them
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

            {/* Right Column */}
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
                        objectFit: "cover",
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
                      className="d-block fw-semibold text-decoration-none"
                      style={{ color: "#7b2cbf" }}
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
      )}

      {selectedService === "Web designers" && (
        <Container className="pb-5">
          <Row className="align-items-start">
            {/* Left Column */}
            <Col md={6}>
              <h4 className="fw-bold">Looking for an Web Designer?</h4>
              <p>
                A well-designed author website is more than just a fancy way to
                show that you’ve made it as a writer. It’s an indispensable hub
                to showcase all your books, attract new newsletter subscribers,
                and engage your fans. So if you don’t want your readers to see
                you as an amateur, you better hire a professional web designer
                to put your site together!{" "}
                <span style={{ color: "#7b2cbf", fontWeight: "500" }}>
                  Learn more.
                </span>
              </p>
              <p>
                Lucky for you, the best professionals are already on Reedsy!
                Sign up today to come and meet them
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

            {/* Right Column */}
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
                        objectFit: "cover",
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
                      className="d-block fw-semibold text-decoration-none"
                      style={{ color: "#7b2cbf" }}
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
      )}
    </>
  );
};

export default Session;

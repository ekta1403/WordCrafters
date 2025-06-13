import React, { useState } from "react";
// import MarketplaceSession from "./MarketplaceSession";

function Marketplace() {
  const [selectedService, setSelectedService] = useState("Editing");

  const services = [
    {
      label: "Editing",
      icon: "https://cdn-icons-png.flaticon.com/128/2921/2921222.png",
    },
    {
      label: "Design",
      icon: "https://cdn-icons-png.flaticon.com/128/1821/1821236.png",
    },
    {
      label: "Publicity",
      icon: "https://cdn-icons-png.flaticon.com/128/893/893257.png",
    },
    {
      label: "Marketing",
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
    },
    {
      label: "Translation",
      icon: "https://cdn-icons-png.flaticon.com/128/979/979585.png",
    },
    {
      label: "Ghostwriting",
      icon: "https://cdn-icons-png.flaticon.com/128/2128/2128126.png",
    },
    {
      label: "Website",
      icon: "https://cdn-icons-png.flaticon.com/128/4337/4337185.png",
    },
    {
      label: "Reviews",
      icon: "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
    },
  ];

  const handleServiceClick = (label) => {
    setSelectedService(label === selectedService ? null : label);
  };

  return (
    <>
      <div style={{ backgroundColor: "#26343f", minHeight: "20px" }}>
        {/* Header Section */}
        <div
          className="d-flex justify-ctent-between align-items-center border-bottom border-1 border-white"
          style={{
            maxWidth: "1080px",
            margin: "auto",
            flexWrap: "wrap",
            height: "161px",
          }}
        >
          <div
            style={{
              flex: "1 1 50%",
              color: "white",
              paddingRight: "1rem",
            }}
          >
            <h4
              className="fw-bold"
              style={{ fontSize: "1.8rem", marginBottom: "1rem" }}
            >
              Meet world-class publishing professionals
            </h4>
            <h5 style={{ fontWeight: "400" }}>
              Browse profiles and collaborate on projects.
            </h5>
          </div>
          on
          <div
            className="d-none d-md-flex"
            style={{ flex: "1 1 40%", justifyContent: "center" }}
          >
            <img
              src="https://assets-cdn.reedsy.com/vite/assets/professionals-green-BzBHXKYD.svg"
              alt="Professionals"
              style={{
                maxWidth: "70%",
                height: "auto",
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </div>
        </div>

        {/* Services Menu */}
        <div
          className="d-flex justify-content-center gap-4 py-3 "
          style={{
            backgroundColor: "#26343f",
            flexWrap: "wrap",
            maxWidth: "1020px",
            maxHeight: "95px",
            margin: "auto",
          }}
        >
          {services.map((service) => (
            <button
              key={service.label}
              onClick={() => handleServiceClick(service.label)}
              className={`d-flex flex-column align-items-center justify-content-center px-3 py-2 ${
                selectedService === service.label
                  ? "bg-white text-dark"
                  : "bg-transparent text-white"
              }`}
              style={{
                border: "none",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                cursor: "pointer",
                minWidth: "100px",
                transition: "0.3s",
              }}
            >
              <img
                src={service.icon}
                alt={service.label}
                style={{ height: "33px", marginBottom: "8px" }}
              />
              <span
                className={`fw-semibold ${
                  selectedService === service.label ? "text-dark" : "text-white"
                }`}
              >
                {service.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        className="d-flex justify-between align-items-center"
        style={{
          marginTop: "10px",
        }}
      >
        {/*left side*/}
        {/* <div
          className="border shadow p-3 mb-5 bg-body-tertiary rounded p-3 mt-4"
          style={{
            borderColor: "#cc59e2",
            width: "700px",
            maxWidth: "800px",
            marginLeft: "420px",
          }}
        >
          <h6>
            <strong>Show me editors who specialize in:</strong>{" "}
            <span className="text-muted">
              Learn more <i className="bi bi-info-circle"></i>
            </span>
          </h6>
          <div className="d-flex flex-wrap gap-3 my-2">
            {[
              "Developmental Editing",
              "Copy Editing",
              "Editorial Assessment",
              "Proofreading",
              "Query Letter Review",
              "Indexing",
              "Book Coaching",
            ].map((label, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`checkbox-${idx}`}
                />
                <label className="form-check-label" htmlFor={`checkbox-${idx}`}>
                  {label}
                </label>
              </div>
            ))}
          </div>

          <h6 className="mt-3">
            <strong>Refine your search:</strong>{" "}
            <span className="text-muted">
              Search tips <i className="bi bi-info-circle"></i>
            </span>
          </h6>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <select className="form-select w-auto">
              <option>Genre</option>
            </select>

            <select className="form-select w-auto">
              <option>Languages</option>
            </select>

            <div className="input-group w-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Keyword (e.g. climate, essays…)"
              />
              <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div> */}
        {/*right side*/}
        {/* <div
          className="fs-6 fw-bold border shadow p-3  bg-body-tertiary rounded"
          style={{
            width: "340px",
            maxWidth: "800px",
            marginLeft: "30px",
            height: "200px",
            // padding: "15px 10px",
            // borderColor: "#7b2cbf",
            borderStyle: "solid",
            borderRadius: "10px",
          }}
        >
          Select up to 5 professionals
        </div> */}
      </div>
    </>
  );
}

export default Marketplace;

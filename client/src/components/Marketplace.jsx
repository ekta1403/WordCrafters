import React, { useState } from "react";

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
    <div style={{ backgroundColor: "#26343f", minHeight: "20px" }}>
      {/* Header Section */}
      <div
        className="d-flex justify-content-between align-items-center border-bottom border-1 border-white"
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
          maxHeight:"93px",
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
  );
}

export default Marketplace;

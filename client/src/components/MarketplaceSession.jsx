import React from "react";

function MarketplaceSession() {
  return (
    <>
      <div
        className="d-flex justify-between align-items-center"
        style={{
          marginTop: "10px",
        }}
      >
        {/*left side*/}
        <div
          className="border shadow p-3 mb-5 bg-body-tertiary rounded p-3 mt-4"
          style={{
            borderColor:"#cc59e2",
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
        </div>
        {/*right side*/}
        <div
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
        </div>
      </div>
    </>
  );
}

export default MarketplaceSession;

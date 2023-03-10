import React from "react";

export default function Footer() {
  return (
    <>
      <div className="font-weight-700 support-text text-center mt-2">
        Loop je ergens tegenaan? Neem contact op via:{" "}
        <p>
          <a href="mailto:info@wearehighfive.xyz">info@wearehighfive.xyz</a>
        </p>
      </div>
      <div className="mt-1 text-center">
        <img src="img/creditcardblue.svg" className="img-fluid me-3" />
        <img src="img/iDeal.svg" className="img-fluid me-3" />
        <img
          src="img/Bancontact.svg"
          className="img-fluid me-3"
          style={{ width: 30 }}
        />
        <img
          src="img/Giropay.svg"
          className="img-fluid me-3"
          style={{ width: 30 }}
        />
        <img src="img/metamask.svg" className="img-fluid" />
      </div>
      <div className="mt-3 d-flex justify-content-center align-items-center">
        <span className="poweredby-text">Powered By</span>
        <img
          src="img/HenriPay.png"
          className="img-fluid me-3"
          style={{ width: 100 }}
        />
      </div>
    </>
  );
}

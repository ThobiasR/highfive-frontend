import CheckoutSteps from "components/CheckoutSteps";
export default function ConfirmationMetaMask() {
  return (
    <div className="col-lg-5  checkout-right thankyou-section without-scroll px-md-0">
      <div className="card  border-0 border-radius-0">
        <div className="card-body ">
          <CheckoutSteps />
          <p className="mb-0 thankyou-text-1 mt-5 mb-1">
            Kom je er niet uit of heb je vragen? Twijfel niet en neem contact
            met ons op via:
          </p>

          <a
            className="mb-0 thankyou-link"
            href="mailto:info@wearehighfive.xyz"
          >
            info@wearehighfive.xyz
          </a>
        </div>
      </div>
    </div>
  );
}

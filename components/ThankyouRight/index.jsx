import Link from "next/link";
import CheckoutSteps from "components/CheckoutSteps";
export default function ThankyouRight() {
  return (
    <div className="col-lg-5  checkout-right thankyou-section without-scroll px-md-0">
      <div className="card  border-0 border-radius-0">
        <div className="card-body ">
          <CheckoutSteps />
          <div className="mt-32 checkout-card bg-transparent py-2 border-0">
            <h2 className="mb-3 h2-xl primary-color">Hoe nu verder?</h2>
            <p className="body-s1 shade-black mb-0">
              Lees onderstaande stappen aandachtig door om er zeker van te zijn
              dat we jouw NFT naar de juiste persoon sturen.
            </p>
          </div>
          {/*  */}

          <div className="d-flex thankyou-box mb-1 mt-40 ">
            <div className="align-self-md-center left col-2 px-0">
              <div className="d-flex">
                <div className="align-self-md-center">
                  <img
                    src="img/circle-1.svg"
                    loading="eager"
                    alt="#1"
                    title="#1"
                    className="img-fluid"
                  />
                </div>
                <div className="align-self-center d-none d-md-inline-block">
                  <img
                    src="img/union.svg"
                    loading="eager"
                    alt="#1"
                    title="#1"
                    className="img-fluid w-12"
                  />
                </div>
              </div>
            </div>
            <div className="align-self-md-center right col-10 ps-3 position-relative">
              <p className="mb-0 thankyou-text">
                Wanneer de betaling is ontvangen en je jouw persoonlijke
                e-mailadres en wallet-adres hebt ingevuld ontvang je een
                bevestigingsmail.
              </p>
            </div>
          </div>
          <div className="d-flex thankyou-box my-1">
            <div className="align-self-md-center left col-2">
              <div className="d-flex">
                <div className="align-self-md-center">
                  <img
                    src="img/circle-2.svg"
                    loading="eager"
                    alt="#2"
                    title="#2"
                    className="img-fluid "
                  />
                </div>
                <div className="align-self-center d-none d-md-inline-block">
                  <img
                    src="img/union.svg"
                    loading="eager"
                    alt="#2"
                    title="#2"
                    className="img-fluid w-12"
                  />
                </div>
              </div>
            </div>
            <div className="align-self-md-center right col-10 ps-3 position-relative">
              <p className="mb-0 thankyou-text">
                Binnen vier dagen ontvang je jouw officiële HighFive Community
                Genesis Token NFT via airdrop in jouw wallet.
              </p>
            </div>
          </div>
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

import Link from "next/link";

export default function ThankyouLeft({ page }) {
  return (
    <div
      className={`${
        page === "metamask" ? "d-block px-3" : ""
      } col-lg-12 left-section`}
    >
      <div className="card checkout-left p-0">
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="container p-0">
            <div className="col-12 text-center mb-40">
              {" "}
              <Link href="/">
                <a rel="index">
                  <img
                    src="img/logo-new.svg"
                    alt="logo"
                    title="logo"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </div>
            <div className="col-lg-6 mx-auto">
              <div className="left-content-area py-80 thankyou-area p-5">
                <h1 className="mb-4-1 shade-7 h1-xs shade-7">Gefeliciteerd!</h1>
                <p className="body-xl mb-4  text-white ">
                  Je staat op het punt om lid te worden van de HighFive
                  Community.
                </p>
                <p className="body-xl text-white mb-2">Hoe nu verder?</p>
                <p className="body-xl text-white mb-3">
                  Lees onderstaande stappen aandachtig door om er zeker van te
                  zijn dat we jouw NFT naar de juiste persoon sturen.
                </p>
                <li className="body-xl text-white mb-3">
                  Wanneer de betaling is ontvangen en je jouw persoonlijke
                  e-mailadres en wallet-adres hebt ingevuld ontvang je een
                  bevestigingsmail.
                </li>
                <li className="body-xl text-white mb-3">
                  Binnen vier dagen ontvang je jouw officiële HighFive Community
                  Genesis Token NFT via airdrop in jouw wallet.
                </li>
                <p className="body-xl text-white mb-0">
                  Kom je er niet uit of heb je vragen? Twijfel niet en neem
                  contact met ons op via:{" "}
                  <a
                    className="mb-0 text-white"
                    href="mailto:info@wearehighfive.xyz"
                  >
                    info@wearehighfive.xyz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function ThankyouLeftMetamask({ page }) {
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
            <div className=" col-lg-8 mx-auto">
              <div className=" left-content-area py-80 thankyou-area p-5">
                <h1 className="mb-4-1 shade-7 h1-xs shade-7">Gefeliciteerd!</h1>
                <p className="body-xl mb-4 text-white ">
                  Je bezit nu een &lsquo;HighFive Community Genesis Token&rsquo;
                  en daarmee ben je lid van de HighFive Community.
                </p>
                <p className="body-xl mb-4 text-white ">
                  Beste <span className="shade-7">buyer</span>,<br />
                  De HighFive NFT geeft aan jou als eigenaar via je
                  wallet/Metamask toegang tot het besloten deel van onze
                  website. Achter deze zogeheten &lsquo;token gate&rsquo; (het
                  mijn account gedeelte achter een login in Web2) vind je
                  exclusieve content. O.a. IRL events, AMA sessies, community
                  hulp en podcasts wachten op je!
                </p>

                <p className="body-xl mb-4 text-white">
                  Veel plezier met deze ontdekkingsreis.
                  <br />
                  Periodiek gaan we functies uitbreiden of toevoegen.
                </p>
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

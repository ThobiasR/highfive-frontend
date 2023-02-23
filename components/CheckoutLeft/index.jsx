export default function CheckoutLeft({ ifSoldout }) {
  return (
    <div
      className={`${ifSoldout ? "col-lg-12" : "col-lg-7"}  px-0 left-section`}
    >
      <div className="logo">
        <img src="/img/logo-new.svg" width={193} height={59} />
      </div>
      <div className="card checkout-left">
        <div className="card-body d-flex align-items-center p-0">
          <div className="container">
            <div className="col-12 text-center mb-5">
              <div className="mt-3">
                <h1 className="mb-4-1 text-white h1 text-xs-16 mb-0 font-400">
                  1999 NFTs
                </h1>
                <span className="shade-7 body-xl">24 december</span>
              </div>
            </div>
            <div className="col-lg-10  mx-auto">
              <div className="left-content-area py-80">
                <h1 className="mb-4-1 text-white h1 text-xs-16">
                  Koop jouw HighFiveNFT vandaag
                </h1>
                <h2 className="body-xl mb-0 text-white">
                  HighFive wil als een van de eerste Web3 bedrijven in Nederland
                  een bron van inspiratie zijn voor anderen. We nemen actief een
                  rol in het opleiden van mensen en het delen van kennis. Dit
                  doen we via onze community. Toegang tot de HighFive community
                  krijg je door in het bezit te zijn van een HighFiveNFT.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import PaymentFailedCom from "components/PaymentFailed";
export default function PaymentFailed() {
  return (
    <>
      <Head>
        <title>Payment failed</title>
        <meta name="theme-color" content="#000"></meta>
      </Head>

      <section className="payment-failed">
        <div className="container-fluid">
          <div className="row justify-content-center d-flex mb-5">
            <img src="/img/logo-new.svg" alt="logo" style={{ width: 200 }} />
          </div>
          <div className="row">
            <PaymentFailedCom />
          </div>
        </div>
      </section>
    </>
  );
}

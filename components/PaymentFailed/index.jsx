import Link from "next/link";

export default function PaymentFailed() {
  return (
    <div className="col-10 col-sm-6  col-md-5 col-lg-4 col-xxl-4 mx-auto text-center failed-box">
      <h1 className="mb-4">Betaling mislukt</h1>
      <p>Je transactie is mislukt. Probeer opnieuw.</p>
      <Link href="/">
        <button
          className="btn btn-primary me-3 btn-px-12 btn-py-24 w-100 justify-content-center"
          target="_blank"
          alt="Try Again"
          title="Try Again"
        >
          Probeer opnieuw
        </button>
      </Link>
    </div>
  );
}

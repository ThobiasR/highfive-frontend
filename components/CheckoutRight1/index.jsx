import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Countdown, { zeroPad } from "react-countdown";

import CheckoutSteps from "components/CheckoutSteps";
import Footer from "components/Footer";

import { getCounterTime } from "utils/date";

import { GAS_FEES, PREORDER_PRICE, ETHEREUM_FEES } from "../../constants";

const nfts = Array.from({ length: 10 }, (_, index) => index + 1);

export default function CheckoutRight1(props) {
  const {
    setStep,
    handleChange,
    values,
    errors,
    touched,
    price,
    handleNftChange,
    noOfNft,
    showGasFee,
    totalPrice,
    step,
    setFieldValue,
    checkWhitelist,
    connectWithMetamask,
    walltedConnected,
    checkIfPromocodeIsValid,
    disconnectWallet,
  } = props;
  const [emailError, setEmailError] = useState(false);
  const [walletError, setWalletError] = useState(false);
  const [counter, setCounterComplete] = useState(false);

  useEffect(() => {
    if (values.email) {
      setEmailError(false);
    }
  }, [values.email]);

  const moveToStep2 = async () => {
    if (!values.email && !walltedConnected) {
      setEmailError(true);
      return;
    }

    // if (promocodeValid === false) {
    //   const address = walltedConnected ? walltedConnected : values.email;
    //   const getWhitelist = await checkWhitelist(address);
    //   if (getWhitelist === false) {
    //     return true;
    //   }
    // }

    setStep(walltedConnected ? 2 : 1);
    setEmailError(false);
    setWalletError(false);
  };

  const handleChangeCustom = (e, handleChange) => {
    handleChange(e);
    setFieldValue("confirmEmail", e.target.value);
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={() => moveToStep2()}
          id="button-checkout"
        >
          Afrekenen
        </button>
      );
    } else {
      return (
        <button type="button" className="btn btn-primary w-100">
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </button>
      );
    }
  };

  const ethPrice = PREORDER_PRICE * noOfNft;

  return (
    <div className="card  border-0 border-radius-0 1">
      <div className="card-body">
        <CheckoutSteps step={step} />
        <div className="row mt-40 justify-content-between">
          <div className="col-9 content">
            <h2 className="pre-order mb-1">Aantal NFT&lsquo;s</h2>
            <p className="regular-20 mb-0">
              <span className="font-weight-700 shade-black">
                {PREORDER_PRICE} ETH{" "}
              </span>
            </p>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <select
              className="form-select from-selected-width form-selectgreen"
              aria-label="Default select"
              onChange={handleNftChange}
            >
              {nfts.map((n, idx) => (
                <option value={n} selected={noOfNft === n} key={idx}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-40">
          <div className="col-12">
            {" "}
            <h2 className="pre-order mb-4">Vul je e-mailadres in</h2>
          </div>
          <div className="col-12">
            <Form.Control
              id="email"
              className="form-control"
              type="email"
              placeholder="E-mailadres"
              name="email"
              onChange={(e) => handleChangeCustom(e, handleChange)}
              isInvalid={touched.email && !!errors.email}
              isValid={touched.email && !errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            {emailError && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                E-mail is vereist
              </div>
            )}
            <p className="text-center body-s1 shade-black mt-4">or</p>
            {walltedConnected && (
              <Button
                className="metamsk-btn"
                onClick={() => disconnectWallet()}
                style={{ width: "100%" }}
                id="button-disconnect"
              >
                <img
                  src="/img/metamask.png"
                  className="img-fluid me-3"
                  alt="MetaMask"
                />
                Ontkoppel MetaMask
              </Button>
            )}
            {!walltedConnected && (
              <Button
                className="metamsk-btn"
                onClick={() => connectWithMetamask(values.promocode)}
                style={{ width: "100%" }}
                id="button-connect-metamask"
              >
                <img
                  src="/img/metamask.png"
                  className="img-fluid me-3"
                  alt="MetaMask"
                />
                Koppel MetaMask
              </Button>
            )}
          </div>
        </div>

        <div
          className="mt-40 checkout-card mx-0 border-0 mb-0"
          style={{ marginBottom: 50 }}
        >
          <div className="col-12">
            {" "}
            <h2 className="pre-order mb-4">Order overzicht</h2>
          </div>
          <div className="d-sm-flex mb-3 ">
            {" "}
            <div className="font-weight-500 col-md-6 wirefram-bg summary-content align-self-center mb-1 mb-sm-0 me-3 me-md-0">
              {noOfNft} x HighFive Community Genesis Token NFT
              {noOfNft > 1 && "'s"}
            </div>
            <div className="col-md-6  summary-content text-md-right">
              <span className="font-weight-700 ">{PREORDER_PRICE} ETH </span>{" "}
              <span className="mx-2 font-weight-700 ">|</span>
              <span className="font-weight-700">
                ${(price / noOfNft).toFixed(2)}{" "}
              </span>
            </div>
          </div>
          <div className="d-sm-flex ">
            <div className="col-md-6 font-weight-700 summary-content align-self-center  mb-1 mb-sm-0 me-3 me-md-0">
              Gas fees{" "}
              <FaInfoCircle
                style={{ cursor: "pointer" }}
                onClick={() => showGasFee(true)}
              />
            </div>
            <div className="col-md-6  summary-content text-md-right">
              <span className="font-weight-700 shade-black">
                {ETHEREUM_FEES} ETH{" "}
              </span>{" "}
              <span className="mx-2 font-weight-700 primary-color ">|</span>
              <span className="font-weight-700 shade-black ">
                {" "}
                ${GAS_FEES}{" "}
              </span>
            </div>
          </div>
          <hr className="my-16" />
          <div className="d-sm-flex">
            <div className="col-md-6 wirefram-bg summary-content align-self-center font-weight-700 mb-1 mb-sm-0 me-3 me-md-0">
              Totaal
            </div>
            <div className="col-md-6 summary-content text-md-right">
              <span className="font-weight-700 shade-black">
                {(ethPrice + ETHEREUM_FEES).toFixed(5)} ETH{" "}
              </span>{" "}
              <span className="mx-2 font-weight-700 primary-color">|</span>
              <span className="font-weight-700  shade-black">
                ${totalPrice.toFixed(2)}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-12">
            <Countdown
              date={getCounterTime()}
              onComplete={() => setCounterComplete(true)}
              renderer={renderer}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

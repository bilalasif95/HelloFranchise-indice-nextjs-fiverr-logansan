import { useState, useContext } from "react";
import { IndiceContext } from "../../contexts";
import { Alert, Spinner } from 'react-bootstrap';
//utils
import axios from "axios";
import { parseCookies } from 'nookies';
import catchErrors from "../../utils/catchErrors";

//claim state
const INITIAL_CLAIM = {
  name: "",
  email: "",
  businessName: "",
  key: "",
};
const ClaimModal = ({user, list, claimResponse, setClaimResponse}) => {
  //context value
  const { displayClaimModal, toggleClaimModal } = useContext(IndiceContext);
  
  //auth
  const [claim, setClaim] = useState(INITIAL_CLAIM);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [claimError, setClaimError] = useState("");
  
  const onDismiss = () => setClaimError('');
  const { token } = parseCookies();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaim((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = `/api/v1/listings/claim-listing`;
      const payload = { ...claim, listingId: list.id };
      const response = await axios.post(url, payload, {headers: { Authorization: token }});

      setLoading(false);
      setClaimResponse(response.data.message)
      setDisplay(true);

      setClaim(INITIAL_CLAIM);
      window.setTimeout(() => {
        toggleClaimModal();
      }, 3000);
    } catch (error) {
      console.log(error);
      catchErrors(error, setClaimError);

      window.setTimeout(() => {
        setClaimError("");
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={
          displayClaimModal
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
        }
        id="claimModal"
      >
        <div className="modal-dialog modal-dialog-centered" style={{marginTop: '40px'}}>
          <div className="modal-content">
            <button type="button" className="close" onClick={toggleClaimModal}>
              <i className="bx bx-x"></i>
            </button>
            <section className="claim-your-business-area bg-f9f9f9 ptb-70" style={{padding: '15px'}}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="claim-your-business-content">
                      <h3>Claim Your Business Listing for FREE!</h3>
                      {claimError ? (
                        <Alert
                          variant='danger'
                          show={claimError ? true : false}
                          onClose={onDismiss}
                        >
                          {claimError}
                        </Alert>
                      ) : (
                        ''
                      )}
                      {claimResponse ? (
                        <Alert
                          variant='success'
                          show={claimResponse ? true : false}
                          onClose={onDismiss}
                        >
                          {claimResponse}
                        </Alert>
                      ) : (
                        ''
                      )}
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label>Your Full Name</label>
                              <input
                                type="text"
                                placeholder="Enter your name"
                                className="form-control"
                                name="name"
                                value={claim.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label>Your Email Adress</label>
                              <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control"
                                name="email"
                                value={claim.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label>Your Business Name</label>
                              <input
                                type="text"
                                placeholder="Enter your business name"
                                className="form-control"
                                name="businessName"
                                value={claim.businessName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-6 col-sm-6">
                            <div className="form-group">
                              <label>Key</label>
                              <input
                                type="text"
                                placeholder="Enter key sent to your email"
                                className="form-control"
                                name="key"
                                value={claim.key}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <button type="submit" className="default-btn">
                              Submit Now {' '}
                              {loading ? (
                                <Spinner
                                  color="success"
                                  className="product-spinner"
                                  animation="border"
                                  size="sm"
                                />
                              ) : (
                                ""
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimModal;

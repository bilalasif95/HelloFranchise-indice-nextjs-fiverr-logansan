import { createContext, useState } from 'react';

const IndiceContext = createContext();

const IndiceProvider = ({ children }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);
  const [displayAuthModal, setDisplayAuthModal] = useState(false);
  const [displayClaimModal, setDisplayClaimModal] = useState(false);
  const [activeListing, setActiveListing] = useState("");
  const [pendingListing, setPendingListing] = useState("");

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  const toggleAuthModal = () => {
    setDisplayAuthModal(!displayAuthModal);
  };

  const toggleClaimModal = () => {
    setDisplayClaimModal(!displayClaimModal);
  };

  return (
    <IndiceContext.Provider
      value={{
        displaySideMenu,
        toggleSideMenu,
        displayAuthModal,
        toggleAuthModal,
        displayClaimModal,
        toggleClaimModal,
        activeListing,
        setActiveListing,
        pendingListing,
        setPendingListing,
      }}
    >
      {children}
    </IndiceContext.Provider>
  );
};

export { IndiceProvider, IndiceContext };

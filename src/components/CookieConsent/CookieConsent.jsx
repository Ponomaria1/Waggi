import React, { useState, useEffect } from 'react';
import './CookieConsent.scss';

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__content">
        <p className="cookie-consent__text">
          🍪 We use cookies to improve your experience on our website. 
          By continuing to browse, you accept our use of cookies.
        </p>
        <div className="cookie-consent__buttons">
          <button onClick={acceptCookies} className="cookie-consent__accept">
            Accept
          </button>
          <button onClick={declineCookies} className="cookie-consent__decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
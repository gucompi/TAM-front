import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';
  import { Button } from '@material-ui/core';
  import React from 'react';
  
  const CaptchaButton = ({ onVerifyCaptcha }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const clickHandler = async () => {
      if (!executeRecaptcha) {
        return;
      }
  
      const token = await executeRecaptcha('contact');
  
      onVerifyCaptcha(token);
    };
  
    return (
      <Button onClick={clickHandler}>
        Confirmanos que nos sos Robot
      </Button>
    );
  };
  
  export const ReCaptcha = ({ onVerifyCaptcha }) => (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeNFrAZAAAAABgWj_S4mhR6hQq-4utzlidz5uNR"
    >
      <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
    </GoogleReCaptchaProvider>
  );
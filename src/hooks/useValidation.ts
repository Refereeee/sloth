import { useEffect, useState } from 'react';
import IValidations from '../types/IValidations';

const useValidation = (value:string, validations:IValidations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line guard-for-in
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          // eslint-disable-next-line no-unused-expressions
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'minLength':
          // eslint-disable-next-line no-unused-expressions
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'maxLength':
          // eslint-disable-next-line no-unused-expressions
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case 'isEmail':
          // eslint-disable-next-line no-case-declarations
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          // eslint-disable-next-line no-unused-expressions
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        default:
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError]);
  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
  };
};

export default useValidation;

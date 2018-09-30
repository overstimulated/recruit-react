import { createFormValidation, FieldValidationResult, ValidationConstraints, Validators } from 'lc-form-validation';


  const validationConstraints: ValidationConstraints = {
    fields: {
      ccv: [
        { validator: Validators.required },
      ],
      creditCardNumber: [
        { validator: Validators.required }
      ],
      expiryDate: [
        { validator: Validators.required }
      ]
    },
  };
  
  export const creditCardFormValidation = createFormValidation(validationConstraints);
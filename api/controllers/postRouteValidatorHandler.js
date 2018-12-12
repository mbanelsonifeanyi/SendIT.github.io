import { check } from 'express-validator/check';
const validatorObject = {
  postRouteValidatorHandler: () => {
    return [
      check('userName').exists().withMessage('Username cannot be empty'),
      check('userEmail').exists().isEmail().withMessage('please use a valid email address'),
      // check('parcelName').exists().isInt().withMessage({wait: 'type', another: 'one' })
    ];
  },
  updateRouteValidator: () => {
    return [
      check('cancelled').exists().isBoolean().withMessage('Please enter true or false'),
      check('parcelId').exists().isInt().withMessage({wait: 'type', another: 'one' })
    ];
  }
};
export default validatorObject;

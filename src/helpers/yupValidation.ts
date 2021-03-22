import * as Yup from "yup";

export const yupValidation = Yup.object().shape({
  firstName: Yup.string().label("First Name").min(2).required(),
  lastName: Yup.string().label("Last Name").min(2).required(),
  house: Yup.string().label("House").min(2).required(),
  knownAs: Yup.string().label("Known As").min(2).required(),
});

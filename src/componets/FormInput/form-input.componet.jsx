import { Input, FormInputLabel } from "./FormInput.style";

const FormInput = ({ label, ...othetProps }) => {
  return (
    <>
      {label && <FormInputLabel>{label}</FormInputLabel>}
      <Input {...othetProps} />
    </>
  );
};

export default FormInput;

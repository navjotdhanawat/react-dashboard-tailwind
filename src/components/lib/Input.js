import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";

const Input = React.forwardRef(
  ({ label, type, placeholder, requiredError, name }, ref) => (
    <>
      <CInput
        type={type}
        placeholder={placeholder}
        innerRef={ref}
        name={name}
      />
      {/* <p className="text-red-500 text-xs italic">{requiredError?.message}</p> */}
    </>
  )
);

export default Input;
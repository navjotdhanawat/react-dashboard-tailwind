import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Navbar from "../components/PublicNavbar.js";
import FooterSmall from "../components/FooterSmall.js";
import { Context } from "../utils/context";
import { Button, Input } from "../components/lib";
import { registerRequest } from "../store/actions/auth";
import { connect } from "react-redux";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInvalidFeedback
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const Register = (props) => {
  const context = useContext(Context);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => props.registerRequest(user);


  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      innerRef={register({ required: true })}
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      placeholder="Navjot Dhanawat"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      innerRef={register({ required: true })}
                      name="email"
                      placeholder="JaneDoe@domain.com"
                      type="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      innerRef={register({ required: true })}
                      name="password"
                      placeholder="********"
                      type="password"
                    />
                  </CInputGroup>
                  <CButton type="submit" color="success" block>
                    Create Account
                  </CButton>
                </form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}


const mapStateToProps = state => ({});

const mapDispatchToProps = { registerRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React from 'react';
import { CDBModalFooter, CDBModalFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import Logo from '../assets/images/hand1.png'

const Footer = () => {
  return (
    <CDBModalFooter className="shadow mt-auto ">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            {/* <img className="footer-img"
              alt="logo"
              src={Logo}
              width="40px"
            /> */}
            <span className="ml-4 h5 mb-0 font-weight-bold">HandMeDown</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; HandMeDown, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
           
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
           
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
           
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};
export default Footer
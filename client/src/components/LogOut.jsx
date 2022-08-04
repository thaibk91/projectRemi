import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const LogOut = ({ setLogOut }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout())
    setLogOut(false)
    navigate(`/signin`)
  }

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setLogOut(false)}>X</Close>
        <Title>Do you want logOut!</Title>
       
        <Button onClick={handleLogout}>Logout</Button>
      </Wrapper>
    </Container>
  )
}

export default LogOut;
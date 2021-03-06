// Utilizado aqui Styled Components

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p.error {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  p.success {
    color: #008000;
    margin-bottom: 15px;
    border: 1px solid #008000;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #da552f;
    font-size: 16px;
    font-weight: bold;
    background: none;
    border: 2px solid #da552f;
    border-radius: 5px;
    height: 56px;
    width: 100%;
    margin-top: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    cursor: pointer;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
  button:hover {
    background: #da552f;
    color: #fff;
  }
  .hidden {
    -webkit-animation: fadeinout 7s linear 1 forwards;
    animation: fadeinout 7s linear 1 forwards;
  }

  @-webkit-keyframes fadeinout {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes fadeinout {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

`;

import styled, { keyframes } from 'styled-components';
import logo from '../../asset/logo.png';
// import logo2 from 'auth/logo2.gif';

const gelatineAnimation = keyframes`
    from, to {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(0.9, 1.1);
    }
    50% {
        transform: scale(1.1, 0.9);
    }
    75% {
        transform: scale(0.95, 1.05);
    }
    from, to {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(0.9, 1.1);
    }
    50% {
        transform: scale(1.1, 0.9);
    }
    75% {
        transform: scale(0.95, 1.05);
    }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffecc8;
  height: 100vh;
  width: 100%;
`;

export const Logo = styled.div`
  background-image: url('/auth/logo2.gif');
  background-size: 100% 100%;
  height: 25vh;
  width: 60vh;
  position: absolute;
  top: 15%;
`;

export const InputTag = styled.div`
  font-family: 'HSYuji-Regular';
  position: absolute;
  bottom: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignupContainer = styled.div`
  font-size: 18px;
`;

export const SignupAnchor = styled.button`
  margin-top: 20px;
  font-weight: bold;
  color: #ff8a3d;
  text-decoration: underline;
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  &:hover,
  &:focus,
  &:link:hover,
  &:link:focus,
  &:visited:hover,
  &:visited:focus {
    animation: ${gelatineAnimation} 0.5s 1;
  }
`;

export const LoginButton = styled.div`
  margin-top: 80px;
`;

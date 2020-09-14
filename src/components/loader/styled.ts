import styled from "styled-components";

const Container = styled.div`
  font-size: 90px;
  display: inline-block;
  position: absolute;
  width: 130px;
  height: 130px;
  overflow: hidden;
  left: 50%;
  margin-top: 250px;
  margin-left: -65px;
  
 div {
  position: absolute;
  border: 4px solid var(--color-primary);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
 div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 60px;
    left: 60px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 120px;
    height: 120px;
    opacity: 0;
  }
}
`;

export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    position: absolute;
    overflow: hidden;
`;

export default Container;

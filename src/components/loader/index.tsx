import React from "react";
import Container, { Backdrop } from "./styled";

const Loader : React.FC =  () => (
    <Backdrop><Container><div /><div /></Container></Backdrop>
);

export default Loader;

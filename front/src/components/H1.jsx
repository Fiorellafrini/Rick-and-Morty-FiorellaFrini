import React from "react";
import styled from "styled-components";

const Titulo = styled.div`
  background-image: url("https://www.pngkey.com/png/full/6-67000_logo-logo-logotipo-rick-and-morty.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  padding: 8em;
`;

export default function H1() {
  return (
    <Titulo>
      <div className={styled.card}></div>z
    </Titulo>
  );
}

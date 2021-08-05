import React from 'react';
import styled from 'styled-components';

export const Navbar = styled.div`
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
  box-shadow: 1px 2px 3px 4px rgba(250, 235, 215, 0.7), 1px 2px 3px 4px rgba(250, 255, 255, 0.3) inset;
`;

const Title = ({ title }) => {
  return (
    <div>
      <Navbar>
        <h2>{title()}</h2>
      </Navbar>
    </div>
  );
};
export default Title;

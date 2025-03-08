import React, {} from 'react';
import styled from 'styled-components';

const Button = styled.button<{primary?: boolean}>`
   ${props => props.primary ? 'background: #6160F2;' : 'background: red;'}
   padding: 10px 20px;
   border-radius: 5px;
   color: white;
   cursor: pointer;
   margin: 10px;
   &:hover {
     color: black;
   }
`;


const App: React.FC = () => {
  return (
    <>
        <Button primary>
            按钮
        </Button>
    </>
  );
}

export default App;

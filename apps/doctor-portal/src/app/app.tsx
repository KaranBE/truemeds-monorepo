import styled from 'styled-components';
import {Welcome}  from "@truemeds/welcome"


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Welcome title='Doctor portal'/>
    </StyledApp>
  );
}

export default App;

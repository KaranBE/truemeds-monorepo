import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WelcomeProps {
  title: string;
}

const StyledWelcome = styled.div`
  color: black;
`;

export function Welcome(props: WelcomeProps) {
  return (
    <StyledWelcome>
      <h1>Welcome to {props.title}!</h1>
    </StyledWelcome>
  );
}

export default Welcome;

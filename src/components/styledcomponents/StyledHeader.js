import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: left;
  color: black;
  margin-top: -15px;
`;
const Header = ({ name }) => {
  return (
    <StyledHeader>
      <h2>{name}</h2>
    </StyledHeader>
  );
};

export default Header;

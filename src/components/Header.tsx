import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import logo from "../images/logo192.png";
import Container from "../layout/Container";
import links from "../routes/linksRout";

type Props = {
  pathname: boolean;
};

const Headers = styled.header`
  background: #20232a;
  padding: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled(Link)`
  text-decoration: none;
`;

const HeaderLogoImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  gap: 5em;
`;

const HeaderLink = styled(Link)<Props>`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-shadow: ${({ pathname }) => (pathname ? "0 0 10px white" : "")};
  text-decoration: none;
  text-transform: uppercase;
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Headers>
      <Container>
        <HeaderContent>
          <HeaderLogo to="/">
            <HeaderLogoImg src={logo} alt="React Js Logo" />
          </HeaderLogo>
          <HeaderList>
            {links.map(({ link, name }, index: number) => (
              <li key={index}>
                <HeaderLink pathname={pathname === link} to={link}>
                  {name}
                </HeaderLink>
              </li>
            ))}
          </HeaderList>
        </HeaderContent>
      </Container>
    </Headers>
  );
};

export default Header;

import * as React from "react";
import styled from "styled-components";


const Navbar = styled.div`
  background-color: #888;
`;

const Content = styled.div`
  background-color: #222;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 00s;
}

  & a {
      font-size: 1.4rem;
      color: white;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      padding: 14px 16px;
      float: left;
      cursor: pointer;
      background-color: #010d11;
      border-radius: 35px;
      line-height: 2em;

  &:hover {
      background-color: #FF6600;
      border-radius: 30px;
      
  }
}

;`

class Nav extends React.Component {
    render() {
        return (
            <Navbar>
                <Content>
                    <NavLinks>
                        <li><a href="/home">82 Learn</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">SignUp</a></li>
                    </NavLinks>
                </Content>
            </Navbar>
        )
    }
}

export default Nav;
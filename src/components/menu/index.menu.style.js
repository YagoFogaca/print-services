import styled from "styled-components";

export const Aside = styled.aside`
  padding: 15px 20px;
  background-color: #561a26e3;

  z-index: 1;
  position: relative;
`;

export const NavDesktop = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionMenuDesktop = styled.section`
  width: 35%;
`;

export const UlDesktop = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const LiDesktop = styled.li`
  padding: 5px 0px;
  transition: all 0.3s ease-in-out;
`;

export const LineAMenu = styled.div`
  width: 0%;
  height: 2px;
  background-color: #fbefd5;
  transition: all 0.3s ease-in-out;
`;

export const AMenu = styled.a`
  text-decoration: none;
  color: #fbefd5;
  font-weight: 700;
  font-size: 17px;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:hover ${LineAMenu} {
    width: 100%;
  }
`;

import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavBar = styled.nav`
  display: flex;
`;

export const UList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  padding: 0 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  white-space: nowrap;
`;
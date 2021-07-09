import React, { useEffect, useState } from 'react';
import { Links } from '../../constants';
import {
  NavBar,
  UList,
  ListItem,
  NavLink,
} from './style';

export const NavigationBar = ({ extraClass }) => {
  const [activeTab, setActiveTab] = useState('');
  const [links, setLinks] = useState(Links);

  useEffect(() => {
    const path = location.pathname;
    links.forEach((link) => {
      if (path === link.to) {
        setActiveTab(link.to);
        return;
      }
    });
  }, []);

  const handleNavClick = (link) => {
    link.isActive = true;
    links[activeTab].isActive = false;
    setActiveTab(link.id);
    setLinks(links);
  };

  return (
    <NavBar>
      <UList>
        {
          links.map((link, index) => {
            const isActive = !!(activeTab === link.to);
            return (
              <ListItem key={index}>
                <NavLink
                  to={link.to}
                  onClick={() => { handleNavClick(link); }}
                  fontWeight={isActive? 'bold': 'normal'}
                  color={isActive? 'white' : 'white'}
                >
                  <img src={link.src} />
                  {link.name}
                </NavLink>
              </ListItem>
            );
          })
        }
      </UList>
    </NavBar>
  );
};
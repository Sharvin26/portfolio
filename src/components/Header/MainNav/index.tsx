import React, { useState } from 'react';
import * as Styled from './styles';

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.MainNav open={open}>
        <Styled.MainNavItem
          to='/know-more'
          activeClassName="active"
        >
          Know More
        </Styled.MainNavItem>
        <Styled.LinkItem
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.freecodecamp.org/news/author/sharvin"
        >
          Blog
        </Styled.LinkItem>
        <Styled.MainNavItem
          to='/contact'
          activeClassName="active"
        >
          Contact Me
        </Styled.MainNavItem>
        <Styled.LinkItem
          rel="noreferrer noopener"
          target="_blank"
          href="https://mtechzilla.com"
        >
          MTechZilla
        </Styled.LinkItem>
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  );
};

export default MainNav;

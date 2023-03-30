import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 5vh;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      height: 4%;
    }
`

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

const Logo = styled.img`
  height: 40px;
  align-self: center;
  cursor: pointer;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10%;
    width: 60%;
    list-style: none;
    align-self: center;

  @media screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

export const NavBar = () => {
  const handleClickScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <Section>
      <Container>
        <Logo src="../resources/logo.png" onClick={() => handleClickScroll('Home')}/>
        <List>
            <ListItem onClick={() => handleClickScroll('Home')}>Home</ListItem>
            <ListItem onClick={() => handleClickScroll('Who')}>About</ListItem>
            <ListItem onClick={() => handleClickScroll('Languages')}>Languages</ListItem>
            <ListItem onClick={() => handleClickScroll('Works')}>Works</ListItem>
            <ListItem onClick={() => handleClickScroll('Contact')}>Contact</ListItem>
        </List>
      </Container>
    </Section>
  )
}

import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Logo = styled.img`
  height: 40px;
  align-self: center;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10%;
    width: 60%;
    list-style: none;
    align-self: center;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Button = styled.button`
    height: min-content;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
`;

export const NavBar = () => {
  return (
    <Section>
      <Container>
        <Logo src="../resources/logo.png" />
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
        </List>
        <Button>Email</Button>
      </Container>
    </Section>
  )
}

import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import Map from "./Map"
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 10vh;

  @media screen and (max-width: 768px){
    padding-top: 0;
  }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 3%;

    @media screen and (max-width: 768px){
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px){
        justify-content: center;
    }
`

const Title = styled.h1`
    font-weight: 200;
`

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

const Input = styled.input`
    padding: 20px;
    border: none;
    border-radius: 5px;
`

const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
`

const Button = styled.button`
    height: min-content;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Contact = () => {
    const ref = useRef()
    const [success,setSuccess] = useState(null)
    
    const handleSubmit = e => {
        e.preventDefault()
    
        emailjs.sendForm('service_g8b787m', 'template_m8bxs4g', ref.current, 'c5b0B1oBs4YtW-0cM')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    }

  return (
    <Section id='Contact'>
        <Container>
            <Left>
                <Form ref={ref} onSubmit={handleSubmit}>
                    <Title>Contact Me</Title>
                    <Input placeholder='Name' name='name'/>
                    <Input placeholder='Email' name='email'/>
                    <TextArea placeholder='Write Message' rows={10} name='message'/>
                    <Button type='submit'>Send</Button>
                    {success && "Email sent. I will get back to you soon!"}
                </Form>

            </Left>

            <Right>
                <Map/>
            </Right>
        </Container>
    </Section>
  )
}

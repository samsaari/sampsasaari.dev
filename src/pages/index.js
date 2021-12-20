import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Template from '../templates/template'
import FloatingLogo from '../components/floating-logo'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Content = styled.div`
  padding: 1rem 2rem 10rem 2rem;
`

const Heading1 = styled.h1`
  padding-bottom: 2rem;
  color: #fff;
  font-size: 3rem;
`

const Heading2 = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
`

const Heading3 = styled.h3`
  padding-bottom: 3rem;
  color: #fff;
  font-size: 5rem;
  font-weight: bold;
`

const IndexPage = () => {
  const [greeting, setGreeting] = useState('Hello')
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const greetings = ['Hei', 'Hola', 'Hello', 'Bonjour', 'Kalimera', 'Ciao', 'Konnichiwa', 'Hej', 'Selam', 'Hallo']

    const getGreeting = () => { 
      const newGreeting = greetings[Math.floor(Math.random()*greetings.length)]
      if (newGreeting === greeting) {
        return getGreeting()
      } else {
        return newGreeting
      }
    }

    const fadeOut = () => {
      return new Promise((resolve) => {
        setFade(!fade)
        setTimeout(() => {
            resolve()
        }, 500)
      })
    }

    const timer = setInterval(async () => {
        await fadeOut()
        const newGreeting = getGreeting() 
        setFade(false)
        setGreeting(newGreeting)
    }, 4000)

    return () => clearInterval(timer)
  }, [fade, greeting])

  return (
    <>
    <Template>
      <FloatingLogo />
      <Container>
        <Content>
          <Heading1 className={fade ? 'fade-out' : 'fade-in'}>{greeting}!</Heading1>
          <Heading2>My name is</Heading2>
          <Heading3>Sampsa Saari</Heading3>
          <p>I'm a Web developer based in Oulu, Finland.</p>
        </Content>
      </Container>
    </Template>
    </>
)}

export default IndexPage


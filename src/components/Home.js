import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for TouchLess Devilery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-s.jpg"
        />
        <Section
            title="Model 3"
            description="Order Online for TouchLess Devilery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-3.jpg"
        />
        <Section
            title="Model X"
            description="Order Online for TouchLess Devilery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-x.jpg"
        />
        <Section
            title="Model Y"
            description="Order Online for TouchLess Devilery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-y.jpg"
        />
        <Section
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg="solar-panel.jpg"
        />
        <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg="solar-roof.jpg"
        />
        <Section
            title="Accessories"
            leftBtnText="Shop Now"
            backgroundImg="accessories.jpg"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
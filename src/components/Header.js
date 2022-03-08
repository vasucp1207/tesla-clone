import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';

function Header() {

    const [burgerStat, setBurgerStat] = useState(false)

  return (
    <Container>
        <a href='#'>
            <img src = "/images/logo.svg"/>
        </a>
        <Menu>

        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>

        </Menu>

        <RightMenu>

            <a href='#'>Shop</a>
            <a href='#'>Account</a>

            <CustomMenu onClick={() => setBurgerStat(true)}/>

        </RightMenu>

        <BurgerNav show = {burgerStat}>

            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStat(false)}/>
            </CloseWrapper>


            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Used inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadster</a></li>
            <li><a href='#'>SolarPanels</a></li>
            <li><a href='#'>Space-X</a></li>
            <li><a href='#'>BoringCompany</a></li>

        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        font-weight: normal;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: normal;
        text-transform: uppercase;
        padding-right:10px;
        flex-wrap: no-wrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;

    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-align: start;
    transform: ${props => props.show? 'translateX(0)': 'translateX(100%)'};
    transition: 0.5s;

    li{
        list-style: none;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    a{
        font-weight: normal;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
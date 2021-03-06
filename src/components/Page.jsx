import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import HamburgerNav from './HamburgerNav'
import MobileHeader from './MobileHeader'
import phonecall from '../images/phonecall.png'

import FooterNav from './FooterNav'
import { colors } from '../utils/theme'

const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.light};
`

const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${({ withPadding }) => (withPadding ? '960px' : 'none')};
  padding: ${({ withPadding }) => (withPadding ? '1rem' : '0')};
  margin: 0 auto;
`

/**
 * This is our basic page component
 */
const Page = ({ children, withPadding }) => {
  return (
    <Container>
      <div className="mobileCallIcon">
        <a href="tel:352-527-0440">
          <img height="70px" src={phonecall} />
        </a>
      </div>
      <NavBar />
      <div className="styleBurger">
        <HamburgerNav />
      </div>

      <MobileHeader />
      <InnerContainer withPadding={withPadding}>{children}</InnerContainer>
      <FooterNav />
    </Container>
  )
}

Page.defaultProps = {
  withPadding: true,
}

export default Page

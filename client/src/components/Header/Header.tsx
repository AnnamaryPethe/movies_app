import React from 'react';
import header from '../../asstest/film.jpg'
import * as Styled from './styles'

const Header = () => {
    return (
        <Styled.HeaderContainerStyle>
            <Styled.HeaderTextStyle>Movies</Styled.HeaderTextStyle>
            <Styled.HeaderStyle src={header} alt='logo' />
        </Styled.HeaderContainerStyle>
    )
}

export default Header
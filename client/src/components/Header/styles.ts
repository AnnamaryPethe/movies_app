import styled from "@emotion/styled"

export const HeaderStyle = styled.img({
    width:'100%', 
    height:'200px',
    zIndex: 9999,
})

export const HeaderTextStyle = styled.h3({
    position: 'absolute',
    right: '50%',
    left: '5%',
    bottom: '65%',
    fontFamily: 'fantasy',
    fontSize: 32,
    fontWeight: 'bold'
})

export const HeaderContainerStyle = styled.div({
    position: 'relative'
})

import styled from 'styled-components'

import Button from '../../components/Button'

export const Container = styled.div`
height: -webkit-fill-available;
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
`

export const BodyContainer = styled.div`
padding-top:90px;
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
box-sizing:border-box;
`

export const InfoText = styled.small`
color: #A79C9C;
font-family: Rubik;
font-style: normal;
font-weight: bold;
font-size: 12px;
  font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
`

export const StayHome = styled.span`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 30px;
color: #51554D;
`

export const OrderOnline = styled.span`
font-style: normal;
font-weight: bold;
font-size: 34px;
color: #178E1C;
mix-blend-mode: normal;
`

export const OrderNowButton = styled(Button)`
margin-top:13px;
border-radius:23px;
background-color: #CAEFBD;
color:#178E1C;
cursor:pointer;
:hover{
    color: white;
}
outline:none;
`
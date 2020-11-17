import styled from 'styled-components';
import Image from 'next/image'



export const Title = styled.h1`
  color: #CEAB5D;

`
export const InstaclonnWrapper = styled.div`
display: flex;
align-items: center;
justify-content: start;
height: 100vh;

`
export const Phone = styled(InstaclonnWrapper)`
 display: flex;
 align-items: center;
 justify-content: center;
  img{
    height: 550px;
    
  }
`
export const InstaclonContinue = styled.div `
 display: flex;
 align-items: center;
 justify-content: space-around;
 flex-direction: column;
 margin:10px;
  
`
export const Group = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-direction: column;
 
 background-color: white;
 width: 350px;
 height: 520px;
 
 padding:0;
 padding-bottom: 50px;
 margin-top:30px;
 border: 2px solid #004170;
  img {
    height: 50px;
  }  
`
export const Group2 = styled(Group)`
//margin-top: 20px;
width: 350px;
height: 70px;
//padding-top:50px;
 
 p{
   color: black;
   a{
    color: #0095f6;
   }
   
 }
`
export const PhPerfil = styled.div`
img{
height:120px;
align-items: center;
display:flex;
justify-content:center;
border-radius: 50% ;
margin-top:50px;
}
`
export const InstaclonnLogin = styled.a`
background-color: #CEAB5D;
padding: 15px;
margin-top:12px;
border-radius: 4px;
font-size: 17px;
color: black;

`
export const RemoveAcc = styled.a`
color: #0095f6;
font-size: 16px;
margin-top: 70px;

`
export const NotAccount = styled.p`
color:black;
font-size: 16px;
margin:10px;

`
export const GetApp = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
padding: 1.3rem 0;  
`
export const Download = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;    
    height: 3rem;
    width: 2rem;
    background-size:cover;
    img{
  width:170px;
  margin:5px;
}
            
`
export const Imag1 = styled.button`
background-color:black;
border: none;


`
export const Imag2 = styled.button`
background-color:black;
border: none;
padding-left: 10px;

`


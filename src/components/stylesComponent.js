import styled from 'styled-components'
import { mediaQueries } from './mediaQueries';

export const Wrapper = styled.div`
  width: 75vw;
  height: 40vh;
  position: fixed;
  background-color: #444;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column wrap;
  align-items: center;  
  justify-content: center;
  padding: 24px;
  ${mediaQueries("lg")`
    width:45vw;
    height:40vh;
  `};
  `;

export const Paragraf = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.8rem;
  text-align: center;
  color: #fff;
  
`
export const Button = styled.button`
  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
  box-sizing: border-box;
  width: 120px;
  height: 45px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;   
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  position: fixed;
  bottom: 25px;
  right: 25px; 
  
  &:hover{   
    cursor: pointer;    
    transition: all .4s ease-in-out;
    &:hover{
      background-position: 100% 0;
      transition: all .4s ease-in-out;
    }
  }
  &:focus{
    outline: none;
  }
`
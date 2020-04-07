import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'
import errorPng from './error.png'
import { Transition } from 'react-spring/renderprops'

const Clickout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, .5);
  z-index: 9000;
`

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding:  ${props => props.padding || '20px'};
  color:${props => props.color || 'black'};
  width: fit-content;
  height: fit-content;
  border-radius:  ${props => props.radius || '5px'};
  background-color: ${props => props.bg || 'white'};
  border: 1px solid ${props => props.borderBg || 'black'};
  box-shadow: 0px 0px 15px -5px rgb(0,0,0,.75);
  z-index: 10000;
  ${props => props.error && css`
    border: 1px solid red;
    padding: 0px;
    box-shadow: 0px 0px 15px -5px rgb(170,0,0,.75);
  `}
`

const ErrorHead = styled.div`
  padding-top:20px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  src: url(${props => props.src});
  width: 64px;
`

const ErrorFoot = styled.div`
width: 100%;
display: flex;
justify-content: center;
color: rgb( 17,17,17);
font-weight:400;
font-size: 1.2rem;
background-color: #d0d0d0;
padding: 20px;
cursor: pointer;
user-select: none;
`

const Modal = ({ className, children, onClick, open, bg, color, borderBg, padding, radius, error }) => {

  return (
    <Transition
      items={open}
      from={{ right: -200, opacity: 0 }}
      enter={{ right: 0, opacity: 1 }}
      leave={{ right: -200, opacity: 0 }}
      config={{ duration: 200 }}>
      {open =>
        open &&
        (props => (
          <div style={props}>
            {!error ? <Clickout onClick={onClick} /> : <Clickout />}
            <Div className={className} error={error} bg={bg} color={color} borderBg={borderBg} padding={padding} radius={radius}>
              {error && <ErrorHead><Img src={errorPng} /></ErrorHead>}
              {children}
              {error && <ErrorFoot onClick={onClick}><p>Dismiss</p></ErrorFoot>}
            </Div>
          </div>
        ))
      }
    </Transition>
  );
}

export default Modal
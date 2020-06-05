import React from 'react'
import styled, { css } from 'styled-components'
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

const padding = props => props.padding || '20px'
const color = props => props.color || 'black'
const borderRadius = props => props.radius || '5px'
const bg = props => props.bg || 'white'
const border = props => props.borderBg || 'black'
const src = props => props.src

const hasErrorProp = props => props.error && css`
  overflow: hidden;
  padding: 0px;
  border: 1px solid red;
  box-shadow: 0px 0px 15px -5px rgb(170,0,0,.75);
`

const Base = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:${color};
  width: fit-content;
  height: fit-content;
  padding:  ${padding};
  border-radius:  ${borderRadius};
  border: 1px solid ${border};
  background-color: ${bg};
  box-shadow: 0px 0px 15px -5px rgb(0,0,0,.75);
  z-index: 10000;
  ${hasErrorProp}
`

const ErrorHead = styled.div`
  padding-top:20px;
  width: 100%;
  display: flex;
  justify-content: center;
`


const Img = styled.img`
  src: url(${src});
  width: 64px;
`

const ErrorFoot = styled.div`
width: 100%;
display: flex;
justify-content: center;
color: black;
font-weight: 400;
font-size: 1.1rem;
background-color: #d0d0d0;
padding: 20px;
cursor: pointer;
user-select: none;
`

const Modal = ({
  className,
  children,
  onClick,
  open,
  bg,
  color,
  borderBg,
  padding,
  radius,
  error
}) => (
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
            {!error
              ? <Clickout onClick={onClick} />
              : <Clickout />
            }
            <Base
              className={className}
              error={error}
              bg={bg}
              color={color}
              borderBg={borderBg}
              padding={padding}
              radius={radius}>
              {!error
                ? <React.Fragment>{children}</React.Fragment>
                : <React.Fragment>
                  <ErrorHead><Img src={errorPng} /></ErrorHead>
                  <div style={{ padding: '20px 15px' }}>{children}</div>
                  <ErrorFoot onClick={onClick}><p>Dismiss</p></ErrorFoot>
                </React.Fragment>
              }
            </Base>
          </div>
        ))
      }
    </Transition>
  )

export default Modal
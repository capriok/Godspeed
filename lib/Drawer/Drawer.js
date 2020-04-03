import React from 'react'
import styled, { css } from 'styled-components'
import '../globalstyle'
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
  top: 0px;
  right: 0px;
  padding:  ${props => props.padding || '20px'};
  color:${props => props.color || 'black'};
  width: fit-content;
  height: 100vh;
  background-color: ${props => props.bg || 'white'};
  border-left: 1px solid ${props => props.borderBg || 'black'};
  box-shadow: 0px 0px 15px -5px rgb(0,0,0,.75);
  z-index: 10000;
`

const Drawer = ({ className, children, onClick, open, bg, color, padding }) => {

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
            <Clickout onClick={onClick} />
            <Div style={props} className={className} bg={bg} color={color} padding={padding}>
              {children}
            </Div>
          </div>
        ))
      }
    </Transition>
  );
}

export default Drawer

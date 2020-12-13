import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring/renderprops'

const Clickout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, .5);
  z-index: 8500;
`

const fromSide = (props: DrawerProps) => props.side || 'right'
const bg = (props: DrawerProps) => props.bg || 'white'
const color = (props: DrawerProps) => props.color || 'black'
const padding = (props: DrawerProps) => props.padding || '20px'
const border = (props: DrawerProps) => props.borderBg || 'black'

const Div = styled.div`
  position: fixed;
  top: 0px;
  ${fromSide}: 0px;
  color:${color};
  width: fit-content;
  height: 100vh;
  padding:  ${padding};
  border-left: 1px solid ${border};
  background-color: ${bg};
  box-shadow: 0px 0px 15px -5px rgb(0,0,0,.75);
  z-index: 9000;
`

const Drawer: React.FC<DrawerProps | any> = ({ className, children, onClick, open, side, bg, color, padding }) => {
  const fromSide = side || 'right'
  return (
    <Transition items={open} from={{ [fromSide]: -200, opacity: 0 }} enter={{ [fromSide]: 0, opacity: 1 }} leave={{ [fromSide]: -200, opacity: 0 }} config={{ duration: 200 }}>
      {
        open =>
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

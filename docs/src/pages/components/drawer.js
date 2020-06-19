import React, { useState } from "react"
import Documentation from "../../components/layouts/documentation"
import SEO from "../../components/seo"
import { Button, Drawer } from 'godspeed'

import Install from '../../components/mdx/drawer-install.mdx'
import Default from '../../components/mdx/drawer-default.mdx'
import Custom from '../../components/mdx/drawer-custom.mdx'
import Side from '../../components/mdx/drawer-side.mdx'


const Content = () => (
  <div className="drawer-content">
    <h1>Title</h1>
    <p>This is placeholder content</p>
    <div className="column">
      <p>Home</p>
      <p>Documentation</p>
      <p>Learn more</p>
      <p>Contact</p>
    </div>
  </div>
)

const DrawerComponent = () => {
  const [drawer1, setDrawer1] = useState(false)
  const [drawer2, setDrawer2] = useState(false)
  const [drawer3, setDrawer3] = useState(false)
  const [drawer4, setDrawer4] = useState(false)
  const [drawer5, setDrawer5] = useState(false)
  const [drawer6, setDrawer6] = useState(false)

  return (
    <Documentation>
      <SEO title="Drawer" />
      <h1 className="title">Drawer</h1>
      <h3 className="sub-title">Drawers provide app functionality and access to tools.</h3>
      <p className="list-head">Common uses</p>
      <div className="list">
        <li>Navigation</li>
        <li>Authentication</li>
        <li>Information Guidance</li>
      </div>
      <p className="list-head">Default Behavior</p>
      <div className="list">
        <li>Position is 'fixed'</li>
        <li>Default side is 'right'</li>
        <li>Height '100vh' of the viewport</li>
        <li>Note: Should be lifted up to root element</li>
      </div>
      <Install />
      <h1 className="title">Default Drawer</h1>
      <h3 className="sub-title">These come out of the box, dark with white text.</h3>
      <p className="par">This component expects children.</p>
      <p className="list-head">State Behavior</p>
      <div className="list">
        <li>The "open" prop is a boolean value which determines the state of the drawer.</li>
        <li>The "onClick" prop expects a function which closes the drawer when the backdrop is clicked.</li>
      </div>
      <p className="par">You can pass the "bg" prop to change the background of the drawer.</p>
      <p className="par">You can pass the "color" prop to change the font color of the drawer.</p>
      <div className="visualize">
        <div className="examples">
          <Button className="item" text="Default drawer" onClick={() => setDrawer1(true)} />
          <Button className="item" text="Dark drawer" onClick={() => setDrawer2(true)} />
        </div>
        <Default />
      </div>
      <h1 className="title">Customized Drawer</h1>
      <p className="par">You can pass the "padding" prop to add padding to the inside of the drawer.</p>
      <p className="par">First value: top, down; Second value: left, right</p>
      <div className="visualize">
        <div className="examples">
          <Button className="item" text="Padding" onClick={() => setDrawer3(true)} />
        </div>
        <Custom />
      </div>
      <h1 className="title">Side Option</h1>
      <p className="par">You can pass the "side" prop to change which side of the viewport the drawer lives.</p>
      <p className="par">Default: right</p>
      <div className="visualize">
        <div className="examples">
          <Button className="item" text="Left Option" onClick={() => setDrawer4(true)} />
          <Button className="item" text="Right Option" onClick={() => setDrawer5(true)} />
        </div>
        <Side />
      </div>
      <Drawer onClick={() => setDrawer1(!drawer1)} open={drawer1}>
        <Content />
      </Drawer>
      <Drawer onClick={() => setDrawer2(!drawer2)} open={drawer2} bg="rgb(17, 17, 17)" color="white">
        <Content />
      </Drawer>
      <Drawer onClick={() => setDrawer3(!drawer3)} open={drawer3} padding="20px 80px">
        <Content />
      </Drawer>
      <Drawer onClick={() => setDrawer4(!drawer4)} open={drawer4} side="left">
        <Content />
      </Drawer>
      <Drawer onClick={() => setDrawer5(!drawer5)} open={drawer5} side="right">
        <Content />
      </Drawer>
      <Drawer onClick={() => setDrawer6(!drawer6)} open={drawer6}>
        <Content />
      </Drawer>
    </Documentation>
  )
}

export default DrawerComponent
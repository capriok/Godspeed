import React, { useState } from "react"
import Documentation from "../../components/layouts/documentation"
import SEO from "../../components/seo"
import { Button, Modal } from 'godspeed'

import Install from '../../components/mdx/modal-install.mdx'
import Default from '../../components/mdx/modal-default.mdx'
import Custom from '../../components/mdx/modal-custom.mdx'
import Error from '../../components/mdx/modal-error.mdx'

const ModalComponent = () => {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)
  return (
    <Documentation>
      <SEO title="Modal" />
      <h1 className="title">Modal</h1>
      <h3 className="sub-title">Modals are an element displayed on top of the body document.</h3>
      <p className="list-head">Commonly used for</p>
      <div className="list">
        <li>Authentication</li>
        <li>Dialog</li>
        <li>Alert</li>
      </div>
      <p className="list-head">Transition Behavior</p>
      <div className="list">
        <li>Transitions use
              <a href="https://www.react-spring.io" alt=""
            style={{ fontSize: '1rem', color: 'steelblue' }}
            target="_blank"
            rel="noopener noreferrer"> react-spring </a>
               render props</li>
        <li>Slides in from outside of the viewport while increasing from 0 - 1 opacity.</li>
        <li>Duration of transition: 200ms.</li>
      </div>
      <Install />
      <h1 className="title">Default Modals</h1>
      <h3 className="sub-title">These come out of the box, light with dark text.</h3>
      <p className="par">This component expects children.</p>
      <p className="list-head">State Behavior</p>
      <div className="list">
        <li>The "open" prop is a boolean value which determines the state of the modal.</li>
        <li>The "onClick" prop expects a function which closes the modal when the backdrop is clicked.</li>
      </div>
      <p className="par">You can pass the "bg" prop to change the background of the modal.</p>
      <p className="par">You can pass the "color" prop to change the font color of the modal.</p>
      <div className="visualize">
        <div className="examples">
          <Button className="item" text="Default Modal" onClick={() => setModal1(!modal1)} size="sm" />
          <Button className="item" text="Dark Modal" onClick={() => setModal2(!modal2)} size="sm" />
        </div>
        <Default />
      </div>
      <h1 className="title">Customized Modals</h1>
      <p className="par">You can pass the "padding" prop to add padding inside the modal.</p>
      <p className="par">You can pass the "borderBg" prop to change the border color of the modal.</p>
      <p className="par">You can pass the "radius" prop to change the border radius of the modal.</p>
      <div className="visualize">
        <div className="examples">
          <Button className="item" text="Padding Option" onClick={() => setModal3(!modal3)} size="sm" />
          <Button className="item" text="Border Option" onClick={() => setModal4(!modal4)} size="sm" />
          <Button className="item" text="Radius Option" onClick={() => setModal5(!modal5)} size="sm" />
        </div>
        <Custom />
      </div>
      <h1 className="title">Error Modal</h1>
      <p className="par">You can pass the "error" prop to show an error/alert modal variant.</p>
      <div className="visualize">
        <div className="examples">
          <Button className="item" text="Error Modal" onClick={() => setModal6(!modal6)} size="sm" />
        </div>
        <Error />
      </div>
      <Modal onClick={() => setModal1(!modal1)} open={modal1}>
        <h1>Title</h1>
        <p>This is some placeholder content</p>
      </Modal>
      <Modal onClick={() => setModal2(!modal2)} open={modal2} bg="rgb(17, 17, 17)" color="white">
        <h1>Title</h1>
        <p>This is some placeholder content</p>
      </Modal>
      <Modal onClick={() => setModal3(!modal3)} open={modal3} padding="50px">
        <h1>Title</h1>
        <p>This is some placeholder content</p>
      </Modal>
      <Modal onClick={() => setModal4(!modal4)} open={modal4} borderBg="steelblue">
        <h1>Title</h1>
        <p>This is some placeholder content</p>
      </Modal>
      <Modal onClick={() => setModal5(!modal5)} open={modal5} radius="20px">
        <h1>Title</h1>
        <p>This is some placeholder content</p>
      </Modal>
      <Modal onClick={() => setModal6(!modal6)} open={modal6} error>
        <p>Placeholder error message</p>
      </Modal>
    </Documentation>
  )
}

export default ModalComponent
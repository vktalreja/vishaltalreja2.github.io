import React from "react"
import "./Footer.css"
// import logo1 from "./pic/f_logo.png"
import logo1 from "./pic/vishal.jpg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
          <img src={logo1} alt='' />
          <h1>Vishal</h1>
            {/* <img src={logo1} alt='' /> */}
          </div>
          <p>© 2021. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

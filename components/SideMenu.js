import React from 'react'
import Image from 'next/image'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaDev } from "react-icons/fa"

function SideMenu() {
  return (
    <section>
      <div>
        {/* top */}
        <div>
          <Image
          src={"/asetts/logo.png"}
          width={100}
          height={100}
          alt='Naoya.Y'
          />
          <p>NEXT TECH </p>
        </div>
        {/* middle */}
          
        {/* bottom */}
        <div>
          <div>
            <a href='https://github.com/Kroro1208'>
              <AiFillGithub/>
            </a>
            <a href=''>
              <FaDev/>
            </a>
            <a href=''>
              <AiFillLinkedin/>
            </a>
            <a href=''>
              <AiFillFacebook/>
            </a>
          </div>
          <p>© 2024 Nao.Y</p>
        </div>
      </div>
    </section>
  )
}

export default SideMenu
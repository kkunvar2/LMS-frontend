"use client"
import React ,{FC, useState} from 'react'

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number
}

const Header: FC<Props> = (props) => {

    const [sctive, setsctive] = useState(false)
    const [openSidebar, setopenSidebar] = useState(false)

  return (
    <div className='w-full relative'>
        {/* <div className={`${sctive ? "dark:"}`}></div> */}
    </div>
  )
}

export default Header
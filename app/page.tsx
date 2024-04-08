"use client"
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}
const Page: FC<Props> = (props) => {

  const [open, setopen] = useState(false)
  const [activeItem, setactiveItem] = useState(0)
  return (
    <div>
    <Heading
    title="ELearning"
    description="ELearnig is a platform for student"
    keywords="Programming, MERN, Redux, Machine Learning"/>
    <Header open={open}
    activeItem={activeItem} 
    setOpen={setopen}/>
    </div>
  )
};

export default Page;
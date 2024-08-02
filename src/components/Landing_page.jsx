import React from 'react'
import '../styles/landing.scss';
import { CgArrowLongRight } from "react-icons/cg";
function Landing_page() {
  const blogs = [
    {
      image: "/ro1.jpg",
      title: "hello umuganura",
      content: "welcome welcome dear blogs welcome welcome dear blogs",
    },
    {
      image: "/ro1.jpg",
      title: "hello umuganura",
      content: "welcome welcome dear blogs welcome welcome dear blogs",
    },
    {
      image: "/ro1.jpg",
      title: "hello umuganura",
      content: "welcome welcome dear blogs welcome welcome dear blogs",
    },
  ];
  return (
    <div className='landingHolder'>
      {blogs.map((e)=>(
        <div className='contentBlogs'>
          <div><img src={e.image} className='landImage'/></div>
          <div className='btitle'>{e.title}</div>
          <div className='bcontent'>{e.content}</div>
          <div className='readApp'>
            <span>Read more</span> 
            <CgArrowLongRight/>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Landing_page
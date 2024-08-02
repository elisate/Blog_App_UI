import React from 'react'
import '../styles/landing.scss';
function Landing_page() {
  const blogs = [
    {
      image: "/ro1.jpg",
      title: "hello umuganura",
      content: "welcome welcome dear",
    },
    {
      image: "/ro1.jpg",
      title: "hello umuganura",
      content: "welcome welcome dear",
    },
    {
      image: "/ro1.jpg",
      title: "hello umuganura",
      content: "welcome welcome dear",
    }
  ];
  return (
    <div className='landingHolder'>
      {blogs.map((e)=>(
        <div className='contentBlogs'>
          <div><img src={e.image} className='landImage'/></div>
          <div>{e.title}</div>
          <div>{e.content}</div>
        </div>
      ))}
    </div>
  )
}

export default Landing_page
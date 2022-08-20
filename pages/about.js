import React from 'react'
import styles from '../styles/about.module.css'
import Image from 'next/image'
const About = () => {
  return (
<>
<div className={styles.hero_img} >

<Image src="/blog.jpg" alt="developer" width={3200} height={1000}  />
</div>
<div className={styles.container}>

         <h1 className={styles.heading}>About Our Blog</h1>
         <h2>Introduction</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut ducimus quaerat et debitis numquam, magni earum doloremque? Veniam, placeat provident. Deleniti enim itaque autem distinctio! Iusto eveniet perferendis aperiam nostrum cum placeat necessitatibus voluptate cupiditate tempora quidem debitis doloremque explicabo repellendus quod, fugiat error voluptatem eum inventore! Qui neque iste inventore! Similique nihil nemo, dolor provident, modi, esse eius odio possimus est optio libero aliquam! Nemo deserunt assumenda voluptate tempora earum, velit illum. Repellat natus aspernatur quidem </p>
         <h2>Services</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut ducimus quaerat et debitis numquam, magni earum doloremque? Veniam, placeat provident. Deleniti enim itaque autem distinctio! Iusto eveniet perferendis aperiam nostrum cum placeat </p>
         <h2>Contact</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut ducimus quaerat et debitis numquam, magni earum doloremque? Veniam, placeat provident. Deleniti enim itaque autem distinctio! Iusto eveniet perferendis aperiam nostrum cum placeat  </p>
    </div>
</>
  )
}

export default About
import React, { useEffect, useState } from 'react'
import styles from "../styles/blog.module.css"
import Link from "next/link" 
import * as fs from 'fs'
import Image from 'next/image'
const Blogs = (props) => {
  const [bloggs, setBlogs] = useState(props.allBlogs)
  
  console.log(props)
  console.log(bloggs)
  

  return (
    <>
             <div className={styles.hero_img} >

<Image src="/code.jpg" alt="developer" width={3200} height={1000}  />
</div>
    <div className={styles.blogs}>
          <h2>All Blogs</h2>
             {bloggs.map((item ,index)=>{
              return (
          <div key={index} className={styles.blogItem}>

            <Link href={`/blogs/${item.slug}`}>
            <h3>{item.title}</h3>
            </Link>
            <p>javascript is a language for the logic for the web</p>
          </div>

)})}
         
        
         </div>
    </>
  )
}
export async function getStaticProps(context) {
  let data =  await fs.promises.readdir("blogdata")
  let myFile;
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myFile = await fs.promises.readFile(('blogdata/' + item) , "utf-8")
    console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
  } 
      
  return {
    props: {allBlogs}, 
  }
}

export default Blogs
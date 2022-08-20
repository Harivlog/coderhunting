import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from "../../styles/blogpost.module.css"
import * as fs from 'fs'
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myblog)
  const router = useRouter()
  
  return (
    <>
      <div className={styles.app__blogpost}>
        <h1>{blog && blog.title}</h1>
        <hr />
       <div className={styles.app__blogpost_content}>

        <p>{blog && blog.contentOne}</p>
        <p>{blog && blog.contentTwo}</p>
     
        <h2>
          {blog && blog.headingtwo}
        </h2>
        <p>{blog && blog.contentThree}</p>
        <h2>{blog && blog.headingone}</h2>
        <p>{blog && blog.contentFour}</p>
        <p>{blog && blog.contentfive}</p>
        <p>{blog && blog.contentsix}</p>
        <p>{blog && blog.contentseven}</p>
       </div>
      </div>

    </>
  )

}
export async function getStaticPaths(){
  return {
    paths : [
     {params : {slug : 'how-to-leran-java'}} ,
     {params : {slug : 'how-to-leran-java'}} ,
     {params : {slug : 'how-to-leran-java'}}

    ],
    fallback : true
  }
}
export async function getStaticProps(context) {
  const { slug } = context.params
  console.log(context.params)
  let myblog = await fs.promises.readFile(`blogdata/${slug}.json` , 'utf-8')
  return {
    props: {myblog : JSON.parse(myblog)}, 
  }
}
export default Slug
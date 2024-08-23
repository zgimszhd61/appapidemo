//app/post/[postId]/page.tsx
import { Metadata } from 'next'
import React from 'react'
interface PageProps {
  params :{
    postId : string
  }
}

type Post = {
  userId : number
  id : number
  title :string 
  body : string
}

export async function generateMetadata({params}:PageProps):Promise<Metadata> {
  // const res = await fetch('xxxxxx')
  // const data = (await res.json() as Post)
  return {
    title:"123123"
  }
}

export async function generateStaticParams(){
  const posts = ['post-one','post-two']

  return posts.map((post)=>{
    return{
      postId:post
    }
  })
}

export default async function page({params}: PageProps) {
  console.log(params);
  return (
    <div>
      {params.postId}
    </div>
  )
}

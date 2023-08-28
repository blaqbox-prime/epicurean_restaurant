import { PostProps } from '@/types'
import { urlFor } from '@/utils/sanity'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { PortableText } from '@portabletext/react';
import Link from 'next/link'



const BlogPostCard = ({blogPost} : {blogPost: PostProps}) => {
  return (
    <Link href={`/blog/${blogPost.slug.current}`}>
    <article className='blog-post-card mx-auto'>
        <div className="aspect-square w-full">
        <Image 
            src={urlFor(blogPost.mainImage).url()}
            alt={blogPost.title.toLowerCase()}
            width={150}
            height={150}
            className='img-cover rounded-[24px] '
        />
        </div>
        <div className="flex space-x-4 my-4">
        <p className="label-1" >{moment(blogPost.publishedAt).format("MMMM DD, YYYY")}</p>
        </div>

        <h2 className='title-4 line-clamp-2'>{blogPost.title}</h2>

        <summary className='line-clamp-3 body-4 my-3'>
          <PortableText value={blogPost.body}/>
        </summary>

    </article>
    </Link>
  )
}

export default BlogPostCard
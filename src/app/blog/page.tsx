import { BlogPostCard, Hero } from '@/components';
import { getPosts } from '@/utils/queries';
import { urlFor } from '@/utils/sanity';
import React from 'react'
import page from './../contact/page';
import { PostProps, SlideProps } from '@/types';
import Image from 'next/image';

async function Blog(){

  const posts = await getPosts();

  // console.log(posts)

  // Create slides from first 5 posts

  let slides = [posts[0], posts[1], posts[2]];
  
  slides = slides.map((post,idx) => {
    if (idx < 3) return {
      imageUrl: urlFor(post.mainImage).url(),
  title1: post.title,
  title2: '',
  subtitle: post.topic,
  text: "",
  link: `/blog/${post.slug.current}`,
  linkText: "Read More",
  secondary: false,
  active: idx == 0 ? true : false,
    }
  })


  return (
    <div className="blog-page">
      {/* HERO - HEADER SECTION */}
      <Hero page="blog" slides={slides} />

      <main className='text-center section'
       aria-label='blog'
      >

      <div className="container mx-auto">
          <p className="section-subtitle label-2">
          Stay Updated with Our Blog Page for the Best in Food, Wine, and Memorable Experiences
          </p>

          <h2 className="headline-1 section-title">Epicurean Chronicles: A Gastronomic Journey of Flavors and Events</h2>
          <p className="section-text">
          Explore the Latest News, Events, and Culinary Delights at Epicurean
          </p>

          {/* GRID list of blog posts */}
          <section className='blog-posts-grid section'>
              {
                posts.map((post: PostProps) => (
                  <BlogPostCard blogPost={post} key={post._id} />
                ))
              }
          </section>


          </div>
          {/* BG IMAGES */}
          <Image
          src="/assets/images/shape-1.png"
          width={246}
          height={412}
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim h-[412px] w-[246px]"
        />

        <Image
          src="/assets/images/shape-5.png"
          width={343}
          height={345}
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim h-[845px] w-[auto]"
        />

      </main>

    </div>
  )
}

export default Blog;

export async function getServerSideProps() {

  return {
    props: {},
  };
}
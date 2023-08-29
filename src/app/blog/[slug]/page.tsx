import { getPost, getPostSlugs } from "@/utils/queries";
import { urlFor } from "@/utils/sanity";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components";

async function page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const slugs: string[] = await getPostSlugs();

  let nextSlug, prevSlug;

  async function setupSlugs() {
    const nextIdx = slugs.findIndex((slug) => slug === params.slug) + 1;

    if (nextIdx >= 0 && nextIdx < slugs.length) {
      nextSlug = slugs[nextIdx];
    } else {
      nextSlug = null;
    }

    const prevIdx = slugs.findIndex((slug) => slug === params.slug) - 1;

    if (prevIdx >= 0) {
      prevSlug = slugs[prevIdx];
    } else {
      prevSlug = null;
    }
  }

  await setupSlugs();

  return (
    <article className="container mx-auto post-page">
      <div className="container text-center section">
        <p className="label-2 section-subtitle mt-[80px]">{post.topic}</p>

        <h1 className="headline-1 hero-title">{post.title}</h1>
        <div className="flex space-x-4 my-2 mx-auto justify-center items-center">
          <div className="flex space-x-4 items-center text-center justify-center">
            <Image
              src={urlFor(post.author.image).url()}
              width={30}
              height={30}
              alt="avatar"
              className="rounded-full aspect-square "
            />

            <p className="body-2 text-[var(--gold-crayola)]">
              {post.author.name}
            </p>
          </div>
          <p className="body-3">
            {moment(post.publishedAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </div>

      <Image
        priority={true}
        src={urlFor(post.mainImage).url()}
        alt="main image"
        width={1920}
        height={720}
        className=" mt-[-50px] mb-[50px] h-[600px] w-full img-cover"
      />

      <main className="section-text post-page-content pb-12 body-2">
        <PortableText value={post.body} />
      </main>

      <div>
        <div className="flex items-center justify-between">
          {prevSlug == null ? (
            <></>
          ) : (
            <div className="prev-post flex items-center space-x-12">
              <button className="slider-btn prev" aria-label="previous post">
                <Link href={`/blog/${prevSlug}`}>
                  <IoChevronBack />
                </Link>
              </button>
              <p>Previous Post</p>
            </div>
          )}

          {/* BACK TO BLOGS */}
          <span className="block hover-underline body-1">
            <Link href="/blog">Back To Posts</Link>
          </span>

          {nextSlug == null ? (
            <></>
          ) : (
            <div className="next-post flex items-center space-x-12">
              <p>Next Post</p>
              <button className="slider-btn next" aria-label="next post">
                <Link href={`/blog/${nextSlug}`}>
                  <IoChevronForward />
                </Link>
              </button>
            </div>
          )}
        </div>
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
    </article>
  );
}

export default page;

export async function getServerSideProps() {

  return {
    props: {},
  };
}

import { sanityClient } from '@/utils';

export async function getLatestEvents(){
   const query = `*[_type == 'category' && title == 'Events']{
    "events" : *[_type == 'post' && references(^._id)]|order(publishedAt desc) {
      _id,
       title,
       publishedAt,
       topic,
       mainImage 
     }[0..2]
   }[0]`;

try{
  let {events} = await sanityClient.fetch(query)
  return events;
}catch(err){
  throw new Error("Error fetching events:")
}

} 

export async function getAllMenus(){
  const query = `*[_type == 'product']{
    image,
      new,
      seasonal,
      title,
      summary,
      price,
      description,
      slug,
      "menus": menus[]->title
  }`;


  

  const menusQuery = `*[_type == 'menu']{
    title,
    slug,
    _id,
    headline,
    subtitle,
    sectionSubtitle,
    coverImage,
    stripImage
  }`

try{
 let products = await sanityClient.fetch(query)
 let menus = await sanityClient.fetch(menusQuery)
 
const menuMap : Record<string, Object>= {};

menus.forEach((menu:any) => {
  const menuTitle = menu.title;
  menuMap[menuTitle] = {
    items: products.filter((product: any) => product.menus.includes(menuTitle)),
    details: menu
  };
});

 return menuMap;

}catch(err){
  console.log(err)
 throw new Error("Error fetching products:")
}

} 

export async function getPosts(){
  const query = `*[_type == 'post']{
    _id,
    title,
    topic,
    publishedAt,
    mainImage,
    body,
    slug,
    author -> {
      name,
      image,
    },
    category -> {
      title
    }
  }`;

try{
 let posts = await sanityClient.fetch(query)
 return posts;
}catch(err){
  console.error(err);
 throw new Error("Error fetching blog posts:")
}

} 

export async function getPostSlugs() {
  const query = `*[_type == 'post']{
    slug
  }`;

  try {
    const posts = await sanityClient.fetch(query);
    return posts.map((post:any) => post.slug.current);
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching blog post slugs:");
  }
}

export async function getHomepageMenu(){
 // Fetch the menu with the title "home page"
const menuQuery = `*[_type == 'menu' && title == 'Home Page'][0]`;
const homePageMenu = await sanityClient.fetch(menuQuery);

if (homePageMenu) {
  // Use the reference to filter products associated with the "home page" menu
  const productsQuery = `*[_type == 'product' && references($menuRef)]{
    image,
    new,
    seasonal,
    title,
    summary,
    price,
    description,
    slug,
    menus
  }`;
  
  const params = {
    menuRef: homePageMenu._id
  };
  
  const products = await sanityClient.fetch(productsQuery, params);
  // Now products contains the products associated with the "home page" menu
  return products;
} else {
  console.log("Menu 'home page' not found.");
}
}

export async function getPost(slug: string){
  const query = `*[_type == 'post' && slug.current == '${slug}']{
    _id,
    title,
    topic,
    publishedAt,
    mainImage,
    body,
    slug,
    author -> {
      name,
      image,
    },
    category -> {
      title
    }
  }[0]`;

try{
 let post = await sanityClient.fetch(query)
//  console.log()
 return post;
}catch(err){
  console.error(err);
 throw new Error("Error fetching blog post")
}

} 

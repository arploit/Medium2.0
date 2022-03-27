import Head from 'next/head'
import { sanityClient } from "../sanity"
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import { Post } from './typing'
import Posts from '../components/Posts/Posts'


interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium 2.0</title>
      </Head>
      <Header />
      <Banner />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post, idx) => (
          <Posts post={post} key={idx} />
        ))}
      </div>


    </div>
  )
}

export default Home


export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
  name,
  image
},
description,
mainImage
}`;
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    }
  }
}
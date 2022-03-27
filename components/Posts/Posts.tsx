import Link from 'next/link';
import React from 'react'
import { Post } from '../../pages/typing'
import { urlFor } from '../../sanity';

interface Props {
    post: Post;
}
const Posts = ({ post }: Props) => {
    return (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='group cursor-pointer border rounded-lg overflow-hidden'>
                <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="" />
                <div className='flex  justify-between p-5 bg-white items-center'>
                    <div>
                        <p className='text-lg font-bold'>{post.title}</p>
                        <p className='text-xs'>{post.description} by {post.author.name}</p>
                    </div>
                    <img className=" border-black h-12 w-12 rounded-full object-cover" src={urlFor(post.author.image).url()!} alt="" />
                </div>
            </div>
        </Link>
    )
}

export default Posts
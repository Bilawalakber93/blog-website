import React, { useState } from 'react';
import BlogItem from './blogitem';
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  blogImage: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Prompt Engineering",
    description: "The role of prompt Engineering in AI Application.",
    author: "John Doe",
    authorImage: "/Blog-author-img/Image-2.jpeg",
    date: "2024-12-20",
    category: "A.I",
    blogImage: "/Blogs-img/Blog-1.png",
  },
  {
    id: 2,
    title: "Chat-GPT For Beginners",
    description: "Artificial intelligence has a pivotal role to play in society.",
    author: "Jane Smith",
    authorImage: "/Blog-author-img/Image-1.jpeg",
    date: "2024-12-18",
    category: "Chat-GPT",
    blogImage: "/Blogs-img/Blog-2.png",
  },
  {
    id: 3,
    title: "Bitcoin-Block-Chain",
    description: "Predictions and trends for web development in 2025.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-3.jpeg",
    date: "2024-12-15",
    category: "Bit-Coin",
    blogImage: "/Blogs-img/Blog-7.png",
  },
  {
    id: 4,
    title: "A.I Ethics is important or not",
    description: "A.I ie behind everything from smart speakers to.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-4.jpeg",
    date: "2024-12-15",
    category: "A.I",
    blogImage: "/Blogs-img/Blog-3.png",
  },
  {
    id: 5,
    title: "The Future of Chat-GPT",
    description: "Predictions and trends for Chat-GPT in 2025.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-5.jpeg",
    date: "2024-12-15",
    category: "Chat-GPT",
    blogImage: "/Blogs-img/Blog-5.png",
  },
  {
    id: 6,
    title: "The Future of Digital Currency",
    description: "Predictions and trends for Digital currency in 2025.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-2.jpeg",
    date: "2024-12-15",
    category: "Bit-Coin",
    blogImage: "/Blogs-img/Blog-10.png",
  },
  {
    id: 7,
    title: "A.I Power Marketing",
    description: "If you are a marketer seeking innovative ways to captivate your.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-3.jpeg",
    date: "2024-12-15",
    category: "A.I",
    blogImage: "/Blogs-img/Blog-9.png",
  },
  {
    id: 8,
    title: "Level up your Teaching with Chat-GPT",
    description: "The American sducation system is on the cusp of a significant.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-1.jpeg",
    date: "2024-12-15",
    category: "Chat-GPT",
    blogImage: "/Blogs-img/Blog-4.png",
  },
  {
    id: 9,
    title: "Securing The Future",
    description: "As digital money becomes more popular, companies creating digital.",
    author: "Sam Wilson",
    authorImage: "/Blog-author-img/Image-3.jpeg",
    date: "2024-12-15",
    category: "Bit-Coin",
    blogImage: "/Blogs-img/Blog-8.png",
  },
  // Add other blog posts here...
];

const BlogListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter blog posts based on selected category
  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex justify-center gap-20 my-10 ">
        {['All', 'A.I', 'Chat-GPT', 'Bit-Coin'].map((category) => (
          <button
            key={category}
            className={`py-1 px-4 rounded-sm ${
              selectedCategory === category ? 'bg-black text-white' : 'bg-gray-300 text-black'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Items */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[7px_7px_0px_#000000]">
            <Image
              src={post.blogImage}
              alt={post.title}
              width={96}
              height={96}
              className="w-full h-[200px] object-cover border-b border-black"
            />
            <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{post.category}</p>
            <div className="p-5">
              <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{post.title}</h5>
              <p className="mb-3 text-sm tracking-tight text-gray-700">{post.description}</p>
              <div className="inline-flex items-center py-2 font-semibold text-center">
              <Link href={`/blog/${post.id}`}> Read more </Link>
              </div>
              <Image
              src={post.authorImage}
              alt={post.title}
              width={96}
              height={96}
              className="w-9 h-8 object-cover border-b border-black rounded-full"
            />
            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{post.author}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;

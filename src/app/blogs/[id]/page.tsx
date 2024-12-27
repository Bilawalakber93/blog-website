// pages/blog/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

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

// Example blog data
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
  // Add more blog posts here...
];

interface BlogProps {
  post: BlogPost;
}

// Static paths for dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Return a 404 if the route does not exist
  };
};

// Fetch blog data for each post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      notFound: true, // Show 404 page if the blog post is not found
    };
  }

  return {
    props: {
      post,
    },
  };
};

// Blog Post Component
const BlogPostPage = ({ post }: BlogProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // Fallback page
  }

  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Image
          src="/logo-2.png"
          alt="Logo"
          width={180}
          height={180}
          className="w-[130] sm:w-auto rounded-2xl"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
        </button>
      </div>

      {/* Blog Content */}
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
          {post.title}
        </h1>
        <Image
          src={post.authorImage}
          alt={post.author}
          width={60}
          height={60}
          className="mx-auto mt-6 border border-white rounded-full"
        />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{post.author}</p>
        <p className="mt-1 text-gray-600">{post.date}</p>
      </div>

      {/* Blog Details */}
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={post.blogImage}
          alt={post.title}
          width={1280}
          height={720}
          className="border border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;

import { GetStaticPaths, GetStaticProps } from 'next';

const BlogPost = ({ post }: { post: { title: string; content: string } }) => {
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post.' },
  ];

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // 404 for undefined routes
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post.' },
  ];

  const post = posts.find((p) => p.id === params?.id);

  return {
    props: {
      post: post || null,
    },
  };
};

export default BlogPost;

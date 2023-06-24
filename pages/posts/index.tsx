import Link from "next/link";

interface Posts {
  id: number;
  title: string;
}

export default function Posts({ posts }: { posts: Posts[] }) {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`} passHref>
          <div>
            <p>
              {post.id} {post.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}

interface Posts {
  id: number;
  title: string;
  body: string;
}

export default function Post({ post }: { post: Posts }) {
  return (
    <div>
      <div key={post.id}>
        <p>
          {post.id} {post.title}
        </p>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
      {
        params: { postId: "5" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(params.postId);

  return {
    props: {
      post: data,
    },
  };
}

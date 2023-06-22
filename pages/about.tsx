import User from "@/components/user";

interface User {
  name: string;
  email: string;
  id: number;
}

export default function About({ users }: { users: User[] }) {
  return (
    <>
      <h1>About page</h1>
      {users?.map((item) => (
        <User user={item} key={item.id} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

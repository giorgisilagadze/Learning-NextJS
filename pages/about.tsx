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
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
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

import Footer from "@/components/Footer";
import User from "@/components/user";
import { Title } from "@/styles/styled.about";

interface User {
  name: string;
  email: string;
  id: number;
}

export default function About({ users }: { users: User[] }) {
  return (
    <>
      <Title>About page</Title>
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

About.getLayout = function pageLayout(page: any) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

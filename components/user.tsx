interface User {
  name: string;
  email: string;
  id: number;
}

export default function User({ user }: { user: User }) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}

export default function Oldcars() {
  return (
    <>
      <h1>old cars page</h1>
      {["1", "2", "3", "4", "5"].map((image) => (
        <img src={`/${image}.jpeg`} alt="old car" width="300" height="200" />
      ))}
    </>
  );
}

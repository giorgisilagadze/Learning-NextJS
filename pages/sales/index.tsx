interface Selling {
  id: number;
  text: string;
  category: string;
}

export default function Sales({ selling }: { selling: Selling[] }) {
  return (
    <>
      <div>
        {selling.map((item) => (
          <p>
            {item.id} | {item.text}
          </p>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();

  return {
    props: {
      selling: data,
    },
  };
}

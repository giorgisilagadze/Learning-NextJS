interface Selling {
  id: number;
  text: string;
  category: string;
}

export default function Category({
  selling,
  category,
}: {
  selling: Selling[];
  category: string;
}) {
  return (
    <>
      <div>
        <h1>this is the products of {category}</h1>
        {selling.map((item) => (
          <div key={item.id}>
            <p>
              {item.id} | {item.text} | {item.category}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Giorgi"]);
  console.log(query);

  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/product?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      selling: data,
      category,
    },
  };
}

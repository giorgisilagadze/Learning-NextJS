import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

export default function Dashboard() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "error occurs";
  if (!data) return "no data";

  return (
    <div>
      <p>{data.likes}</p>
      <p>{data.posts}</p>
      <p>{data.followers}</p>
    </div>
  );
}

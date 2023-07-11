import { useState } from "react";

interface Item {
  id: number;
  title: string;
}

export default function Comment() {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <button onClick={fetchData}>fetch data</button>
      {comments.map((item: Item) => (
        <p>
          {item.id} | {item.title}
        </p>
      ))}
    </div>
  );
}

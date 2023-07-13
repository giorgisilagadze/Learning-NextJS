import { useState } from "react";
import { json } from "stream/consumers";
import CommentId from "../api/comments/[commentId]";

interface Item {
  id: number;
  title: string;
}

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [comm, setComm] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitData = async () => {
    const response = await fetch("/api/comments", {
      method: "Post",
      body: JSON.stringify({ comm }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  const deleteData = async (CommentId: number) => {
    const response = await fetch(`/api/comments/${CommentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    fetchData();
  };

  return (
    <div>
      <input type="text" onChange={(e) => setComm(e.target.value)} />
      <button onClick={submitData}>submit data</button>
      <button onClick={fetchData}>fetch data</button>
      {comments.map((item: Item) => (
        <>
          <p>
            {item.id} | {item.title}
          </p>
          <button onClick={() => deleteData(item.id)}>delete</button>
        </>
      ))}
    </div>
  );
}

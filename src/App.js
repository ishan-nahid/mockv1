import './App.css';
import Data from "./mock-data.json";
import {useState} from "react";

export default function App (){
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
      {
        Data.filter(post => {
          if (query === '') {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
            <p>{post.title}</p>
            <p>{post.author}</p>
          </div>
        ))
      }
    </div>
  )
};

import { useEffect, useState } from "react";
import "./styles.css";
import Folder from "./component/Folder";

export default function App() {
  const [folders, setFolders] = useState([]);

  useEffect(function getFolderList() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setFolders(data))
      .catch((er) => console.log(er));
  }, []);

  return (
    <div className="App">
      <h1>Mac Style Folder</h1>
      {folders.map((folder, index) => (
        <Folder folder={folder} key={index} />
      ))}
    </div>
  );
}

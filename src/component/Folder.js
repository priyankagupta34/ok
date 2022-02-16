import { useState } from "react";
import "./../styles.css";

export default function Folder({ folder, color }) {
  const [show, setShow] = useState(false);
  return (
    <div className="folderStyleShow">
      {folder.isFolder && (
        <span className={!show ? "gt" : "movgt"} onClick={() => setShow(!show)}>
          >
        </span>
      )}
      <span
        className="name"
        style={{ color: folder.isFolder ? "black" : "gray" }}
      >
        {folder.name}
      </span>
      {folder.isFolder &&
        show &&
        folder.insiders.map((innerFolder, index) => (
          <div className="folderShow" key={index}>
            <Folder folder={innerFolder} />
          </div>
        ))}
    </div>
  );
}

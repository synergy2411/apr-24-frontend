import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [repos, setRepos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Effect Works");
    return () => {
      console.log("Clean Up");
    };
  }, [counter]);

  useEffect(() => {
    let notifier = setTimeout(async () => {
      try {
        if (searchTerm !== "") {
          const response = await fetch(
            `https://api.github.com/users/${searchTerm}/repos`
          );
          const result = await response.json();
          setRepos(result);
        }
      } catch (err) {
        console.error(err);
      }
    }, 2000);

    return () => {
      clearTimeout(notifier);
    };
  }, [searchTerm]);

  return (
    <div className="container">
      <h1>Use Effect Hook Demo</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>

      <button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      {toggle && <p>Toggled Paragraph</p>}

      <hr />

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectDemo;

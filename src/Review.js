import { useState } from "react";

const basekey = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json";
const key = "0MnjVcltE0bF9lDSVnEDUefqPup2Zypm";
let url;
url = basekey + "?api-key=" + key;

// const modal = document.createElement("h2");

//todo
//random reviews
//add a button
//display title
//headline,
//summary_short
//link
const Review = () => {
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");

  async function review() {
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;
    // console.log(result);
    // console.log(data);
    const random = Math.floor(Math.random() * result.length);
    const re = result[random];
    // setState[re.headline];
    // console.log(re.headline);
    setState([re.headline]);

    setTitle([re.display_title]);
    setSummary([re.summary_short]);
    setLink([re.link.url]);
  }

  return (
    <div>
      <h2>{title}</h2>
      <h2>{state}</h2>
      <h3>{summary}</h3>
      <h4>
        Link to
        <a href={link} title="link">
          url{" "}
        </a>
      </h4>

      <button onClick={review} className="but">
        Click Me
      </button>
    </div>
  );
};

export default Review;

const basekey = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json";
const key = "Ta9OPFD748oGW8IjDQimNo4FEdi2jfPa";
let url;
url = basekey + "?api-key=" + key;

async function review() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

review();

const Review = () => {
  return (
    <div>
      <h1>htir</h1>
    </div>
  );
};

export default Review;

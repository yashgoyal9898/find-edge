import Blogpostcard from '@/components/Blogpostcard/Blogpostcard';

async function getData() {
  const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=63c4e5eca2554ed2a410f45266d556cc');
  const data = await res.json();
  return data.articles; // Return only the articles
}

async function Page() {
  const articles = await getData();
  return (
    <div className='home-latest-post'>
      {articles.map((article) => (
        <Blogpostcard key={article.url} article={article} />
      ))}
    </div>
  );
}

export default Page;

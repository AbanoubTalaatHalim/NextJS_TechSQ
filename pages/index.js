import News from "../components/News";

export default function Home({ news }) {
  return (
    <div>
      <News news={news} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(` http://80.240.21.204:1337/news?skip=0&limit=100`);
  const news = await res.json();
  return {
    props: {
      news,
    },
  };
};

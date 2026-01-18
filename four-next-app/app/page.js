import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let putData = async (id,thumbnail,title,description,date,url) => {
    new=[
      "id":id,
      "thumbnail":thumbnail,
      "title":title,
      "description":description,
      "date":date,
      "url":url
    ]
  }

  let data = [];
  try {
    let response = await fetch('https://www.freetogame.com/api/games?platform=pc');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="w-screen h-auto min-h-screen grid grid-cols-4 ">
      <div>
        <iframe
          width="200"
          height="300"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {data.map((game) => (
        <div key={game.id} className="m-4 p-4 border-2 border-black rounded-lg w-50 h-100 flex flex-col items-center justify-start gap-4 bg-blue-200">
          <div className="w-[99%] h-20 flex justify-center items-center">
            <img src={game.thumbnail} alt={game.title} className="w-[99%] h-[99%]" />
          </div>
          <div className="w-[99%] h-10 flex justify-center items-center">
            <h1>{game.title}</h1>
          </div>
          <div className="w-[99%] h-30 flex justify-center items-center">
            <p>{game.short_description}</p>
          </div>
          <div className="w-[99%] h-10 flex justify-center items-center">
            <p>Release Date: {game.release_date}</p>
          </div>
          <div className="w-[99%] h-20 flex justify-center items-center">
            <button className="rounded-lg w-[80%] h-[80%] bg-black text-white font-bold text-xl">
              <Link href={{ pathname: `/${game.game_url}`, query: { id: game.id } }}>play</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

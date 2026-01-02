import Image from "next/image";

export default async function Home() {

  let data = await fetch('https://api.vercel.app/blog', { next: { revalidate: 3600 } })
  let posts = await data.json()
  return (
    <div className="w-screen h-[90vh] flex flex-col justify-center items-center bg-blue-950 text-white">
      <ul className="mb-8 text-3xl font-bold w-[40%] h-[50%] overflow-y-auto">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const dynamic = 'force-dynamic';
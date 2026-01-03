// "use client";
import Image from "next/image";

export default function Home() {
  // console.log("This ID use ",process.env.ID," for login");
  return (
    <div>
      <h1>THis is Home Pages</h1>
      <p>This ID use "{process.env.NEXT_PUBLIC_ID}" for login</p>
      <p>This Password use "{process.env.NEXT_PUBLIC_SECRET}" for login</p>
    </div>
  );
}

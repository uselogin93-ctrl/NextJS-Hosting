"use client";
import Image from "next/image";

export default function Home() {
  console.log("This ID use ",process.env.ID," for login");
  return (
    <div>
      <h1>THis is Home Pages</h1>
      {/* <p>This ID use "{process.env.ID}" for login</p> */}
      {process.env.ID}
      is that is any changes happened
    </div>
  );
}

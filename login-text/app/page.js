import Image from "next/image";

export default function Home() {
  const payNow = () => {
    const upiLink = "upi://pay?pa=787305983@ibi&pn=GetMyChai&am=50&cu=INR";
    window.location.href = upiLink;
  };
  return (
    <div>
      <button onClick={payNow}>
        Buy Me a Chai ☕
      </button>
    </div>
  );
}

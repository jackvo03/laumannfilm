import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center w-screen h-screen bg-black">
      <div className="relative w-full h-full max-w-screen max-h-screen">
        <Image
          src="/laumann.png"
          alt="Laumann Film"
          fill
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
}
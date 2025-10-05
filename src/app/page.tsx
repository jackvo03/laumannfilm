import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-t from-[#e6e6e6] via-[#f1f0ec] to-[#e6e6e6]">
      <div className="relative w-full h-full max-w-screen max-h-screen">
        <Image
          src="/laumann.png"
          alt="Laumann Film"
          fill
          className="object-contain 
            [mask-image:radial-gradient(circle,black_70%,transparent_100%)]
            [mask-repeat:no-repeat]
            [mask-position:center]
            [mask-size:100%_100%]"
          priority
        />
      </div>
    </main>
  );
}
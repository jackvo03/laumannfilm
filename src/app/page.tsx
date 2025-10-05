import Image from "next/image";

export default function Home() {
  return (
    <main
      className="
        relative flex items-center justify-center
        w-screen min-h-screen h-dvh overflow-hidden
        bg-gradient-to-t from-[#e6e6e6] via-[#f1f0ec] to-[#e6e6e6]
      "
    >
      <Image
        src="/laumann.png"
        alt="Laumann Film"
        fill
        // Hele bildet synlig (letterboxing), sterk feather rundt
        className="
          object-contain
          [mask-image:radial-gradient(circle,black_60%,transparent_100%)]
          [mask-repeat:no-repeat] [mask-position:center] [mask-size:100%_100%]
        "
        sizes="100vw"
        priority
      />
    </main>
  );
}
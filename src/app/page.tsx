import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <Image
        src="/laumann.png"
        alt="Laumann Film"
        fill              // fyller hele parent (her: main)
        className="object-cover" // dekker hele skjermen, cropper hvis nødvendig
        priority
      />
    </main>
  );
}
export default function Video({ src }: { src: string }) {
  return (
    <div className="relative w-full pt-[56.25%] overflow-hidden rounded-2xl">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title="Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

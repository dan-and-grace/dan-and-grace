import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-5 h-full heart-background">
      <div className="relative flex flex-col place-items-center gap-7">
        <h1 className="text-4xl font-bold">Save the date</h1>
        {/* Image to be replaced */}
        <Image
          className="w-auto h-auto rounded-sm"
          src="/save-the-date.jpeg"
          alt="Dan and Grace smiling and hugging each other sweetly."
          width={600}
          height={600}
          priority
        />
        <div className="flex flex-col text-center gap-7">
          <div className="flex flex-col text-center gap-1">
            <p className="text-3xl font-semibold">Dan & Grace</p>
            <p className="text-2xl font-medium">10th May 2023</p>
            <p className="text-2xl font-medium">Carlton, Nottingham, UK</p>
          </div>
          <p className="font-medium">More information to come!</p>
        </div>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-[60%]">
        <h1 className="text-2xl font-bold tracking-tight">this is frank</h1>
        <Image
          className="w-full h-auto"
          src="/homepage.JPG"
          alt="My photo"
          width={180}
          height={180}
          priority
        />
        <p className="text-sm/6 text-center sm:text-left tracking-[-.01em]">
          keep reading to see more of frank :)
        </p>
        <div className="w-full sm:w-auto">
          <Button
            className="mt-2"
            onClick={() => toast("Hello from Frank!")}
          >
            click to say hi
          </Button>
        </div>

        <h2 className="text-xl font-semibold mt-6">my favorite pictures of frank</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {[
              "/carousel1.JPG",
              "/carousel2.JPG",
              "/carousel3.JPG",
              "/carousel4.JPG",
              "/carousel5.JPG",
              "/carousel6.JPG",
              "/carousel7.JPG",
            ].map((src, idx) => (
              <CarouselItem key={idx}>
                <Image
                  className="w-full h-auto"
                  src={src}
                  alt={`Carousel image ${idx + 1}`}
                  width={1200}
                  height={800}
                  priority={idx === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  );
}

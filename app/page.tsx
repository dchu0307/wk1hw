"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const pref = stored ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (pref === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.classList.toggle('dark');
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="font-sans min-h-screen bg-transparent text-foreground relative">
      <header className="sticky top-0 z-40 bg-background border-b">
        <nav className="container mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight">Frank</span>
          <ul className="flex items-center gap-4 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a></li>
            <li><a href="#cta" className="hover:text-foreground transition-colors">Say Hi</a></li>
          </ul>
        </nav>
      </header>

      {/* Wallpaper background below header */}
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 bottom-0 top-14 -z-10 bg-[url('/wallpaper.webp')] bg-cover bg-center opacity-20 dark:opacity-25"
      />

      <main className="container mx-auto max-w-4xl px-4 py-10 md:py-12">
        <section id="about" className="space-y-4">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle className="inline-block bg-black text-white px-2 py-1 rounded">this is frank</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                className="w-full aspect-[3/2] object-cover rounded-lg shadow-sm ring-1 ring-border"
                src="/homepage.JPG"
                alt="My photo"
                width={1200}
                height={800}
                priority
              />
            </CardContent>
          </Card>
          <p className="text-base leading-relaxed inline-block bg-black text-white px-2 py-1 rounded">
            keep reading to see more of frank :)
          </p>
        </section>

        <section id="gallery" className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight inline-block bg-black text-white px-2 py-1 rounded">my favorite pictures of frank</h2>
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
                    className="w-full aspect-[3/2] object-cover rounded-lg ring-1 ring-border"
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
        </section>

        <section id="cta" className="mt-10">
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-10 px-5 hover:opacity-90 active:scale-[0.98] transition focus-visible:ring-2 focus-visible:ring-primary dark:bg-black dark:text-white dark:hover:bg-black/90"
                  onClick={() => toast("Hello from Frank!")}
                >
                  click to say hi
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>say hi to frank</TooltipContent>
            </Tooltip>
          </div>
        </section>
      </main>

      {/* Dark mode toggle bottom-right */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          className="h-9 px-3 bg-card text-card-foreground border-border"
          onClick={toggleTheme}
        >
          {isDark ? "Light" : "Dark"} mode
        </Button>
      </div>
    </div>
  );
}

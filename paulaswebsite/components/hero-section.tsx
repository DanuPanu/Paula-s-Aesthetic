"use client"

import Image from "next/image" // Tuodaan Image-komponentti
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-12 lg:pt-20 bg-blush min-h-[calc(100svh-5rem)] lg:min-h-0 flex items-center">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Vasen sarake: Teksti ja painikkeet */}
          <div className="contents lg:block lg:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight text-balance order-1 lg:order-none">
              Kauneus alkaa luottamuksesta ja ammattitaidosta
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 order-3 lg:order-none">
              <Button
                className="rounded-full px-8 py-6 text-base"
                onClick={() => document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ota yhteyttä
              </Button>
            </div>
          </div>

          {/* Oikea sarake: Kuva */}
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto lg:mx-0 order-2 lg:order-none">
            <div className="aspect-[4/5] rounded-2xl bg-blush-dark/50 border border-border/30 flex items-center justify-center overflow-hidden relative">
              {/* Lisätty kuva-komponentti täyttämään vanhempi div */}
              <Image 
                src="/images/1.jpg" // Varmista, että tiedosto löytyy public-kansiosta tällä nimellä
                alt="Kauneushoitolan palvelu"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
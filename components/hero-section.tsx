"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-10 lg:pt-16 bg-blush min-h-[90svh] flex items-center overflow-hidden">
      {/* Levennetty max-w-7xl:ään, jotta osio täyttää ruudun paremmin */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Vasen sarake: Teksti ja painikkeet */}
          <div className="flex flex-col space-y-8 lg:space-y-10 text-center lg:text-left order-1">
            <div className="space-y-6">
              {/* Otsikko on nyt huomattavasti suurempi (text-5xl -> text-7xl) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#2a2420] leading-[1.1] text-balance">
                Kauneus alkaa luottamuksesta ja ammattitaidosta
              </h1>
              {/* Lisätty lyhyt esittelyteksti täyttämään tilaa ja tuomaan kontekstia */}
              <p className="text-lg lg:text-xl text-[#2a2420]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tervetuloa Paula’s Aesthetic -klinikalle, missä korostamme luonnollista kauneuttasi 
                vankalla ammattitaidolla ja laadukkailla hoidoilla.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <Button
                variant="secondary"
                className="rounded-full px-10 py-7 text-lg bg-background border border-border text-foreground hover:bg-secondary shadow-sm transition-all"
                onClick={() => document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ota yhteyttä
              </Button>
              <Button
                variant="ghost"
                className="rounded-full px-10 py-7 text-lg hover:bg-white/50"
                onClick={() => document.getElementById('palvelut')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lue palveluista
              </Button>
            </div>
          </div>

          {/* Oikea sarake: Kuva (Poistettu max-w rajoitukset) */}
          <div className="relative w-full order-2">
            <div className="aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-[2rem] bg-blush-dark/30 border border-border/30 overflow-hidden relative shadow-2xl">
              <Image
                src="/images/3.jpg"
                alt="Kauneushoitolan palvelu"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Koristeellinen elementti taustalla tuomaan syvyyttä */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#2a2420]/10 rounded-[2rem] hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  )
}
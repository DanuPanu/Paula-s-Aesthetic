"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="yhteystiedot" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight text-balance">
              Ota seuraava askel kauneuden polulla
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Varaa aika tai ota yhteyttä, niin keskustellaan yhdessä, miten voin 
              auttaa sinua saavuttamaan toiveesi. Ensimmäinen konsultaatio on 
              aina maksuton.
            </p>
          </div>

          {/* Image Container */}
          <div className="aspect-[4/3] rounded-3xl bg-blush border border-border/30 overflow-hidden relative">
            {/* Korvattu Heart-ikoni kuvalla 2.jpg */}
            <Image 
              src="/images/2.jpg"
              alt="Kauneudenhoito"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
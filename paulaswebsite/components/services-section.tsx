"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Droplets, MessageCircle } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Täyteainehoidot",
    description: "Luonnollisia tuloksia hyaluronihappotäyteaineilla. Huulet, kasvonmuotoilu ja ryppyjen täyttö ammattitaidolla.",
  },
  {
    icon: Droplets,
    title: "Ihohoidot",
    description: "Tehohoidot ihon uudistamiseen ja heleyttämiseen. Mesoterapia, mikroneulannus ja kemialliset kuorinnat.",
  },
  {
    icon: MessageCircle,
    title: "Konsultaatio",
    description: "Maksuton alkukonsultaatio, jossa kartoitamme yhdessä toiveesi ja laadimme sinulle yksilöllisen hoitosuunnitelman.",
  },
]

export function ServicesSection() {
  return (
    <section id="palvelut" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Palvelut
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Mitä tarjoan sinulle
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jokainen hoito on räätälöity sinun tarpeisiisi. Käytän vain laadukkaita
            tuotteita ja uusimpia tekniikoita taatakseni parhaan mahdollisen tuloksen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-3xl border border-border/50 bg-background hover:border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Placeholder */}
              <div className="aspect-square rounded-2xl bg-blush border border-border/30 mb-6 flex items-center justify-center">
                <service.icon className="w-12 h-12 text-foreground/40" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            className="rounded-full px-8 py-6 text-base bg-background border border-border text-foreground hover:bg-secondary"
            onClick={() => document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ota yhteyttä
          </Button>
        </div>
      </div>
    </section>
  )
}

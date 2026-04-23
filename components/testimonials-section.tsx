const testimonials = [
  {
    quote: "Paras kokemus ikinä! Tulokset olivat luonnolliset ja juuri sellaiset kuin toivoin. Suosittelen lämpimästi kaikille.",
    name: "Janina Sarpaneva",
    role: "Asiakas",
    location: "Espoo",
  },
  {
    quote: "Ammattitaitoinen ja lämmin vastaanotto. Tunsin oloni turvalliseksi koko hoidon ajan. Palaan varmasti uudelleen.",
    name: "Anna Hyvärinen",
    role: "Asiakas",
    location: "Espoo",
  },
  {
    quote: "Vihdoin löysin ammattilaisen, johon voin luottaa. Konsultaatio oli perusteellinen ja sain vastaukset kaikkiin kysymyksiini.",
    name: "Laura Suvinen",
    role: "Asiakas",
    location: "Espoo",
  },
]

export function TestimonialsSection() {
  return (
    <section id="kokemuksia" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Kokemuksia
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#2a2420] mb-6 text-balance">
            Asiakkaiden kokemuksia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lue mitä asiakkaani sanovat. Heidän tyytyväisyytensä on minulle tärkeintä.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-blush/50 border border-border/30"
            >
              {/* Brand Logo Placeholder */}
              <div className="mb-6">
                <div className="w-24 h-6 bg-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs text-foreground/40 font-medium">★★★★★</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground font-medium leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blush-dark flex items-center justify-center">
                  <span className="text-foreground/60 font-medium text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

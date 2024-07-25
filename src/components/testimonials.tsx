import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/assets/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"







const TestimonialCard: React.FC<{ image: string, name: string, message: string, rating: number }> = ({ image, name, message, rating }) => {
  return (
    <div className="inline-block w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="p-8 bg-gray-100 rounded shadow">
        <img src={image} alt={`Photo de ${name}`} className="w-16 h-16 rounded-full mx-auto" />
        <p className="mt-4 text-gray-600 font-bold">{name}</p>
        <div className="flex justify-center mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927C9.432 2.162 10.568 2.162 10.951 2.927l1.062 2.153a1 1 0 00.754.548l2.366.344c.816.119 1.145 1.118.553 1.69l-1.711 1.668a1 1 0 00-.287.883l.404 2.354c.14.816-.719 1.44-1.452 1.054L10 13.427l-2.113 1.11c-.733.385-1.592-.238-1.452-1.054l.404-2.354a1 1 0 00-.287-.883l-1.71-1.668c-.592-.572-.263-1.571.553-1.69l2.366-.344a1 1 0 00.754-.548l1.062-2.153z" />
            </svg>
          ))}
        </div>
        <p className="mt-4 text-xl italic break-words">"{message}"</p>
      </div>
    </div>
  );
};






export default function Testimonials() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  const testimonials = [
    { image: "https://placehold.co/100x100", name: "Jean Dupont", message: "GymFitness a complètement transformé ma vie. Les entraîneurs sont incroyables et les installations sont de premier ordre.", rating: 5 },
    { image: "https://placehold.co/100x100", name: "Marie Martin", message: "Les cours de groupe sont tellement motivants! Je recommande vivement GymFitness à tous ceux qui veulent améliorer leur forme physique.", rating: 4 },
    { image: "https://placehold.co/100x100", name: "Pierre Legrand", message: "Le coaching personnel m'a aidé à atteindre mes objectifs plus rapidement que je ne l'aurais cru possible.", rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Témoignages</h2>
        {/* <div className="mt-8 relative">
          <div className="w-full overflow-hidden relative">
            <div className="whitespace-nowrap transition-transform duration-500" style={{ animation: "scroll 10s linear infinite" }}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-200%); }
            }
          `}</style>
        </div> */}

        <div className="mt-8 relative">
          <Carousel   
           plugins={[plugin.current]}
           className="m-8"
           onMouseEnter={plugin.current.stop}
           onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem>
                  <TestimonialCard key={index} {...testimonial} />
                </CarouselItem>
                
              ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );

}

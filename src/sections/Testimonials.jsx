import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../data/content";
import { business } from "../data/business";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-y relative overflow-hidden bg-bg-soft">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Loved by members"
            title="Real people. Real results."
            className="max-w-2xl"
          />
          <Reveal className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-5">
            <FcGoogle className="size-9" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-content">
                  {business.rating.score}
                </span>
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </span>
              </div>
              <p className="text-xs text-muted">
                {business.rating.count.toLocaleString("en-IN")}+ Google reviews
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-bg p-7 transition-colors hover:border-brand/40">
                  <Quote className="mb-4 size-8 text-brand/30" />
                  <div className="mb-4 flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-[0.975rem] leading-relaxed text-content">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="size-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-heading text-sm font-semibold text-content">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}

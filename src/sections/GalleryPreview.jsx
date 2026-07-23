import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { gallery, galleryCategories } from "../data/content";
import SectionHeading from "../components/ui/SectionHeading";
import { cn } from "../utils/cn";

export default function GalleryPreview() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null); // lightbox index

  const items = gallery.filter((g) => {
    if (filter === "All") return true;
    if (filter === "Videos") return g.type === "video";
    return g.category === filter;
  });

  const current = active !== null ? items[active] : null;

  return (
    <section id="gallery" className="section-y relative overflow-hidden bg-bg">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Inside the box"
            title="A look around the floor"
            className="max-w-2xl"
          />

          {/* Animated filter pills */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  filter === cat ? "text-white" : "text-muted hover:text-content"
                )}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="gallery-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry via CSS columns */}
        <motion.div layout className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => {
              const isVideo = item.type === "video";
              return (
                <motion.button
                  layout
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActive(i)}
                  data-cursor="hover"
                  aria-label={isVideo ? `Play video: ${item.alt}` : item.alt}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-line"
                >
                  {isVideo ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ aspectRatio: `${item.w}/${item.h}` }}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ aspectRatio: `${item.w}/${item.h}` }}
                    />
                  )}

                  {/* Play badge for videos */}
                  {isVideo && (
                    <span className="pointer-events-none absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-brand/90 text-white shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                      <Play className="size-4 translate-x-px fill-white" />
                    </span>
                  )}

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {isVideo ? "Video" : item.category}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <X className="size-5" />
            </button>

            {current.type === "video" ? (
              <motion.video
                key={current.src}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                loop
                playsInline
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              />
            ) : (
              <motion.img
                key={current.src}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={current.src.replace("w=1000", "w=1600")}
                alt={current.alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

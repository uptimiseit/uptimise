// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type GalleryImage = {
//   src: string;
//   alt?: string;
// };

// export default function GalleryImages() {
//   const [images, setImages] = useState<GalleryImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const controller = new AbortController();

//     async function loadImages() {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch("/api/gallery-front", {
//           signal: controller.signal,
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error(`Failed to load gallery: ${res.status}`);
//         }

//         const json = await res.json();

//         if (!json?.success || !Array.isArray(json.data)) {
//           throw new Error("Invalid response from gallery API");
//         }

//         setImages(json.data);
//       } catch (err) {
//         if ((err as Error).name !== "AbortError") {
//           setError(err instanceof Error ? err.message : "Something went wrong");
//         }
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadImages();
//     return () => controller.abort();
//   }, []);

//   if (loading) return <div className="py-16 text-center text-gray-500">Loading gallery...</div>;
//   if (error) return <div className="py-16 text-center text-red-500">{error}</div>;
//   if (!images.length) return <div className="py-16 text-center text-gray-500">No images found.</div>;

//   return (
//     <section className="bg-gray-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((img, index) => (
//           <div key={`${img.src}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200">
//             <Image
//               src={img.src}
//               alt={img.alt || `Gallery image ${index + 1}`}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//               priority={index < 4}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }\\


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt?: string;
};

export default function GalleryImages() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadImages() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/gallery-front", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to load gallery: ${res.status}`);
        }

        const json = await res.json();

        if (!json?.success || !Array.isArray(json.data)) {
          throw new Error("Invalid response from gallery API");
        }

        setImages(json.data);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    loadImages();
    return () => controller.abort();
  }, []);

  if (loading) return <div className="py-24 text-center text-zinc-500 font-medium tracking-wide">Loading our team...</div>;
  if (error) return <div className="py-24 text-center text-red-400 font-medium">{error}</div>;
  if (!images.length) return <div className="py-24 text-center text-zinc-500 font-medium">No images found.</div>;

  // Duplicate images list to ensure an uninterrupted, seamless marquee loop
  const repeatedImages = [...images, ...images, ...images];

  // Perspective style helper based on a relative slider curve (concave effect)
  const getPerspectiveStyle = (index: number) => {
    const total = repeatedImages.length;
    const mid = total / 2;
    const offset = (index - mid) / mid; // ranges between -1 and 1
    
    const rotateY = offset * 22; // subtle inward rotation
    const translateY = Math.abs(offset) * 26; // lifts edges upward
    const translateZ = Math.abs(offset) * -40; // pushes edges into depth

    return {
      transform: `perspective(1000px) rotateY(${rotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px)`,
    };
  };

  return (
    <section className="relative bg-[#0B0F17] py-20 px-6 overflow-hidden select-none border-y border-zinc-900/50">
      {/* Premium Minimalist Grey Dot Grid Background (Dark Theme Friendly) */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#9ca3af 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 70%, transparent 100%)"
        }}
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 font-serif">
          Streamline Your Team, <br />
          <span className="font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
            Supercharge Your Workflow
          </span>
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
          All-in-one platform to plan, collaborate, and deliver — faster and smarter.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-full transition-all duration-300 shadow-lg shadow-blue-600/10 flex items-center gap-2 mx-auto">
          View More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* 3D Perspective Marquee Container */}
      <div className="relative w-full overflow-hidden py-10 [perspective:1200px]">
        {/* Dark theme edge masking gradients to fade seamlessly into #0B0F17 */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#0B0F17] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#0B0F17] to-transparent z-20 pointer-events-none" />

        <div className="flex w-max gap-5 animate-marquee py-4 px-2">
          {repeatedImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="relative w-[180px] sm:w-[220px] aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800/80 shadow-2xl transition-all duration-500 ease-out will-change-transform grayscale-[20%] hover:grayscale-0 hover:scale-105 hover:z-30 hover:border-zinc-700"
              style={getPerspectiveStyle(index)}
            >
              <Image
                src={img.src}
                alt={img.alt || `Team gallery item ${index + 1}`}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 640px) 180px, 220px"
                priority={index < 8}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
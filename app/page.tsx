// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <div className="h-[150vh] bg-white"></div>
//     </>
//   );
// }

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Next section */}
      <section className="h-[120vh] bg-white flex items-center justify-center">
        <h2 className="text-5xl font-bold">Next Section</h2>
      </section>
    </>
  );
}

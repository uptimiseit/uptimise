import LionAnimation from "../HomePageAminations/LionAnimation"; 
import TechCircuitAnimation from "../HomePageAminations/TechAnimation";
// Note: Check spelling of 'Aminations' vs 'Animations' in your folder path

export default function Hero() {
  return (
    // CHANGE 1: Use bg-[var(--background)] and text-[var(--foreground)]
    // This ensures it automatically syncs with the variables we defined in globals.css
    <section className="container mx-auto w-full bg-background text-foreground flex flex-col justify-center pt-24 pb-12 px-6 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto w-full h-full">
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 1. Left Side: The Animation */}
          <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-start">
             {/* <LionAnimation /> */}
             <TechCircuitAnimation />
          </div>

          {/* 2. Right Side: The Text */}
          <div className="flex flex-col justify-center text-left space-y-4">
            
            {/* Top Label */}
            <p className="text-base font-medium ">
              Your Trusted UI UX Design Agency.
            </p>

            {/* Main Headline */}
            <h1 className="text-6xl font-extrabold tracking-tighter leading-[1.1]">
              <span className="block">Design</span>
              <span className="block">Transform</span>
              <span className="block">Accelerate</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl max-w-lg leading-relaxed">
              Redefining user experiences through <br className="hidden md:block" />
              Behavioural Science & AI
            </p>
          </div>
        </div>

        {/* --- Bottom Section: Client Logos --- */}
        {/* CHANGE 2: Update border color to be subtle in both themes */}
        <div className="mt-16 dark:border-gray-800 pt-10">
          
          {/* Logos Container */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            
            {/* Since these are text, they will inherit the 'text-[var(--foreground)]' from the section */}
            <span className="font-bold text-xl">FAB</span>
            <span className="font-bold text-xl">KPIT</span>
            <span className="font-bold text-xl">TATA</span>
            <span className="font-bold text-xl">BMW</span>
            <span className="font-bold text-xl">SONY</span>
            <span className="font-bold text-xl">HUGGIES</span>
            <span className="font-bold text-xl">ETON</span>
            <span className="font-bold text-xl">P&G</span>

          </div>
        </div>

      </div>
    </section>
  );
}
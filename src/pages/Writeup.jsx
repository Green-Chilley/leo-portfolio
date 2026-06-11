import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Writeups/Main";

export const Writeup = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            {/* <StarBackground /> */}

            <Navbar />
            
        {/* Writeups */}
            <Main />

        {/* Footer */}
            <Footer />
    </div>
}
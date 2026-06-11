import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { ProjectsSection } from "../components/ProjectsSection";
import { Writeup } from "@/components/Writeup";
import { ContactSection } from "../components/ContactSection";
import { Footer } from '@/components/Footer'

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            {/* <StarBackground /> */}

        {/* Navbar */}
            <Navbar />

        {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <Writeup />
                <ContactSection />
            </main>

        {/* Footer */}
            <Footer />
    </div>
}
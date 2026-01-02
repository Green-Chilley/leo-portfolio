import { ShieldHalf, Code, Gamepad2 } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary transition-colors"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:text-left">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Security Analyst & Web Developer
                        </h3>

                        <p className="text-muted-foreground">
                            With some experience in Security Analysis and Blue Teaming, I constantly experiment 
                            with new ways to enhance threat detection, break systems and improve my learning by starting my own home lab.
                        </p>

                        <p className="text-muted-foreground">
                            As a graduate from the University of Adelaide, I hope to land a job in a company 
                            that values inclusivity, growth, and collaboration, where I can apply my skills and continue learning as a Security Analyst.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                                href="/Resume.pdf"
                                download="leo_resume"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites using modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Gamepad2 className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Game Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing a wide variety of video game experiences in all forms of technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ShieldHalf className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Cybersecurity Student / Learner</h4>
                                    <p className="text-muted-foreground">
                                        Self taught SOC analyst preparing to enter the world of Cybersecurity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
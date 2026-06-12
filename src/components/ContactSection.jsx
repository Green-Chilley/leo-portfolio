import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Music } from "lucide-react"
import { cn } from '@/lib/utils'

export const ContactSection = () => {
    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary transition-colors"> Touch</span>
                </h2>   

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out if you're hiring for SOC analyst roles or seeking 
                    someone who's passionate about cybersecurity, or even a game dev jam.
                </p>

                <div className="grid grid-row-1 md:grid-row-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> 
                            Contact Information
                        </h3>

                        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                        href="mailto:leo.nguyen@hotmail.com.au"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        leo.nguyen@hotmail.com.au
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                        href="tel:+61431416580"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (+61) 431-416-580
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground transition-colors">
                                        Australia, SA
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/leo-n-653623291/"
                                    target="_blank"
                                    className="hover:scale-125 active:scale-95 transition-all duration-300"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/leo.lvn/"
                                    target="_blank"
                                    className="hover:scale-125 active:scale-95 transition-all duration-300"
                                >
                                    <Instagram />
                                </a>
                                <a
                                    href="https://musescore.com/user/29253864"
                                    target="_blank"
                                    className="hover:scale-125 active:scale-95 transition-all duration-300"
                                >
                                    <Music />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
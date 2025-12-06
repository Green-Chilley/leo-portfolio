import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "DSMR Protocol Despreader",
        description: "A GNU Radio application for RF telemetry signal decoding and analysing remote control car signals.",
        image: "/projects/project3.PNG",
        tags: ["C++", "Python", "GNURadio"],
        githubUrl: "https://github.com/Green-Chilley/gr-dsmr-rc",
        icon: <Github/>,
    },
    {
        id: 2,
        title: "Athena SecuFlow Git Miner",
        description: "A git miner that uses Kotlin to extract repository information and visualized using NetworkX.",
        image: "/projects/project5.PNG",
        tags: ["NetworkX", "HTML/CSS", "Kotlin"],
        githubUrl: "https://github.cs.adelaide.edu.au/a1860900/SecuFlow-UG3-SEP-2024",
        icon: <Github/>,
    },
    {
        id: 3,
        title: "OLAF Secure Chat Room",
        description: "A secure chat application using the OLAF Neighbourhood Protocol with Flask and SocketIO.",
        image: "/projects/project4.png",
        tags: ["Flask", "SocketIO", "HTML/CSS"],
        githubUrl: "https://github.com/Green-Chilley/OLAF-Neighbourhood-Protocol",
        icon: <Github/>,
    },
    {
        id: 4,
        title: "Procedural Backrooms",
        description: "A backrooms inspired game using procedural generation.",
        image: "/projects/project1.png",
        tags: ["Luau", "Roblox Studio"],
        githubUrl: "https://www.roblox.com/games/138025571492186/Untitled-Backrooms-Game",
        icon: <ExternalLink/>,
    },
    {
        id: 5,
        title: "Unity VR Experience",
        description: "My first project using Unity and VR API horror based game.",
        image: "/projects/project2.PNG",
        tags: ["Unity", "C#", "Blender"],
        githubUrl: "https://universityofadelaide.box.com/s/be0m3hturp4u0069zejzh5s0f8a7wbw5",
        icon: <ExternalLink/>,
    },
    {
        id: 6,
        title: "An ad blocker?",
        description: "Just a fun side project with a Raspberry pi.",
        image: "/projects/project6.png",
        githubUrl: "/pihole",
        tags: [],
        icon: <ExternalLink/>,
    },
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured<span className="text-primary transition-colors"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A list of my completed projects. Some done in Uni, some done for fun.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div> 

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                        
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        
                                        <a 
                                            href={project.githubUrl} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                            > 
                                                {project.icon}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/Green-Chilley"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}
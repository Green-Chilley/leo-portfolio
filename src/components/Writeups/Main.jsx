import { Link } from "react-router-dom"

const writeups = [
    {
        id: 1,
        title: "Pickle Rick",
        description: "A Rick and Morty CTF. Help turn Rick back into a human!",
        from: "TryHackMe",
        difficulty: "Easy",
        link: "/writeup/writeup1",
    },
    {
        id: 2,
        title: "Neighbour",
        description: "Check out our new cloud service, Authentication Anywhere. Can you find other user's secrets?",
        from: "TryHackMe",
        difficulty: "Easy",
        link: "/writeup/writeup2",
    },
    {
        id: 3,
        title: "Gaming Server",
        description: "Can you gain access to this gaming server built by amateurs with no experience of web development and take advantage of the deployment system.",
        from: "TryHackMe",
        difficulty: "Easy",
        link: "/writeup/writeup3",
    },
];

export const Main = () => {
    return (
        <div id="main" className="relative min-h-screen px-4">
            <div className="container max-w-4xl mx-auto z-10">
                <h1 className="text-4xl md:text-6xl pt-50 font-bold tracking-tight">
                    Writeups
                </h1>
                <div className="text-left p-6">
                    <h2 className="text-muted-foreground p-4">
                        A blog of some writeups I've completed, ranging from TryHackMe, some CTFs and HackerOne.
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {writeups.map((writeup, key) => (
                        <Link to={writeup.link} key={key}>
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">
                                    {writeup.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {writeup.description}
                                </p>
                                <div className="text-left">
                                    <p className="text-muted-foreground text-sm">
                                        From: {writeup.from}
                                    </p>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        Difficulty: {writeup.difficulty}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
                    ))}
                </div>

            </div>
        </div>
    )
}
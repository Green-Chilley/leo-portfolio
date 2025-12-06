import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";

export const Pihole = () => {
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
                    Pihole
                </h1>
                
                <p className="text-left text-muted-foreground p-4">
                    This page will basically go through how I set up an ad blocker, as well as an internal network log monitor with pihole on a raspberry pi 4. It also serves as a
                    journal for me to remember how I set this up.
                </p>

                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    Motivation
                </h1>
                <p className="text-left text-muted-foreground p-4">
                    I've started this project because recently I got a raspberry pi with 4gb of RAM because I was bored, and wanted to do something cool. I originally wanted to make
                    a minecraft server (which I did and I have another page about the setup) but something came across my mind. Ads are so damn annoying. Can't even watch Amazon
                    prime (yes, I have the cheap version) without going through a 2 minute ad break every 10 minutes. So I decided to get things down.
                </p>

                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    The setup
                </h1>
                <p className="text-left text-muted-foreground p-4">
                    What you need is a raspberry pi, sd card and a desktop. Like I mentioned earlier, I have a raspberry pi 4gb and a 32gb sandisk sd card. Open up raspberry pi imager
                    and partition a desktopless version of any debian release (I used trixie) onto the sd card. Set up ssh and once completed, you need to make some network configurations.
                </p>
                <br />
                <p className="text-left text-muted-foreground p-4">
                    You first need to set a static ip address for the raspberry pi. It depends on your ISP if they have dynamic ip addresses or not, but if they do then I'll go through how
                    to get a static ip address. You need to make note of your gateway (usually the ip for your router and is usually 1 as the last octet of your network address e.g. 0.0.0.1)
                    and your raspberry pi's ip address (so you know what it is).
                </p>
                <br />

                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    Network Configuration
                </h1>
                <p className="text-left text-muted-foreground p-4">
                    Assuming you've ssh'd into your raspberry pi, it's time to set a static ip address. Type in <code className="code-font">sudo nmtui</code> (means network manager TUI),
                    edit connection and configure the network you want to use. Change Ipv4 configuration to manual. It should look like this:
                </p>
                <img
                    src='/assets/pihole/pihole_1.png'
                    alt='img5'
                    className="mx-auto"
                />
                <p className="text-left text-muted-foreground p-4">
                    In addresses, put in the ip address you WANT the raspberry pi to be. Make sure it is an available address. In my case, I put in a random ip address. In gateway, put in the
                    gateway I mentioned earlier for you to find, and for DNS servers, you can optionally put in any DNS server like google or cloudflare. I put my gateway for this. Finally, 
                    type in <code className="code-font">sudo systemctl restart NetworkManager</code> to update the network settings.
                </p>

                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    Installing Pihole
                </h1>
                <p className="text-left text-muted-foreground p-4">
                    Type in <code className="code-font">curl -sSL https://install.pi-hole.net | bash</code> which will install pihole onto your host. It will then open up an interface and you
                    should proceed with options you are comfortable with. When choosing an Upstream DNS provider, I picked cloudflare. You can choose any you like. Click yes for everything
                    and choose your privacy option. Once it's finished installing, save the admin page url and set a password with <code className="code-font">sudo pihole setpassword</code> and log in.
                    You should be taken to this dashboard:
                </p>
                <img
                    src='/assets/pihole/pihole_2.png'
                    alt='img5'
                    className="mx-auto"
                />
                <p className="text-left text-muted-foreground p-4">
                    This is what mine looks like. But for you, no data will show up. To receive some query log information, you first need to configure the DNS settings on the target device you don't
                    want ads on. Alternatively, you can configure the router so that you can apply this ad blocker to all devices connected to it.
                </p>

                <p className="text-left text-muted-foreground p-4">
                    For devices, it's fairly simple. Go to the network settings and find any option with DNS server assignment. Change it to manual and type in the ip address of the raspberry pi. Now
                    your raspberry pi will act as a DNS server for that device, resolving host names for every query the device makes. In pihole, it can also see what queries the device has made 
                    depending on the privacy settings. So you can see if the device has made a request to a sketchy website and point them out. Scary, huh?
                </p>

                <img
                    src='/assets/pihole/pihole_3.png'
                    alt='img5'
                    className="mx-auto"
                />
                
                <p className="text-left text-muted-foreground p-4">
                    Above is an example of what pihole captured when I accessed outlook on my device. 
                </p>
                <br />
                <p className="text-left text-muted-foreground p-4">
                    For the router option, log in to the router and find DNS or DHCP settings. There should be an option to set a Primary and Secondary DNS. Put in the ip address of the raspberry pi
                    and reboot the router. If your rotuer doesn't have that option, pihole has an option to set a DHCP server. It should be under settings in DHCP. Toggle DHCP server enabled (turn
                    off DHCP on your router) and type in the range of IP addresses, and enter the IP gateway address. Save and apply. Now pihole can see every device connected to that router and
                    what queries they've made. But the point of this is to make an ad blocker, haha. I just want to point out that this is basically how dangerous free WiFi in airports or cafes 
                    can be, and this is just an example of the terrors that can be done.
                </p>

                <h1 className="text-2xl md:text-4xl pt-10 font-semibold tracking-tight">
                    Blocking ads
                </h1>

                <p className="text-left text-muted-foreground p-4">
                    At this point it's a work in progress. Amazon, YouTube, Disney and other high class streaming services are very strict on their ad policy, and it is almost difficult to actually
                    block any ads from them. I'm still working through some ad blocklits and regex queries. But that's it for now.
                </p>
            </div>
        </div>

        {/* Footer */}
            <Footer />
    </div>)
}
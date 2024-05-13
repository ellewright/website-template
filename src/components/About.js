import NavBar from "./NavBar"
export default function About() {
    return (
        <div className="about-us">
            <NavBar />
            <main className="flex flex-col items-center justify-center">
                <div className="header">
                    <h1>About Us</h1>
                </div>
                <div className="gang-picture">
                    <figure>
                        <img src="/the-gang.jpg" alt="The Gang" />
                        <figcaption>September 12, 2018 - The gang celebrates a successful Escape Room attempt with steaks.</figcaption>
                    </figure>
                </div>
                <div className="text">
                    <p>
                        What up! Welcome to Paddy&apos;s Pub, where every day is an adventure in debauchery! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>        
                </div>
            </main>
        </div>
    )
}
import NavBar from "./NavBar";

export default function Contact() {
    return (
        <div>
            <NavBar />
            <main className="flex flex-col items-center justify-center">
                <div className="header">
                    <h1>Contact Us</h1>
                </div>
                <div className="rude-man-picture">
                    <figure>
                        <img src="/images/rude-man.jpg" alt="Rude man who shushes, please call." />
                        <figcaption>If you are or know the rude, shushing man, please call.</figcaption>
                    </figure>
                </div>
            </main>
        </div>
    )
}
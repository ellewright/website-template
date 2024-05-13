import NavBar from "./NavBar";

export default function Home() {
    return (
        <div className="home-page">
            <NavBar />
            <main className="flex flex-col items-center justify-center">
                <div className="header">
                    <h1>Paddy&apos;s Pub</h1>
                </div>
                <div className="interior-picture">
                    <figure>
                        <img src="/images/interior.png" alt="Pub interior" />
                        <figcaption>Pub interior.</figcaption>
                    </figure>
                </div>
            </main>
        </div>
    )
}
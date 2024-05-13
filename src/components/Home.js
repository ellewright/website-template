import NavBar from "./NavBar";

export default function Home() {
    return (
        <div className="home-page">
            <NavBar />
            <main className="flex flex-col items-center justify-center">
                <div className="header">
                    <h1>Paddy's Pub</h1>
                </div>
            </main>
        </div>
    )
}
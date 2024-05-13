import NavBar from "./NavBar";

export default function Products() {
    return (
        <div>
            <NavBar />
            <main className="flex flex-col items-center justify-center">
                <div className="header">
                    <h1>Products</h1>
                </div>
                <div className="fight-milk-picture">
                    <figure>
                        <img src="/images/fight-milk-logo.png" alt="The official drink of the UFC." />
                        <figcaption>Fight Milk: The official drink of the UFC.</figcaption>
                    </figure>
                </div>
            </main>
        </div>
    )
}
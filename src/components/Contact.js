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
                <div className="input-field">
                    <div className="input-header">
                        <h2>Send us a message; we will get back to you ASAP.</h2>
                    </div>
                    <div className="contact-input flex flex-col items-center">
                        <div className="flex flex-col">
                            <label for="name">Name (Required)</label>
                            <input type="text" placeholder="Name" className="name" id="name" required />
                        </div>
                        <div className="flex flex-col">
                            <label for="email">Email (Required)</label>
                            <input type="text" placeholder="Email" className="email" id="email" required />
                        </div>
                        <div className="flex flex-col">
                            <label for="phone-number">Phone number (Required)</label>
                            <input type="tel" placeholder="Phone number" classname="phone-number" id="phone-number" required ></input>
                        </div>
                        <div className="flex flex-col">
                            <label for="inquiries">What are you getting in touch about? (Optional)</label>
                            <select className="inquiries" id="inquiries">
                                <option value="general">General inquiry</option>
                                <option value="press">Press inquiry</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label for="message">Your message (Required)</label>
                            <textarea placeholder="Message" className="message" id="message" required></textarea>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button type="submit" className="submit-button">Send</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
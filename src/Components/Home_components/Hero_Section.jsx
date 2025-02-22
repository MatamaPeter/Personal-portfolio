export default function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Hey, Matama here!</h1>
            <p>
                I am a passionate software engineer committed to pushing the limits of technology. I continuously seek new challenges to expand my skills and contribute to impactful projects.
            </p>
            <div className="platform-link-btns">
                <div className="github">
                    <span>Github</span>
                    <i className="material-icons" >arrow_outward</i>
                </div>
                <div className="vercel">
                    <span>Vercel</span>
                    <i className="material-icons" >arrow_outward</i>
                </div>
            </div>
        </div>
    )
}
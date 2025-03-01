export default function HeroSection() {
    return (
        <div className="hero-container">

            <h1>Hey!, Matama here!</h1>
            
            <p>
                I am a passionate software engineer committed to pushing the limits of technology. I continuously seek new challenges to expand my skills and contribute to impactful projects.
            </p>
            <div className="platform-link-btns">
                <div className="github">
                    <a href="https://github.com/MatamaPeter">Github</a>
                    <i className="material-icons" >arrow_outward</i>
                </div>
                <div className="vercel">
                    <a href="https://vercel.com/matamapeters-projects">Vercel</a>
                    <i className="material-icons" >arrow_outward</i>
                </div>
                <div className="resume-download">
                    <a href="resume.pdf">Resume</a>
                    <i className="material-icons" >arrow_downward</i>
                </div>
            </div>
            <div className="availability-status">
                <i className="material-icons">fiber_manual_record</i>
                Available for work
            </div>
        </div>
    )
}
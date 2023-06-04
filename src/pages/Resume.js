import ryanImg from "../assets/ryan.png";
import "../styles/resume.css";

function Resume() {
  return (
    <>
      <h1>Ryan Brower</h1>
      <p>University student with a passion for software, a strong work ethic, and a high attention to detail.</p>
      <hr/>

      <a href="https://github.com/rbrower28">Github</a>
      <a href="www.linkedin.com/in/ryanbrower">Linkedin</a>
      <img src={ryanImg} alt="Ryan" />

      <h2>Related Experience:</h2>
      <hr/>

      <div className="experience">
        <h3>Bachelor of Science in Software Engineering</h3>
        <span>Current GPA: 4.0</span>
        <p className="time">Expected April 2024</p>
        <p className="location">Brigham Young University - Idaho</p>
        <div className="description">
          <p>Certificates: Web Dev, Software Design, Software QA</p>
        </div>
      </div>

      <div className="experience">
        <h3>Software Development Engineer Intern – Amazon Scout SW Distribution team</h3>
        <p className="time">Jun 2022 – Aug 2022</p>
        <p className="location">Amazon – Seattle, WA</p>
        <div className="description">
          <ul>
            <li><p>Implemented centralized storage & execution system for internal tools</p></li>
            <li><p>Developed authenticator API plugin for existing internal tool software</p></li>
          </ul>
        </div>
      </div>

      <div className="portfolio">
        <h3>Software Development Projects</h3>
        <note>TODO add filter for project type</note>

        <div className="project">
          <h4>Frogger</h4>
        </div>
      </div>

      <h2>Other Experience:</h2>
      <hr/>

      <div className="experience">
        <h3>Associates in Arts and Sciences</h3>
        <span className="company">Everett Community College</span>
        <p className="time">Completed Sep 2017</p>
        <p className="location">Everett, WA</p>
        <div className="description">
        </div>
      </div>

      <div className="experience">
        <h3>Substitute Paraprofessional (Long Term)</h3>
        <span className="company">Marysville School District 25</span>
        <p className="time">Sep 2021 – Dec 2021</p>
        <p className="location">Marysville, WA</p>
        <div className="description">
          <ul>
            <li><p>Tutored groups of 3 to 5 elementary students in early literacy</p></li>
            <li><p>Organized lesson plans to meet each student's academic needs</p></li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <h3>Student Consulting</h3>
        <span className="company">Research and Business Development Center</span>
        <p className="time">Jun 2021 – July 2021</p>
        <p className="location">Rexburg, ID</p>
        <div className="description">
          <ul>
            <li><p>Consulted a local Italian restaurant startup as a team of students</p></li>
            <li><p>Facilitated expense tracking to calculate and increase profits</p></li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <h3>Manufacturing and Fulfillment</h3>
        <span className="company">Country Living Productions</span>
        <p className="time">Mar 2020 – Dec 2020</p>
        <p className="location">Stanwood, WA</p>
        <div className="description">
          <ul>
            <li><p>Assembled and tested hand-operated grain mills</p></li>
            <li><p>Inspected and shipped thousands of online orders</p></li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <h3>Volunteer Missionary Representative</h3>
        <span className="company">Church of Jesus Christ of Latter-Day Saints</span>
        <p className="time">Mar 2018 – Feb 2020</p>
        <p className="location">Comodoro Rivadavia, Argentina</p>
        <div className="description">
          <ul>
            <li><p>Organized and met numerous teaching appointments</p></li>
            <li><p>Oversight and Responsibility for 10-12 other volunteers</p></li>
            <li><p>Prepared weekly seminars to improve productivity and accountability among volunteers</p></li>
          </ul>
        </div>
      </div>

      <h2>Achievements:</h2>
      <hr/>

      <ul>
        <li>
          <p>L.E.F Award for MSP Testing Excellence</p>
          <span>May 2012</span>
        </li>
        <li>
          <p>Marysville Rotary Outstanding Student of the Month Award</p>
          <span>Oct 2012</span>
        </li>
        <li>
          <p>Lakewood High School Cross Country Most Improved Award</p>
          <span>Nov 2014</span>
        </li>
        <li>
          <p>Lakewood High School Instrumentalist of the Year Award</p>
          <span>Jun 2017</span>
        </li>
      </ul>
    </>
  );
}

export default Resume;
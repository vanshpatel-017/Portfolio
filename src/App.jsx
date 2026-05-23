import { motion } from 'framer-motion'
import './styles.css'

export default function App() {
  return (
    <div className="container">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="header"
      >
        <h1>Vansh Patel</h1>
        <p className="subtitle">Full Stack Developer | React | Node.js</p>
      </motion.header>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="projects-section"
      >
        <h2>Featured Projects</h2>
        
        <div className="project-grid">
          <motion.article 
            whileHover={{ y: -5 }}
            className="project-card"
          >
            <div className="project-image">
              <img src="/assets/images/leafcure/home.png" alt="LeafCure Home" />
            </div>
            <div className="project-content">
              <h3>LeafCure</h3>
              <p>AI-powered plant disease detection and treatment recommendation system</p>
              <div className="project-tags">
                <span>React</span>
                <span>Machine Learning</span>
                <span>Firebase</span>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="about-section"
      >
        <h2>About Me</h2>
        <p>
          I'm a full-stack developer passionate about building interactive, user-friendly web applications. 
          With expertise in React, Node.js, and modern web technologies, I create solutions that are 
          both beautiful and performant.
        </p>
      </motion.section>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="footer"
      >
        <p>&copy; 2025 Vansh Patel. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}

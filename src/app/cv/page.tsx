import { jobs } from "../api/jobs";

export default async function CV() {

return (
  <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-cabinet font-bold mb-4 text-center">
          Curriculum <span className="text-frog-green">Vitae</span>
        </h1>
        <p className="text-center text-frog-green font-geist mb-12">
          Kelli Landry | SAFe Scrum Master | PSM I Certified
        </p>

        {/* Certifications Section - Highlighted */}
        <section className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-frog-green/20 to-sage-light/30 border-2 border-frog-green">
          <h2 className="text-2xl font-cabinet font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl transition-theme" style={{ backgroundColor: 'var(--card-bg)' }}>
              <h3 className="text-xl font-cabinet font-bold text-frog-green mb-2">
                Professional Scrum Master I (PSM I)
              </h3>
              <p className="font-geist text-sm">Scrum.org</p>
              <p className="font-geist text-sm opacity-70">Active Certification</p>
            </div>
            <div className="p-6 rounded-xl transition-theme" style={{ backgroundColor: 'var(--card-bg)' }}>
              <h3 className="text-xl font-cabinet font-bold text-frog-green mb-2">
                SAFe Scrum Master (SSM)
              </h3>
              <p className="font-geist text-sm">Scaled Agile</p>
              <p className="font-geist text-sm opacity-70">Active Certification</p>
            </div>
          </div>
        </section>

                {/* Education */}
        <section className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-frog-green/20 to-sage-light/30 border-2 border-frog-green">
          <h2 className="text-2xl font-cabinet font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🎓</span>
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl transition-theme" style={{ backgroundColor: 'var(--card-bg)' }}>
              <h3 className="text-xl font-cabinet font-bold text-frog-green mb-2">
                Bachelor of Science in Child &amp; Family Studies
              </h3>
              <p className="font-geist text-sm">University of Louisiana at Lafayette</p>
              <p className="font-geist text-sm opacity-70">Graduated: December 2012</p>
            </div>
            <div className="p-6 rounded-xl transition-theme" style={{ backgroundColor: 'var(--card-bg)' }}>
              <h3 className="text-xl font-cabinet font-bold text-frog-green mb-2">
                Certificate in Web Development
              </h3>
              <p className="font-geist text-sm">Chegg.com, formerly Bloc.io</p>
              <p className="font-geist text-sm opacity-70">Received: February 2019</p>
            </div>
          </div>

            
        </section>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-cabinet font-bold mb-4 pb-2 border-b-2 border-frog-green">
            Professional Summary
          </h2>
          <p className="font-geist leading-relaxed">
           After 10 years in the tech industry, holding various roles that span development and leadership, my true calling is always with <strong>helping others</strong>. Shipping software doesn&apos;t have to be onerous, complicated, or stale. With a <strong>servant leadership mindset</strong> and empathetic approach, I lead teams with authentic collaboration in order to deliver value consistently while <strong>building trust and positive rapport</strong> with a heavy dose of fun along the way. Results are important; so is your team's <strong>well-being</strong>. I believe in balance, genuine communication, respect for all voices, and accountability. My goal is to <strong>coach</strong> a team, not just manage one. Let&apos;s build something better!
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-cabinet font-bold mb-6 pb-2 border-b-2 border-frog-green">
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* Jobs*/}
            {jobs.map((job, index) => 
              <div key={index} className="relative pl-6 border-l-2 border-frog-green">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-frog-green"></div>
                <h3 className="text-xl font-cabinet font-bold">{job.position}</h3>
                <p className="text-frog-green font-geist font-medium">{job.company}</p>
                <p className="text-sm font-geist opacity-70 mb-3">{job.duration}</p>
                {job.duties.map((duty, i) => (
                  <ul key={i} className="list-disc list-inside space-y-2 font-geist">
                    <li>{duty}</li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-cabinet font-bold mb-6 pb-2 border-b-2 border-frog-green">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              'Agile Methodology',
              'Scrum Framework',
              'Kanban',
              'Technical Project Management',
              'Project Planning',
              'Program Management',
              'Risk Management',
              'Stakeholder Management',
              'Software Development Lifecycle (SDLC)',
              'Metrics & Reporting',
              'Team Leadership',
              'Presentation Creation & Delivery',
              'Budget Management',
              'Process Improvement',
              'Documentation',
              'Sprint Planning & Execution',
              'User Story Creation',
              'Sprint Retrospectives',
              'Facilitation',
              'Communication',
              'Problem Solving',
              'Conflict Resolution',
              'Coaching & Mentoring',
              'Time Management',
              'Adaptability',
              'Critical Thinking',
              'Collaboration',
              'Emotional Intelligence',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full font-geist text-sm bg-frog-green/10 border border-frog-green/30 hover:bg-frog-green hover:text-black-forest transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        { /* Technologies */}
        <section>
          <h2 className="text-2xl font-cabinet font-bold mb-6 pb-2 border-b-2 border-frog-green">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Git',
              'GitHub',
              'GitLab',
              'Bitbucket',
              'Slack',
              'Microsoft Teams',
              'Zoom',
              'Google Workspace',
              'Microsoft Office 365',
              'Trello',
              'Asana',
              'Notion',
              'VS Code',
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Next.js',
              'Node.js',
              'Python',
              'SQL',
              'Canva',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full font-geist text-sm bg-frog-green/10 border border-frog-green/30 hover:bg-frog-green hover:text-black-forest transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  )
}
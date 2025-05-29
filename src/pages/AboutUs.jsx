
import React from 'react'

function AboutUs() {
  const team = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Chief Cybersecurity Officer',
      image: '👩‍💼',
      bio: '15+ years in cybersecurity with expertise in digital forensics and threat analysis.'
    },
    {
      name: 'Muhammad Ali Khan',
      role: 'Technical Director',
      image: '👨‍💻',
      bio: 'Former government cybersecurity specialist with extensive experience in cyber investigations.'
    },
    {
      name: 'Fatima Rashid',
      role: 'Legal Affairs Head',
      image: '👩‍⚖️',
      bio: 'Specialized in cyber law and digital rights with 12+ years of legal experience.'
    },
    {
      name: 'Ahmad Hassan',
      role: 'Community Outreach Manager',
      image: '👨‍🏫',
      bio: 'Dedicated to spreading cybersecurity awareness and community education programs.'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Pak Cyber Guard founded with mission to combat cybercrime' },
    { year: '2021', event: 'Partnership established with law enforcement agencies' },
    { year: '2022', event: 'AI-powered threat analysis system implemented' },
    { year: '2023', event: 'Processed over 10,000 cybercrime reports' },
    { year: '2024', event: 'Expanded services nationwide with 24/7 support' }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-400">Pak Cyber Guard</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are Pakistan's leading cybersecurity organization dedicated to protecting citizens from digital threats and ensuring a safer online environment for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To create a secure digital ecosystem in Pakistan by providing accessible, professional cybercrime reporting services and empowering citizens with knowledge to protect themselves against cyber threats.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glow-card">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-400">A Pakistan where every citizen can safely navigate the digital world without fear of cybercrime.</p>
                </div>
                <div className="glow-card">
                  <div className="text-3xl mb-3">⚖️</div>
                  <h3 className="font-semibold mb-2">Our Values</h3>
                  <p className="text-sm text-gray-400">Integrity, confidentiality, accessibility, and unwavering commitment to justice.</p>
                </div>
              </div>
            </div>
            <div className="glow-card">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4">Protecting Pakistan's Digital Future</h3>
                <p className="text-gray-400">
                  Since our inception, we have been at the forefront of cybersecurity in Pakistan, working tirelessly to build trust in digital systems and protect our citizens from evolving cyber threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-blue-400">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our diverse team of cybersecurity professionals, legal experts, and community advocates work together to serve Pakistan's digital safety needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glow-card text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-blue-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From a small initiative to Pakistan's premier cybersecurity platform, here's how we've grown to serve our nation.
            </p>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-cyber-gradient rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="glow-card flex-1">
                  <p className="text-gray-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Section */}
        <section className="text-center">
          <div className="glow-card">
            <h2 className="text-3xl font-bold mb-6">
              Working Together for a <span className="text-blue-400">Safer Pakistan</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              We collaborate with government agencies, law enforcement, educational institutions, and international cybersecurity organizations to strengthen Pakistan's cyber defenses and build a more secure digital future for all citizens.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-4xl">
              <span title="Government Partnership">🏛️</span>
              <span title="Law Enforcement">👮</span>
              <span title="Educational Institutions">🎓</span>
              <span title="International Organizations">🌍</span>
              <span title="Technology Partners">💻</span>
              <span title="Community Groups">👥</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs

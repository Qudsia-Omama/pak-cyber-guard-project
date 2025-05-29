
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReportForm from '../components/ReportForm'

function Home() {
  const [isAnonymous, setIsAnonymous] = useState(false)

  const stats = [
    { number: '10,000+', label: 'Reports Processed', icon: '📊' },
    { number: '50,000+', label: 'People Protected', icon: '🛡️' },
    { number: '24/7', label: 'Support Available', icon: '🕒' },
    { number: '95%', label: 'Success Rate', icon: '✅' }
  ]

  const features = [
    {
      icon: '🔒',
      title: 'Secure Reporting',
      description: 'Your reports are encrypted and handled with utmost confidentiality'
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      description: 'Our team processes reports quickly and efficiently'
    },
    {
      icon: '👥',
      title: 'Expert Support',
      description: 'Trained cybersecurity professionals review every case'
    },
    {
      icon: '🔍',
      title: 'Advanced Analysis',
      description: 'AI-powered analysis helps categorize and prioritize threats'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-glow-gradient"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-cyber-gradient bg-clip-text text-transparent">
              Pak Cyber Guard
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your trusted partner in fighting cybercrime. Report incidents securely and help make the digital world safer for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Report Cybercrime
            </button>
            <Link to="/awareness" className="btn btn-secondary text-lg px-8 py-4">
              Learn About Cyber Safety
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-blue-400">Pak Cyber Guard</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide a comprehensive platform for cybercrime reporting with advanced security and expert support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glow-card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyber-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Report a Cybercrime?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our secure reporting system ensures your information is protected while helping authorities take action against cyber criminals.
          </p>
          <button
            onClick={() => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary text-lg px-8 py-4"
          >
            Start Your Report
          </button>
        </div>
      </section>

      {/* Report Form Section */}
      <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Report a <span className="text-blue-400">Cybercrime</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow the secure multi-step process to report cybercrime incidents. Your information will be handled confidentially.
            </p>
          </div>
          <div className="glow-card">
            <ReportForm isAnonymous={isAnonymous} setIsAnonymous={setIsAnonymous} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

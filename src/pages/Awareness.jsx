
import React, { useState } from 'react'

function Awareness() {
  const [activeTab, setActiveTab] = useState('threats')

  const threats = [
    {
      title: "Phishing Attacks",
      icon: "🎣",
      description: "Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities",
      tips: [
        "Verify sender identity before clicking links",
        "Check URLs carefully for suspicious domains",
        "Never provide personal info via email",
        "Use two-factor authentication",
        "Keep software updated"
      ],
      examples: [
        "Fake bank emails asking for login credentials",
        "Suspicious social media messages",
        "Fraudulent government notices"
      ]
    },
    {
      title: "Financial Fraud",
      icon: "💳",
      description: "Online scams targeting banking and financial information",
      tips: [
        "Verify website security (HTTPS)",
        "Use secure payment methods",
        "Research merchants before purchasing",
        "Monitor bank statements regularly",
        "Trust your instincts"
      ],
      examples: [
        "Fake online shopping websites",
        "Investment scams on social media",
        "Cryptocurrency fraud schemes"
      ]
    },
    {
      title: "Cyberbullying & Harassment",
      icon: "📱",
      description: "Online harassment, threats, and stalking behaviors",
      tips: [
        "Block harassers immediately",
        "Document all interactions",
        "Report to platform administrators",
        "Don't engage with harassers",
        "Seek support from friends/family"
      ],
      examples: [
        "Threatening messages on social media",
        "Non-consensual sharing of images",
        "Online stalking and doxxing"
      ]
    },
    {
      title: "Account Hacking",
      icon: "🔓",
      description: "Unauthorized access to personal accounts and devices",
      tips: [
        "Use strong, unique passwords",
        "Enable two-factor authentication",
        "Keep software updated",
        "Be cautious with public Wi-Fi",
        "Regular security checkups"
      ],
      examples: [
        "Social media account takeovers",
        "Email account compromises",
        "Banking app security breaches"
      ]
    }
  ]

  const securityTips = [
    {
      category: "Password Security",
      icon: "🔐",
      tips: [
        "Use at least 12 characters with mix of letters, numbers, symbols",
        "Never reuse passwords across multiple accounts",
        "Consider using a password manager",
        "Enable two-factor authentication wherever possible",
        "Change passwords if you suspect a breach"
      ]
    },
    {
      category: "Social Media Safety",
      icon: "📱",
      tips: [
        "Review and adjust privacy settings regularly",
        "Be selective about what you share publicly",
        "Verify friend requests from unknown people",
        "Avoid clicking suspicious links or downloads",
        "Report and block inappropriate content"
      ]
    },
    {
      category: "Online Shopping",
      icon: "🛒",
      tips: [
        "Shop only on secure websites (look for HTTPS)",
        "Use credit cards instead of debit cards",
        "Avoid public Wi-Fi for financial transactions",
        "Read reviews and verify merchant legitimacy",
        "Keep receipts and monitor statements"
      ]
    },
    {
      category: "Email Security",
      icon: "📧",
      tips: [
        "Be skeptical of unexpected emails",
        "Verify sender authenticity",
        "Don't click suspicious links or attachments",
        "Use spam filters and antivirus software",
        "Report phishing attempts"
      ]
    }
  ]

  const warningSignsData = [
    {
      sign: "Unexpected password reset emails",
      action: "Check if you requested it; if not, secure your account immediately"
    },
    {
      sign: "Unknown charges on bank statements",
      action: "Contact your bank immediately and dispute unauthorized transactions"
    },
    {
      sign: "Friends receiving strange messages from your accounts",
      action: "Your account may be compromised; change passwords and scan for malware"
    },
    {
      sign: "Slow computer performance or strange pop-ups",
      action: "Run antivirus scan and check for malware infections"
    },
    {
      sign: "Receiving calls about suspicious activity you didn't report",
      action: "Verify through official channels; it might be a social engineering attack"
    }
  ]

  const renderThreats = () => (
    <div className="space-y-8">
      {threats.map((threat, index) => (
        <div key={index} className="glow-card">
          <div className="flex items-start space-x-4 mb-6">
            <div className="text-4xl">{threat.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{threat.title}</h3>
              <p className="text-gray-300">{threat.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-green-400">Prevention Tips</h4>
              <ul className="space-y-2">
                {threat.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-red-400">Common Examples</h4>
              <ul className="space-y-2">
                {threat.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-start space-x-2">
                    <span className="text-red-400 mt-1">⚠️</span>
                    <span className="text-gray-300">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderSecurityTips = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {securityTips.map((category, index) => (
        <div key={index} className="glow-card">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl">{category.icon}</span>
            <h3 className="text-xl font-bold text-blue-400">{category.category}</h3>
          </div>
          <ul className="space-y-3">
            {category.tips.map((tip, tipIndex) => (
              <li key={tipIndex} className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )

  const renderWarningSignsData = () => (
    <div className="space-y-6">
      {warningSignsData.map((item, index) => (
        <div key={index} className="glow-card">
          <div className="flex items-start space-x-4">
            <div className="text-2xl text-yellow-400">⚠️</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">{item.sign}</h3>
              <p className="text-gray-300">{item.action}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cybersecurity <span className="text-blue-400">Awareness</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed about common cyber threats and learn how to protect yourself and your family in the digital world.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-900 bg-opacity-50 rounded-xl p-2">
          <button
            onClick={() => setActiveTab('threats')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'threats'
                ? 'bg-cyber-gradient text-white shadow-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🛡️ Common Threats
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'tips'
                ? 'bg-cyber-gradient text-white shadow-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            💡 Security Tips
          </button>
          <button
            onClick={() => setActiveTab('warning')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'warning'
                ? 'bg-cyber-gradient text-white shadow-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            ⚠️ Warning Signs
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'threats' && renderThreats()}
          {activeTab === 'tips' && renderSecurityTips()}
          {activeTab === 'warning' && renderWarningSignsData()}
        </div>

        {/* Emergency Section */}
        <section className="glow-card text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need <span className="text-red-400">Immediate Help</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you believe you're currently under attack or have been victimized by cybercrime, don't wait. Take action immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-6">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-semibold mb-2">Emergency Helpline</h3>
              <p className="text-2xl font-bold text-red-400">1930</p>
              <p className="text-sm text-gray-400">24/7 Cybercrime Support</p>
            </div>
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Report Online</h3>
              <button 
                onClick={() => window.location.href = '/#report'}
                className="btn btn-primary mt-2"
              >
                File Report
              </button>
            </div>
            <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-6">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Live Chat Support</h3>
              <p className="text-sm text-gray-400 mb-2">Available 24/7</p>
              <button className="btn btn-secondary">
                Start Chat
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Awareness

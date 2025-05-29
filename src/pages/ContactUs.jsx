
import React, { useState } from 'react'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Message sent successfully! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'normal'
    })
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: '📞',
      title: 'Emergency Hotline',
      description: '24/7 immediate assistance for cyber emergencies',
      value: '1930',
      action: 'Call Now',
      urgent: true
    },
    {
      icon: '📧',
      title: 'Email Support',
      description: 'General inquiries and non-urgent matters',
      value: 'support@pakcyberguard.pk',
      action: 'Send Email',
      urgent: false
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Real-time support for quick questions',
      value: 'Available 24/7',
      action: 'Start Chat',
      urgent: false
    },
    {
      icon: '📍',
      title: 'Office Address',
      description: 'Visit us for in-person consultations',
      value: 'Islamabad, Pakistan',
      action: 'Get Directions',
      urgent: false
    }
  ]

  const faqData = [
    {
      question: 'How do I report a cybercrime?',
      answer: 'You can report cybercrime through our secure online form, by calling our emergency hotline 1930, or visiting our office. For immediate threats, call the hotline directly.'
    },
    {
      question: 'Is my report confidential?',
      answer: 'Yes, all reports are handled with strict confidentiality. You can also choose to report anonymously through our platform.'
    },
    {
      question: 'How long does it take to process a report?',
      answer: 'Emergency cases are processed immediately. Regular reports are typically reviewed within 24-48 hours, with updates provided throughout the investigation.'
    },
    {
      question: 'What information should I include in my report?',
      answer: 'Include as much detail as possible: date/time of incident, type of crime, evidence (screenshots, emails), and any financial losses. Our form will guide you through the process.'
    },
    {
      question: 'Can I track the status of my report?',
      answer: 'Yes, you will receive a unique report ID that allows you to track the progress of your case. Regular updates will be provided via email or phone.'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency only' },
    { day: 'Emergency Hotline', hours: '24/7 Available' }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Need help or have questions? We're here to assist you 24/7. Choose the best way to reach us based on your needs.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`glow-card text-center ${method.urgent ? 'border-red-500 bg-red-900 bg-opacity-10' : ''}`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                <p className={`font-semibold mb-4 ${method.urgent ? 'text-red-400' : 'text-blue-400'}`}>
                  {method.value}
                </p>
                <button 
                  className={`btn ${method.urgent ? 'btn-danger' : 'btn-primary'} w-full`}
                >
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <div className="glow-card">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="priority">Priority Level</label>
                  <select
                    id="priority"
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                    className="form-input"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="normal">Normal - Standard support</option>
                    <option value="high">High - Urgent matter</option>
                    <option value="emergency">Emergency - Immediate assistance needed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="form-input"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="form-input"
                    placeholder="Please provide detailed information about your inquiry..."
                  />
                  <div className="char-count">{formData.message.length} characters</div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </section>

          {/* FAQ and Office Hours */}
          <section className="space-y-8">
            {/* Office Hours */}
            <div className="glow-card">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Office Hours</h2>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className={`${schedule.day === 'Emergency Hotline' ? 'text-red-400' : 'text-gray-400'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="glow-card">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="font-semibold mb-2 text-white">{faq.question}</h3>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Emergency Notice */}
        <section className="mt-16">
          <div className="glow-card text-center bg-red-900 bg-opacity-20 border-red-500">
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Emergency Assistance</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you are currently experiencing a cyber attack or have been victimized by cybercrime and need immediate assistance, please call our emergency hotline directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1930" className="btn btn-danger text-lg px-8 py-4">
                🚨 Call Emergency: 1930
              </a>
              <button 
                onClick={() => window.location.href = '/#report'}
                className="btn btn-primary text-lg px-8 py-4"
              >
                📝 File Emergency Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactUs

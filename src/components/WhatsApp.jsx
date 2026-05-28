import { useState, useEffect } from 'react'

export default function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const phoneNumber = '256705495970'
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const quickMessages = [
    { text: '👋 Hi! I want to list my property on Pangisa', emoji: '🏠' },
    { text: '🔍 I am looking for a rental house', emoji: '🔍' },
    { text: '🤝 I am a broker and want to partner', emoji: '🤝' },
    { text: '💬 I have a question about Pangisa', emoji: '💬' },
    { text: '💰 How much does it cost to list?', emoji: '💰' },
  ]

  const sendMessage = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Floating label */}
      <div
        className={`absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300 shadow-lg ${
          isOpen ? 'opacity-0 invisible -translate-x-4' : 'opacity-100 visible translate-x-0'
        }`}
      >
        Chat with us
        <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 delay-300" />

        <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 animate-squiggle">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.032 2.003c-5.514 0-9.997 4.472-10.021 9.985a9.976 9.976 0 0 0 1.418 5.041l-1.392 5.09 5.215-1.366a9.978 9.978 0 0 0 4.773 1.199h.004c5.514 0 9.998-4.473 10.022-9.986.012-5.514-4.471-9.997-10.019-9.997zm0 18.395a8.346 8.346 0 0 1-4.26-1.165l-.305-.182-3.095.811.826-3.019-.199-.316a8.342 8.342 0 0 1-1.284-4.447c.02-4.603 3.743-8.328 8.352-8.328 4.609 0 8.347 3.724 8.367 8.327-.02 4.609-3.743 8.334-8.352 8.334zm4.579-6.247c-.251-.126-1.488-.734-1.719-.817-.23-.084-.398-.126-.566.126-.168.252-.651.818-.798.986-.147.168-.293.189-.543.063-.251-.126-1.059-.39-2.017-1.245-.746-.665-1.249-1.486-1.395-1.737-.147-.251-.016-.387.111-.512.113-.113.251-.293.377-.44.126-.147.168-.251.252-.419.084-.168.042-.315-.021-.44-.063-.126-.566-1.364-.775-1.869-.205-.494-.412-.426-.566-.434-.147-.008-.315-.008-.483-.008a.928.928 0 0 0-.673.315c-.231.252-.881.861-.881 2.099 0 1.238.901 2.434 1.027 2.602.126.168 1.773 2.707 4.297 3.796.6.259 1.068.414 1.434.53.602.191 1.151.164 1.585.099.483-.073 1.488-.608 1.698-1.196.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.482-.294z" />
          </svg>
        </div>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute bottom-14 left-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-left overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.032 2.003c-5.514 0-9.997 4.472-10.021 9.985a9.976 9.976 0 0 0 1.418 5.041l-1.392 5.09 5.215-1.366a9.978 9.978 0 0 0 4.773 1.199h.004c5.514 0 9.998-4.473 10.022-9.986.012-5.514-4.471-9.997-10.019-9.997z" />
              </svg>
            </div>

            <div>
              <h4 className="font-semibold text-sm">Pangisa Support</h4>
              <p className="text-xs text-green-100">Typically replies within 5 min</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-3">
            👋 Select a quick message or type your own:
          </p>

          <div className="space-y-2 mb-4">
            {quickMessages.map((msg, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(msg.text)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2 group"
              >
                <span className="text-base">{msg.emoji}</span>
                <span className="flex-1 text-xs">{msg.text}</span>
              </button>
            ))}
          </div>

          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-400">or</span>
            </div>
          </div>

          {/* FIXED INPUT + BUTTON */}
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              id="waCustomMessage"
              placeholder="Type your message..."
              className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  sendMessage(e.target.value)
                  e.target.value = ''
                }
              }}
            />

            <button
              onClick={() => {
                const input = document.getElementById('waCustomMessage')
                if (input.value.trim()) {
                  sendMessage(input.value)
                  input.value = ''
                }
              }}
              className="shrink-0 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:shadow-md transition-all text-sm font-semibold whitespace-nowrap"
            >
              Send
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            🔒 Your conversation is encrypted and private
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes squiggle {
          0% { transform: rotate(0deg) scale(1); }
          15% { transform: rotate(-8deg) scale(1.05); }
          30% { transform: rotate(8deg) scale(1.05); }
          45% { transform: rotate(-6deg) scale(1.03); }
          60% { transform: rotate(6deg) scale(1.02); }
          75% { transform: rotate(-3deg) scale(1.01); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .animate-squiggle {
          animation: squiggle 2.5s ease-in-out infinite;
        }
        .animate-squiggle:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
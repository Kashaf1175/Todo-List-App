import { User, Clock, Code, MessageCircle, CheckCircle, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TodoList</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to make task management simple, intuitive, and accessible for everyone.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              TodoList was born out of frustration with overly complex productivity tools that promised the world but delivered confusion. We started with a simple question: "What if managing tasks could be both powerful and simple?"
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2024, our small team of productivity enthusiasts set out to create the perfect balance between functionality and simplicity. We believe that a good todo list shouldn't require a manual, and that staying organized shouldn't feel like a chore.
            </p>
            <p className="text-lg text-gray-700">
              Today, TodoList helps thousands of users manage their tasks, meet deadlines, and achieve their goals—all with an interface so intuitive that it feels like an extension of your own thinking.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <User size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">User-Centered</h3>
              </div>
              <p className="text-gray-600">
                We put our users first in every decision we make, focusing on creating an experience that truly serves their needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Respect for Time</h3>
              </div>
              <p className="text-gray-600">
                We believe your time is precious. Our app is designed to help you make the most of every minute, not waste it on complex workflows.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Quality Craftsmanship</h3>
              </div>
              <p className="text-gray-600">
                We take pride in building software that's reliable, performant, and thoughtfully designed down to the smallest detail.
              </p>
            </div>
          </div>
        </div>

        

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="40" r="25" fill="#93C5FD" />
                    <circle cx="50" cy="100" r="40" fill="#93C5FD" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael T.</h4>
                  <p className="text-gray-500 text-sm">Freelance Designer</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 italic">
                "TodoList has transformed how I manage client projects. It's simple enough to be immediately useful, but powerful enough to handle all my complex workflows."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="40" r="25" fill="#BFDBFE" />
                    <circle cx="50" cy="100" r="40" fill="#BFDBFE" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Emily K.</h4>
                  <p className="text-gray-500 text-sm">Small Business Owner</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I've tried dozens of todo apps, and this is the first one that actually stuck. The interface is refreshingly straightforward, and it helps me stay on top of my busy schedule."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="40" r="25" fill="#DBEAFE" />
                    <circle cx="50" cy="100" r="40" fill="#DBEAFE" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">David R.</h4>
                  <p className="text-gray-500 text-sm">Project Manager</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As someone who manages multiple teams, I needed something flexible yet powerful. TodoList strikes that perfect balance and has become an essential tool for our entire company."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="40" r="25" fill="#EFF6FF" />
                    <circle cx="50" cy="100" r="40" fill="#EFF6FF" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Jessica M.</h4>
                  <p className="text-gray-500 text-sm">Graduate Student</p>
                  <div className="flex mt-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-auto">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 italic">
                "TodoList helped me organize my research, coursework, and personal responsibilities all in one place. The simple interface makes it easy to quickly add tasks and stay focused."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying a simpler way to manage their tasks.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md inline-flex items-center gap-2">
            <CheckCircle size={20} />
            <span>Create Your Todo List</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CheckCircle className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-xl">TodoList</span>
          </div>
          <p className="text-gray-400">
            Made with <Heart size={16} className="inline text-red-400" /> by the TodoList Team
          </p>
          <p className="text-gray-400 mt-2">© 2025 TodoList App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
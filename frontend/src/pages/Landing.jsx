import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap, Users, BarChart3, Shield, Brain, Trophy, Clock,
  ArrowRight, ChevronRight, Terminal
} from 'lucide-react'

const features = [
  { icon: Users, title: 'Team Collaboration', desc: 'Manage members, assign tasks, and track real-time activity across your entire team.' },
  { icon: Brain, title: 'Skills & Testing', desc: 'Create skill assessments in Java, Python, Math and more. Members get tested and ranked automatically.' },
  { icon: Trophy, title: 'Performance Leaderboard', desc: 'Gamified leaderboard based on test scores helps admins assign tasks to the right people.' },
  { icon: Clock, title: 'Session Tracking', desc: 'Real-time session monitoring shows exactly who is online and how long they have been working.' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Comprehensive stats on task completion, team velocity, and project health at a glance.' },
  { icon: Shield, title: 'Role-Based Access', desc: 'Granular admin and member roles ensure the right people have the right permissions.' },
]

const stats = [
  { value: '10x', label: 'Faster task assignment' },
  { value: '99%', label: 'Uptime reliability' },
  { value: '50+', label: 'Skill categories' },
  { value: '∞', label: 'Team scalability' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle green ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-green-500/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="text-lg font-bold text-green-400">Ethara</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login"
            className="text-sm px-4 py-2 rounded-xl font-medium text-gray-400 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link to="/register"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-green-500 text-black hover:bg-green-400 transition-colors">
            Get started <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      {/* Hero — horizontal layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6 uppercase tracking-wider">
            <Terminal className="w-3 h-3" />
            Intelligent Team Management Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build teams that
            <br />
            <span className="text-green-400">actually ship.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
            Ethara combines project management, skill assessments, and real-time session tracking
            into one powerful platform — so admins always know who&apos;s working and who&apos;s best for the job.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/register"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold bg-green-500 text-black hover:bg-green-400 transition-colors">
              Start for free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/login"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-medium border border-white/15 text-white hover:bg-white/5 transition-colors">
              Sign in
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-10 mt-12 flex-wrap">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-green-400">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-1 min-w-0 w-full"
        >
          <div className="border border-green-500/15 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-3 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center px-3">
                <span className="text-xs text-gray-500">app.ethara.io/dashboard</span>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Active Tasks', value: '24', color: 'text-green-400' },
                  { label: 'Team Members', value: '8', color: 'text-green-300' },
                  { label: 'Tests Taken', value: '47', color: 'text-emerald-400' },
                  { label: 'Online Now', value: '5', color: 'text-green-500' },
                ].map(item => (
                  <div key={item.label} className="bg-white/4 rounded-xl p-3 border border-white/5">
                    <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 bg-white/4 rounded-xl p-3 border border-white/5 h-28 flex flex-col justify-between">
                  <div className="text-xs text-gray-400 font-medium">Task Completion</div>
                  <div className="flex items-end gap-1 h-14">
                    {[40, 65, 55, 80, 75, 90, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-green-600 to-green-400/50 rounded-sm"
                        style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="bg-white/4 rounded-xl p-3 border border-white/5 h-28">
                  <div className="text-xs text-gray-400 font-medium mb-2">Online Members</div>
                  {['Alex K.', 'Maria S.', 'John D.'].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-gray-300">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything your team needs</h2>
          <p className="text-gray-400 max-w-xl">From task assignment to skill testing — Ethara gives admins complete visibility and control.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-[#0d0d0d] border border-green-500/10 rounded-2xl p-6 hover:border-green-500/25 hover:bg-[#111] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d0d0d] border border-green-500/15 rounded-2xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-3">Ready to level up your team?</h2>
            <p className="text-gray-400 max-w-lg">Join teams that use Ethara to ship faster, test smarter, and collaborate better.</p>
          </div>
          <Link to="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold bg-green-500 text-black hover:bg-green-400 transition-colors whitespace-nowrap flex-shrink-0">
            Create free account <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/10 py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="font-bold text-green-400">Ethara</span>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Created by</p>
            <p className="text-sm font-semibold text-white">Yash Verma</p>
          </div>
          <p className="text-sm text-gray-600">© 2025 Ethara. Built for modern teams.</p>
        </div>
      </footer>
    </div>
  )
}

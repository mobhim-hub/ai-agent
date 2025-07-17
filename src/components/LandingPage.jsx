import React from 'react'
import { Link } from 'react-router-dom'

const features = [
	{
		icon: (
			<svg
				className="w-8 h-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
		title: 'AI-Powered Insights',
		desc: 'Leverage advanced AI to gain actionable insights and drive smarter decisions.',
	},
	{
		icon: (
			<svg
				className="w-8 h-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
		title: 'Real-Time Analytics',
		desc: 'Monitor your data in real time and respond instantly to new opportunities.',
	},
	{
		icon: (
			<svg
				className="w-8 h-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 100-8 4 4 0 000 8z" />
			</svg>
		),
		title: 'Secure & Private',
		desc: 'Your data is protected with industry-leading security and privacy standards.',
	},
	{
		icon: (
			<svg
				className="w-8 h-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4v4a1 1 0 001 1h3a1 1 0 001-1v-4m-5 0h6" />
			</svg>
		),
		title: 'Easy Integration',
		desc: 'Integrate seamlessly with your existing tools and workflows.',
	},
]

const pricing = [
	{
		name: 'Free',
		price: '$0',
		features: ['Basic AI features', 'Community support', 'Limited analytics'],
		cta: 'Get Started',
		highlight: false,
	},
	{
		name: 'Pro',
		price: '$29/mo',
		features: [
			'All Free features',
			'Advanced analytics',
			'Priority support',
			'Custom integrations',
		],
		cta: 'Start Pro',
		highlight: true,
	},
	{
		name: 'Enterprise',
		price: 'Contact Us',
		features: [
			'All Pro features',
			'Dedicated manager',
			'Custom AI solutions',
			'Enterprise SLAs',
		],
		cta: 'Contact Sales',
		highlight: false,
	},
]

const testimonials = [
	{
		name: 'Priya S.',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
		quote: 'This AI platform transformed our business. The insights are invaluable!',
	},
	{
		name: 'John D.',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		quote: 'Easy to use, powerful, and secure. Highly recommended for any team.',
	},
]

const blogPosts = [
	{
		title: 'How AI is Shaping the Future',
		image:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
		excerpt:
			'Discover the latest trends in artificial intelligence and how they\'re impacting industries worldwide.',
		link: '/blog/ai-future',
	},
	{
		title: '5 Ways to Boost Productivity with AI',
		image:
			'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
		excerpt:
			'Learn practical tips for leveraging AI tools to streamline your workflow and save time.',
		link: '/blog/ai-productivity',
	},
]

const HeroSection = () => (
	<section
		id="hero"
		className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 flex items-center justify-center min-h-[70vh]"
	>
		<div className="max-w-3xl mx-auto text-center z-10">
			<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
				Empowering the Future with{' '}
				<span className="text-blue-600">AI</span>
			</h1>
			<p className="text-lg md:text-xl text-gray-600 mb-8">
				Unlock the power of artificial intelligence to accelerate your business
				and innovation.
			</p>
			<Link
				to="/signup"
				className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
			>
				Get Started
			</Link>
		</div>
		{/* Decorative Illustration */}
		<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
			<svg className="w-96 h-96 opacity-10" viewBox="0 0 400 400" fill="none">
				<circle cx="200" cy="200" r="180" fill="#2563eb" />
				<circle cx="120" cy="120" r="60" fill="#60a5fa" />
				<circle cx="300" cy="100" r="40" fill="#3b82f6" />
			</svg>
		</div>
	</section>
)

const FeaturesSection = () => (
	<section id="features" className="py-16 px-4 bg-white">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
				Features
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{features.map((f, i) => (
					<div
						key={i}
						className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition"
					>
						{f.icon}
						<h3 className="mt-4 text-xl font-semibold text-gray-800">
							{f.title}
						</h3>
						<p className="mt-2 text-gray-600 text-center">{f.desc}</p>
					</div>
				))}
			</div>
		</div>
	</section>
)

const PricingSection = () => (
	<section id="pricing" className="py-16 px-4 bg-gray-50">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
				Pricing
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{pricing.map((plan, i) => (
					<div
						key={plan.name}
						className={`rounded-xl p-8 shadow-lg flex flex-col items-center border transition
              ${plan.highlight ? 'border-blue-600 bg-white scale-105 z-10' : 'border-gray-200 bg-gray-50'}
            `}
					>
						<h3 className="text-xl font-bold mb-2">{plan.name}</h3>
						<div className="text-3xl font-extrabold mb-4 text-blue-600">
							{plan.price}
						</div>
						<ul className="mb-6 space-y-2 text-gray-700">
							{plan.features.map((f, idx) => (
								<li key={idx} className="flex items-center gap-2">
									<span className="text-blue-500">✓</span>
									<span>{f}</span>
								</li>
							))}
						</ul>
						<Link
							to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
							className={`w-full py-2 rounded-lg font-semibold text-center transition
                ${plan.highlight
									? 'bg-blue-600 text-white hover:bg-blue-700'
									: 'bg-blue-50 text-blue-700 hover:bg-blue-100'}
              `}
						>
							{plan.cta}
						</Link>
					</div>
				))}
			</div>
		</div>
	</section>
)

const TestimonialsSection = () => (
	<section id="testimonials" className="py-16 px-4 bg-white">
		<div className="max-w-4xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
				What Our Users Say
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{testimonials.map((t, i) => (
					<div
						key={i}
						className="bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center text-center"
					>
						<img
							src={t.image}
							alt={t.name}
							className="w-16 h-16 rounded-full mb-4 object-cover"
						/>
						<p className="text-gray-700 italic mb-2">"{t.quote}"</p>
						<span className="font-semibold text-blue-600">{t.name}</span>
					</div>
				))}
			</div>
		</div>
	</section>
)

const BlogSection = () => (
	<section id="blog" className="py-16 px-4 bg-gray-50">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
				Latest Updates
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{blogPosts.map((post, i) => (
					<div
						key={i}
						className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
					>
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">{post.title}</h3>
							<p className="text-gray-600 mb-4">{post.excerpt}</p>
							<Link
								to={post.link}
								className="text-blue-600 hover:underline font-medium"
							>
								Read More →
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
)

const NewsletterSection = () => (
	<section id="contact" className="py-16 px-4 bg-white">
		<div className="max-w-xl mx-auto text-center">
			<h2 className="text-2xl font-bold mb-4 text-gray-900">
				Stay in the Loop
			</h2>
			<p className="mb-6 text-gray-600">
				Subscribe to our newsletter for the latest AI news and updates.
			</p>
			<form className="flex flex-col sm:flex-row gap-3 justify-center">
				<input
					type="email"
					required
					placeholder="Enter your email"
					className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
				>
					Subscribe
				</button>
			</form>
		</div>
	</section>
)

const LandingPage = () => (
	<div className="flex flex-col min-h-screen">
		<HeroSection />
		<FeaturesSection />
		<PricingSection />
		<TestimonialsSection />
		<BlogSection />
		<NewsletterSection />
	</div>
)

export default LandingPage

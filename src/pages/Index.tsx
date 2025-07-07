
import { useState } from 'react';
import { Search, MapPin, Building2, Users, TrendingUp, Star, ArrowRight, Briefcase, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      salary: '$120k - $150k',
      type: 'Full-time',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Node.js'],
      featured: true
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'New York, NY',
      salary: '$100k - $130k',
      type: 'Full-time',
      posted: '1 day ago',
      skills: ['Product Strategy', 'Analytics', 'Agile'],
      featured: true
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'Remote',
      salary: '$80k - $100k',
      type: 'Full-time',
      posted: '3 days ago',
      skills: ['Figma', 'User Research', 'Prototyping'],
      featured: false
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataTech',
      location: 'Seattle, WA',
      salary: '$110k - $140k',
      type: 'Full-time',
      posted: '1 day ago',
      skills: ['Python', 'Machine Learning', 'SQL'],
      featured: false
    }
  ];

  const companies = [
    { name: 'TechCorp', logo: '🚀', jobs: 12 },
    { name: 'InnovateLab', logo: '💡', jobs: 8 },
    { name: 'DesignStudio', logo: '🎨', jobs: 5 },
    { name: 'DataTech', logo: '📊', jobs: 15 }
  ];

  const stats = [
    { label: 'Active Jobs', value: '2,500+', icon: Briefcase },
    { label: 'Companies', value: '500+', icon: Building2 },
    { label: 'Candidates', value: '10k+', icon: Users },
    { label: 'Success Rate', value: '92%', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SkillSync
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Jobs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Companies</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Candidates</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Resources</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Career Match
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with top companies and discover opportunities that align with your skills and aspirations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Job title, keywords, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg border-0 bg-gray-50"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 h-12 text-lg border-0 bg-gray-50"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Search Jobs
                </Button>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="text-xl text-gray-600">Discover hand-picked jobs from top companies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {job.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 mt-2">
                        <Building2 className="h-4 w-4 mr-2" />
                        {job.company}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Companies Hiring</h2>
            <p className="text-xl text-gray-600">Join industry leaders and innovative startups</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                <div className="text-4xl mb-4">{company.logo}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.jobs} open positions</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream careers through SkillSync
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Browse Jobs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Post a Job
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SS</span>
                </div>
                <span className="text-xl font-bold">SkillSync</span>
              </div>
              <p className="text-gray-400">
                Connecting talent with opportunity, one perfect match at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Candidates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

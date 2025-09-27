import { ArrowRight, Star, Users, Trophy, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-ielts-students.jpg';

const Hero = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: Trophy, value: '8.5+', label: 'Average Band Score' },
    { icon: BookOpen, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'Student Rating' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Star className="h-4 w-4 mr-2 fill-current" />
                <span className="text-sm font-medium">Top-Rated IELTS Institute</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master IELTS with
                <span className="block text-transparent bg-clip-text primary-gradient">
                  Confidence & Success
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Join thousands of successful students who achieved their dream IELTS scores with our proven teaching methods, expert instructors, and personalized study plans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="accent-gradient hover:shadow-medium transition-bounce group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce">
                Free Assessment
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center border-border/50 hover:shadow-soft transition-smooth animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-strong animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <img
                src={heroImage}
                alt="IELTS students studying together"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 primary-gradient opacity-10"></div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium animate-bounce-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Classes Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
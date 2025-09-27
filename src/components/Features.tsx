import { Mic, FileText, Brain, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'Speaking Practice',
      description: 'Interactive speaking sessions with certified trainers and AI-powered pronunciation feedback.',
      gradient: 'primary-gradient',
      highlights: ['One-on-one sessions', 'Pronunciation analysis', 'Fluency improvement']
    },
    {
      icon: FileText,
      title: 'Mock Tests',
      description: 'Comprehensive practice tests that simulate the real IELTS exam environment.',
      gradient: 'accent-gradient',
      highlights: ['Full-length tests', 'Instant scoring', 'Performance analytics']
    },
    {
      icon: Brain,
      title: 'AI Band Score Predictor',
      description: 'Advanced AI technology that predicts your band score with 95% accuracy.',
      gradient: 'bg-gradient-to-br from-secondary to-secondary-light',
      highlights: ['Accurate predictions', 'Weakness identification', 'Study recommendations']
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from certified IELTS trainers with 10+ years of teaching experience.',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      highlights: ['Certified trainers', 'Personalized attention', 'Proven strategies']
    }
  ];

  const additionalFeatures = [
    { icon: Clock, title: 'Flexible Timing', description: 'Choose from morning, evening, or weekend batches' },
    { icon: Award, title: 'Success Guarantee', description: 'Achieve your target score or get additional training free' }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose IELTS Excellence?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IELTS preparation with cutting-edge technology and expert guidance
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-background/60 backdrop-blur-sm border-border/30 hover:shadow-soft transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
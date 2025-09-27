import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'Canada',
      score: '8.5',
      image: 'SC',
      text: "IELTS Excellence transformed my preparation journey. The speaking practice sessions were incredibly helpful, and I achieved my target score of 8.5 in just 3 months!",
      rating: 5
    },
    {
      name: 'Raj Patel',
      location: 'Australia',
      score: '8.0',
      image: 'RP',
      text: "The AI band score predictor was amazingly accurate. It helped me focus on my weak areas and improve systematically. Highly recommend this institute!",
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      location: 'UK',
      score: '7.5',
      image: 'MR',
      text: "Excellent teaching methods and personalized attention. The mock tests were exactly like the real exam. Scored 7.5 overall and got into my dream university!",
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Trained' },
    { number: '95%', label: 'Success Rate' },
    { number: '8.2', label: 'Average Score' },
    { number: '50+', label: 'Countries' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream scores with us
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative p-6 hover:shadow-medium transition-all duration-300 border-border/50 group hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.image}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  {/* Score Badge */}
                  <div className="bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-full text-sm border border-secondary/20">
                    Score: {testimonial.score}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
            <Star className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start your IELTS journey today and become our next success story
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, TrendingUp, BookOpen, Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-learning.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "10,000+" },
    { icon: BookOpen, label: "Courses Offered", value: "50+" },
    { icon: Award, label: "Certificates Earned", value: "5,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of teaching experience",
    },
    {
      icon: Globe2,
      title: "Multilingual Learning",
      description: "Master English and Japanese with native speaker guidance",
    },
    {
      icon: Award,
      title: "Gamified Progress",
      description: "Earn badges, unlock achievements, and track your learning journey",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join forums, study groups, and cultural exchange programs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your Potential with
                <span className="text-primary block mt-2">Math & Language Synergy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Master English, Japanese, and Mathematics through our innovative, gamified learning platform designed for success.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/courses">
                  <Button variant="hero" size="lg" className="font-semibold">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="Students learning together"
                className="rounded-2xl shadow-large w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience a revolutionary approach to learning that combines education with engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students already transforming their future through education
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/courses">
              <Button variant="secondary" size="lg" className="font-semibold">
                Browse Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower learners worldwide with accessible, engaging education that bridges languages and cultures through innovative technology.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Creating a global community where language barriers dissolve and mathematical thinking unlocks new possibilities for everyone.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Excellence, inclusivity, innovation, and community-driven growth form the foundation of everything we create.",
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "Combining gamification, cultural exchange, and personalized learning paths to make education enjoyable and effective.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Math and Language Synergy, we believe that education should be accessible, 
              engaging, and transformative. We're dedicated to breaking down barriers between 
              languages and mathematical thinking.
            </p>
          </div>

          {/* Story */}
          <Card className="mb-12 shadow-medium animate-fade-in">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by educators and technologists passionate about making learning 
                  accessible worldwide, Math and Language Synergy emerged from a simple 
                  observation: traditional education often treats subjects in isolation.
                </p>
                <p>
                  We recognized that language learning and mathematical thinking share 
                  common cognitive pathways. By integrating these disciplines with cultural 
                  exchange and gamification, we've created an environment where students 
                  don't just learn—they thrive.
                </p>
                <p>
                  Today, we serve thousands of students across the globe, helping them 
                  master English, Japanese, and Mathematics while building confidence and 
                  cultural awareness.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Section */}
          <div className="mt-16 text-center animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our diverse team of educators, linguists, mathematicians, and technologists 
              work together to create the best learning experience for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-achievement" />
                    <h4 className="font-semibold text-lg mb-1">Team Member {i}</h4>
                    <p className="text-sm text-muted-foreground">Department Lead</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

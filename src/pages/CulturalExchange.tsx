import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import culturalImage from "@/assets/cultural-exchange.jpg";

const CulturalExchange = () => {
  const posts = [
    {
      id: 1,
      author: "Yuki T.",
      country: "Japan",
      image: culturalImage,
      caption: "Sharing traditional tea ceremony techniques with my language partner!",
      likes: 156,
      comments: 23,
    },
    {
      id: 2,
      author: "Maria G.",
      country: "Spain",
      image: culturalImage,
      caption: "Learning about Japanese calligraphy - it's both art and meditation!",
      likes: 142,
      comments: 18,
    },
    {
      id: 3,
      author: "Alex K.",
      country: "USA",
      image: culturalImage,
      caption: "Celebrating my first successful conversation entirely in Japanese! 🎉",
      likes: 203,
      comments: 31,
    },
    {
      id: 4,
      author: "Hana S.",
      country: "Korea",
      image: culturalImage,
      caption: "Cross-cultural cooking session: teaching English while making kimchi!",
      likes: 187,
      comments: 27,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cultural Exchange Board</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your learning experiences, cultural insights, and connect with students worldwide
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 shadow-large animate-fade-in overflow-hidden">
          <div className="h-96 relative overflow-hidden">
            <img
              src={culturalImage}
              alt="Cultural exchange"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Language Learning Through Cultural Connection
              </h2>
              <p className="text-lg text-foreground/90 mb-4">
                Discover how our students are bridging cultures and building friendships
              </p>
              <Button variant="hero" size="lg">
                Share Your Story
              </Button>
            </div>
          </div>
        </Card>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {post.country}
                </div>
              </div>
              
              <CardContent className="pt-4 pb-4">
                <div className="mb-3">
                  <p className="font-semibold mb-1">{post.author}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.caption}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-3 border-t border-border">
                  <button className="flex items-center gap-1 hover:text-achievement transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-secondary transition-colors ml-auto">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CulturalExchange;

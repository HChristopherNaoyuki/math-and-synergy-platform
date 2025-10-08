import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Reply, Search, Plus } from "lucide-react";
import { toast } from "sonner";

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const discussions = [
    {
      id: 1,
      author: "Sarah Chen",
      initials: "SC",
      title: "Tips for memorizing Japanese Kanji?",
      content: "I'm struggling with remembering kanji characters. Does anyone have effective techniques?",
      category: "Japanese",
      replies: 12,
      likes: 24,
      time: "2 hours ago",
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      initials: "MR",
      title: "Best resources for English pronunciation",
      content: "Looking for apps or methods to improve my English pronunciation. Any suggestions?",
      category: "English",
      replies: 8,
      likes: 15,
      time: "5 hours ago",
    },
    {
      id: 3,
      author: "Yuki Tanaka",
      initials: "YT",
      title: "Calculus study group forming!",
      content: "Starting a study group for calculus. Meet twice a week via video call. Who's interested?",
      category: "Math",
      replies: 20,
      likes: 35,
      time: "1 day ago",
    },
    {
      id: 4,
      author: "Emma Wilson",
      initials: "EW",
      title: "Sharing my language exchange experience",
      content: "Just completed a 3-month language exchange with a native Japanese speaker. Happy to share tips!",
      category: "Cultural Exchange",
      replies: 6,
      likes: 18,
      time: "2 days ago",
    },
  ];

  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryColors: Record<string, string> = {
    English: "bg-primary/10 text-primary border-primary/20",
    Japanese: "bg-achievement/10 text-achievement border-achievement/20",
    Math: "bg-secondary/10 text-secondary border-secondary/20",
    "Cultural Exchange": "bg-success/10 text-success border-success/20",
  };

  const handleNewPost = () => {
    toast.success("Post created!", {
      description: "Your discussion has been posted to the forum.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-16">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Community Forum</h1>
              <p className="text-lg text-muted-foreground">
                Connect, share, and learn together with fellow students
              </p>
            </div>
            <Button variant="hero" onClick={handleNewPost} className="gap-2">
              <Plus className="h-5 w-5" />
              New Discussion
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl animate-fade-in">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 shadow-soft"
            />
          </div>
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {filteredDiscussions.map((discussion, index) => (
            <Card
              key={discussion.id}
              className="hover:shadow-medium transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-4">
                  {/* Avatar */}
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {discussion.initials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Posted by {discussion.author} • {discussion.time}
                        </p>
                      </div>
                      <Badge className={`${categoryColors[discussion.category]} border shrink-0`}>
                        {discussion.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {discussion.content}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Reply className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-achievement transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes} likes</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors ml-auto">
                        <MessageCircle className="h-4 w-4" />
                        <span>View Discussion</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredDiscussions.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground mb-4">No discussions found</p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forum;

import Navbar from "@/components/Navbar";
import BadgeDisplay from "@/components/BadgeDisplay";
import ProgressBar from "@/components/ProgressBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userProgress = {
    english: { completed: 15, total: 20 },
    japanese: { completed: 8, total: 16 },
    math: { completed: 12, total: 15 },
  };

  const badges = [
    { name: "First Steps", description: "Complete your first lesson", earned: true, icon: "star" as const },
    { name: "Week Warrior", description: "Study 7 days in a row", earned: true, icon: "trophy" as const },
    { name: "Perfect Score", description: "Get 100% on any quiz", earned: true, icon: "award" as const },
    { name: "Polyglot", description: "Complete 2 language courses", earned: false, icon: "target" as const },
    { name: "Math Master", description: "Complete all math modules", earned: false, icon: "trophy" as const },
    { name: "Community Helper", description: "Help 10 students in forum", earned: false, icon: "star" as const },
  ];

  const upcomingLessons = [
    { course: "English", lesson: "Advanced Grammar", date: "Tomorrow, 10:00 AM" },
    { course: "Japanese", lesson: "Kanji Practice", date: "Dec 12, 2:00 PM" },
    { course: "Math", lesson: "Calculus Basics", date: "Dec 13, 11:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-16">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-lg text-muted-foreground">
            Keep up the great work! You're making excellent progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Progress */}
            <Card className="shadow-medium animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Course Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ProgressBar
                  label="English Language Mastery"
                  value={userProgress.english.completed}
                  maxValue={userProgress.english.total}
                  variant="default"
                />
                <ProgressBar
                  label="Japanese Language & Culture"
                  value={userProgress.japanese.completed}
                  maxValue={userProgress.japanese.total}
                  variant="achievement"
                />
                <ProgressBar
                  label="Mathematics Fundamentals"
                  value={userProgress.math.completed}
                  maxValue={userProgress.math.total}
                  variant="success"
                />
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-medium animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-achievement" />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <BadgeDisplay key={index} {...badge} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-8">
            {/* Stats Card */}
            <Card className="shadow-medium animate-fade-in" style={{ animationDelay: "150ms" }}>
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Streak</span>
                  <span className="text-2xl font-bold text-achievement">7 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Points</span>
                  <span className="text-2xl font-bold text-primary">3,420</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Badges Earned</span>
                  <span className="text-2xl font-bold text-success">3 / 6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Rank</span>
                  <span className="text-2xl font-bold text-foreground">#142</span>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Lessons */}
            <Card className="shadow-medium animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-secondary" />
                  Upcoming Lessons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingLessons.map((lesson, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <p className="font-semibold text-sm mb-1">{lesson.course}</p>
                    <p className="text-sm text-muted-foreground mb-2">{lesson.lesson}</p>
                    <p className="text-xs text-primary font-medium">{lesson.date}</p>
                  </div>
                ))}
                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full mt-2">
                    Schedule New Lesson
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-medium animate-fade-in" style={{ animationDelay: "250ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/courses">
                  <Button variant="hero" className="w-full">
                    Continue Learning
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button variant="outline" className="w-full">
                    Visit Forum
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Get Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

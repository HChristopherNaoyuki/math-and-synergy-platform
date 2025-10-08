import { useState } from "react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import courseEnglish from "@/assets/course-english.jpg";
import courseJapanese from "@/assets/course-japanese.jpg";
import courseMath from "@/assets/course-math.jpg";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const courses = [
    {
      id: "english",
      title: "English Language Mastery",
      description: "Comprehensive English course covering grammar, vocabulary, conversation, and writing skills for all levels.",
      image: courseEnglish,
      duration: "12 weeks",
      students: 5000,
      level: "Beginner" as const,
      rating: 4.8,
    },
    {
      id: "japanese",
      title: "Japanese Language & Culture",
      description: "Learn Japanese from hiragana to advanced conversation, including cultural insights and practical applications.",
      image: courseJapanese,
      duration: "16 weeks",
      students: 3500,
      level: "Beginner" as const,
      rating: 4.9,
    },
    {
      id: "math",
      title: "Mathematics Fundamentals",
      description: "Build strong mathematical foundations from basic arithmetic to advanced problem-solving techniques.",
      image: courseMath,
      duration: "10 weeks",
      students: 4200,
      level: "Intermediate" as const,
      rating: 4.7,
    },
    {
      id: "english-adv",
      title: "Advanced English Communication",
      description: "Master business English, academic writing, and advanced conversation for professional contexts.",
      image: courseEnglish,
      duration: "8 weeks",
      students: 2800,
      level: "Advanced" as const,
      rating: 4.9,
    },
    {
      id: "japanese-adv",
      title: "Advanced Japanese Proficiency",
      description: "Achieve fluency with complex grammar, keigo (honorific language), and professional Japanese skills.",
      image: courseJapanese,
      duration: "12 weeks",
      students: 1500,
      level: "Advanced" as const,
      rating: 4.8,
    },
    {
      id: "math-adv",
      title: "Advanced Mathematics",
      description: "Explore calculus, statistics, and advanced problem-solving for academic and professional success.",
      image: courseMath,
      duration: "14 weeks",
      students: 2100,
      level: "Advanced" as const,
      rating: 4.9,
    },
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive learning paths designed to help you achieve your goals
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6 animate-fade-in">
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 shadow-soft"
            />
          </div>

          {/* Level Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "hero" : "outline"}
                onClick={() => setSelectedLevel(level)}
                className="min-w-[100px]"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground mb-4">No courses found matching your criteria</p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedLevel("All"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

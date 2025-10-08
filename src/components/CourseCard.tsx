import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
}

const CourseCard = ({ id, title, description, image, duration, students, level, rating }: CourseCardProps) => {
  const levelColors = {
    Beginner: "bg-success/10 text-success border-success/20",
    Intermediate: "bg-achievement/10 text-achievement border-achievement/20",
    Advanced: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <Card className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className={`absolute top-3 right-3 ${levelColors[level]} border`}>
          {level}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students}+</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-achievement text-achievement" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/enroll?course=${id}`} className="w-full">
          <Button variant="hero" className="w-full" size="lg">
            Enroll Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

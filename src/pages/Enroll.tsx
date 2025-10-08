import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { z } from "zod";

const enrollmentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().min(1, "Please select a course"),
  level: z.string().min(1, "Please select your level"),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

const Enroll = () => {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get("course") || "";
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: preselectedCourse,
    level: "",
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const courses = [
    { id: "english", name: "English Language Mastery" },
    { id: "japanese", name: "Japanese Language & Culture" },
    { id: "math", name: "Mathematics Fundamentals" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      enrollmentSchema.parse(formData);
      setErrors({});
      
      toast.success("Enrollment Successful!", {
        description: "Welcome to Math & Language Synergy! Check your email for next steps.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        level: "",
        terms: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Please fix the errors in the form");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4">Enroll in a Course</h1>
            <p className="text-lg text-muted-foreground">
              Take the first step towards mastering new skills
            </p>
          </div>

          <Card className="shadow-large animate-fade-in">
            <CardHeader>
              <CardTitle>Enrollment Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={errors.fullName ? "border-destructive" : ""}
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={errors.phone ? "border-destructive" : ""}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <Label htmlFor="course">Select Course *</Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                  >
                    <SelectTrigger className={errors.course ? "border-destructive" : ""}>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.course && (
                    <p className="text-sm text-destructive">{errors.course}</p>
                  )}
                </div>

                {/* Level Selection */}
                <div className="space-y-2">
                  <Label htmlFor="level">Your Current Level *</Label>
                  <Select
                    value={formData.level}
                    onValueChange={(value) => setFormData({ ...formData, level: value })}
                  >
                    <SelectTrigger className={errors.level ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.level && (
                    <p className="text-sm text-destructive">{errors.level}</p>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, terms: checked as boolean })
                    }
                    className={errors.terms ? "border-destructive" : ""}
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-normal cursor-pointer"
                    >
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                    {errors.terms && (
                      <p className="text-sm text-destructive">{errors.terms}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <Button type="submit" variant="hero" className="flex-1" size="lg">
                    Complete Enrollment
                  </Button>
                  <Link to="/courses" className="flex-1">
                    <Button type="button" variant="outline" className="w-full" size="lg">
                      Back to Courses
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Enroll;

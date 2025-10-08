import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Target } from "lucide-react";
import badgeImage from "@/assets/badge-achievement.png";

interface BadgeProps {
  name: string;
  description: string;
  earned: boolean;
  icon?: "trophy" | "star" | "award" | "target";
}

const BadgeDisplay = ({ name, description, earned, icon = "star" }: BadgeProps) => {
  const icons = {
    trophy: Trophy,
    star: Star,
    award: Award,
    target: Target,
  };

  const Icon = icons[icon];

  return (
    <div
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
        earned
          ? "bg-gradient-achievement border-achievement-glow shadow-glow animate-bounce-in cursor-pointer hover:scale-105"
          : "bg-muted/30 border-border opacity-60 grayscale"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
            earned ? "bg-gradient-achievement animate-pulse-glow" : "bg-muted"
          }`}
        >
          {earned ? (
            <img src={badgeImage} alt={name} className="w-12 h-12" />
          ) : (
            <Icon className="w-8 h-8 text-muted-foreground" />
          )}
        </div>
        
        <div className="text-center">
          <h4 className={`font-semibold text-sm ${earned ? "text-foreground" : "text-muted-foreground"}`}>
            {name}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        
        {earned && (
          <Badge variant="outline" className="text-xs border-achievement-glow text-achievement">
            Unlocked!
          </Badge>
        )}
      </div>
    </div>
  );
};

export default BadgeDisplay;

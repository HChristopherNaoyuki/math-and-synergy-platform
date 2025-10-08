import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  showPercentage?: boolean;
  variant?: "default" | "achievement" | "success";
}

const ProgressBar = ({ 
  label, 
  value, 
  maxValue = 100, 
  showPercentage = true,
  variant = "default" 
}: ProgressBarProps) => {
  const percentage = Math.round((value / maxValue) * 100);
  
  const variantStyles = {
    default: "bg-primary",
    achievement: "bg-gradient-achievement",
    success: "bg-success",
  };

  return (
    <div className="space-y-2 animate-fade-in">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showPercentage && (
          <span className="text-sm font-semibold text-primary">{percentage}%</span>
        )}
      </div>
      <div className="relative">
        <Progress 
          value={percentage} 
          className="h-3 bg-muted"
        />
        <div 
          className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${variantStyles[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{value} completed</span>
        <span>{maxValue} total</span>
      </div>
    </div>
  );
};

export default ProgressBar;

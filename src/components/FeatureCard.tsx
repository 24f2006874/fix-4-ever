import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all">
      <div className="p-3 bg-success/10 rounded-full mb-4">
        <Icon className="h-6 w-6 text-success" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;

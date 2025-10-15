import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{content}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

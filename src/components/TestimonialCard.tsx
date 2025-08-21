import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
}

export const TestimonialCard = ({ name, location, text, rating = 5 }: TestimonialProps) => {
  return (
    <Card className="shadow-elegant hover:shadow-premium transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-foreground mb-4 italic leading-relaxed">
          "{text}"
        </blockquote>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
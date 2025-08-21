import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaUrl: string;
  category: string;
  featured?: boolean;
  image?: string;
}

export const ProductCard = ({ 
  title, 
  description, 
  benefits, 
  ctaText, 
  ctaUrl, 
  category, 
  featured = false,
  image 
}: ProductCardProps) => {
  return (
    <Card className={`
      group relative overflow-hidden transition-all duration-300 hover:shadow-premium 
      ${featured ? 'ring-2 ring-gradient-primary shadow-glow' : 'shadow-elegant'}
      hover:scale-[1.02] transform
    `}>
      {featured && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-semibold">
          ⭐ PRODUTO DESTAQUE ⭐
        </div>
      )}
      
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className={featured ? 'pt-12' : ''}>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-gradient-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Principais Benefícios:
          </h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          asChild 
          variant={featured ? "premium" : "gradient"}
          size="lg" 
          className="w-full"
        >
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
            {ctaText}
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
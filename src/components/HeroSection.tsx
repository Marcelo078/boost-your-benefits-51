import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Wellness Benefits" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/90"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-elegant">
            <Gift className="w-4 h-4" />
            Oferta Limitada - Benefícios Exclusivos
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Ganhe <span className="bg-gradient-primary bg-clip-text text-transparent">R$ 20</span> e Mais 
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
              Benefícios com Nossos
            </span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Parceiros Financeiros
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Abra sua conta em poucos minutos, resgate cupons exclusivos e faça seu dinheiro render muito mais! 
            Aproveite essas oportunidades imperdíveis com produtos de saúde, beleza e tecnologia.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-elegant">
              <Gift className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Benefícios Exclusivos</div>
                <div className="text-sm text-muted-foreground">Cupons e descontos especiais</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-elegant">
              <TrendingUp className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Resultados Rápidos</div>
                <div className="text-sm text-muted-foreground">Produtos comprovados</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-elegant">
              <Shield className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-foreground">100% Seguro</div>
                <div className="text-sm text-muted-foreground">Produtos naturais testados</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              variant="premium" 
              size="xl"
              className="shadow-glow"
            >
              <a href="#produtos" className="flex items-center gap-2">
                Ver Produtos Exclusivos
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
            >
              <a href="https://renda-boost.lovable.app" target="_blank" rel="noopener noreferrer">
                Ganhar R$ 20 Agora
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70 text-sm text-muted-foreground">
            <span>✓ Mais de 10.000 clientes satisfeitos</span>
            <span>✓ Produtos 100% naturais</span>
            <span>✓ Garantia de resultados</span>
          </div>
        </div>
      </div>
    </section>
  );
};
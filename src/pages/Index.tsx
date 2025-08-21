import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star, TrendingUp, Users, Shield, ArrowRight } from "lucide-react";

// Import images
import supplementCapsules from "@/assets/supplement-capsules.jpg";
import hairTreatment from "@/assets/hair-treatment.jpg";
import digitalWellness from "@/assets/digital-wellness.jpg";
import detoxDrops from "@/assets/detox-drops.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Article Section */}
      <section id="artigo" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium border-2 border-gradient-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-3">
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <span className="font-bold">ARTIGO EXCLUSIVO - PRODUTO MAIS VENDIDO</span>
                  <Star className="w-5 h-5 fill-yellow-400" />
                </div>
              </div>
              
              <div className="pt-16">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        New Detox: Revolução no Emagrecimento Natural
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Descubra o segredo que está mudando a vida de milhares de brasileiros. 
                        O método NEW DETOX combina ingredientes 100% naturais para resultados 
                        surpreendentes sem comprometer sua saúde.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Por que NEW DETOX funciona?
                      </h3>
                      
                      <ul className="space-y-3">
                        {["Acelera o metabolismo de forma natural", "Elimina toxinas que impedem o emagrecimento", "Reduz a retenção de líquidos", "Controla a ansiedade por doces", "Melhora o funcionamento intestinal", "Aumenta a energia e disposição"].map((benefit, index) => <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>)}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-success/10 p-6 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        <span className="font-bold text-green-700">Resultados Comprovados</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        <strong>Mais de 50.000 pessoas</strong> já transformaram suas vidas com NEW DETOX. 
                        Resultados visíveis a partir da primeira semana!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <img src={detoxDrops} alt="New Detox - Produto Natural para Emagrecimento" className="w-full max-w-sm rounded-lg shadow-elegant" />
                    
                    <div className="text-center space-y-4 w-full">
                      <div className="bg-gradient-accent/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">Oferta Especial</div>
                        <div className="text-sm text-muted-foreground">Por tempo limitado</div>
                      </div>
                      
                      <Button asChild variant="premium" size="xl" className="w-full shadow-glow animate-pulse">
                        <a href="https://app.monetizze.com.br/r/ALW20871672" target="_blank" rel="noopener noreferrer">
                          QUERO EMAGRECER AGORA!
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </Button>
                      
                      <p className="text-xs text-muted-foreground">
                        ✓ Entrega em todo Brasil • ✓ Satisfação garantida • ✓ Suporte 24h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Produtos <span className="bg-gradient-primary bg-clip-text text-zinc-400">Exclusivos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra nossa seleção cuidadosa de produtos que realmente funcionam. 
              Cada item foi testado e aprovado por especialistas.
            </p>
          </div>

          {/* Emagrecimento Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              Emagrecimento e Saúde
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard title="Lift Detox Black" description="Fórmula avançada que acelera o emagrecimento com ingredientes 100% naturais. Resultados visíveis em poucas semanas!" benefits={["Acelera o metabolismo naturalmente", "Elimina toxinas do organismo", "Reduz medidas rapidamente", "Fórmula cientificamente comprovada"]} ctaText="EMAGRECER AGORA" ctaUrl="https://app.monetizze.com.br/r/AQB15367580" category="Emagrecimento" image={supplementCapsules} />
              
              <ProductCard title="Slim Gota Black" description="Gotinhas revolucionárias para queima de gordura teimosa. Seu caminho para a melhor versão do seu corpo!" benefits={["Queima gordura localizada", "Controla apetite naturalmente", "Aumenta energia e disposição", "Fácil de usar - apenas gotas"]} ctaText="EXPERIMENTAR AGORA" ctaUrl="https://app.monetizze.com.br/r/AUZ21258214" category="Emagrecimento" featured={true} />
              
              <ProductCard title="Super Green Black" description="Muito além do emagrecimento! Fórmula que impulsiona corpo e mente para resultados 10x mais poderosos." benefits={["Emagrecimento acelerado", "Melhora foco e concentração", "Aumenta resistência física", "Desintoxica completamente"]} ctaText="FICAR MAIS FORTE" ctaUrl="https://app.monetizze.com.br/r/ASY18248645" category="Emagrecimento" />

              <ProductCard title="Diuriefit Black" description="Pó emagrecedor 10x mais eficaz com sabor de laranja. Resultados nos primeiros 6 dias de uso!" benefits={["Resultados em 6 dias", "Sabor delicioso de laranja", "Elimina retenção líquida", "Fórmula exclusiva no mercado"]} ctaText="COMEÇAR HOJE" ctaUrl="https://app.monetizze.com.br/r/APB25502772" category="Emagrecimento" />

              <ProductCard title="Inibe One" description="Se você ainda não está confortável com seu corpo, chegou a hora de mudar! Emagreça com segurança." benefits={["Inibe o apetite naturalmente", "Acelera queima de calorias", "Melhora autoestima", "Frete grátis + desconto"]} ctaText="GANHAR CONFIANÇA" ctaUrl="https://app.monetizze.com.br/r/APZ25502897" category="Emagrecimento" />

              <ProductCard title="Mounjax" description="Gotinhas que auxiliam a queima de gordura. Chega de se esconder! Recupere a alegria de viver!" benefits={["Queima gordura eficazmente", "Reduz ansiedade alimentar", "Melhora humor e disposição", "Aplicação prática em gotas"]} ctaText="RECUPERAR ALEGRIA" ctaUrl="https://app.monetizze.com.br/r/AYR25502743" category="Emagrecimento" />
            </div>
          </div>

          {/* Beauty & Health Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              Beleza e Cuidados
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard title="Hidraliso - Alisante de Chuveiro" description="Liso em minutos! Sem formol, sem ardência e sem cheiro. Cabelos lisos e hidratados na primeira aplicação." benefits={["Liso instantâneo no chuveiro", "100% sem formol ou química", "Hidrata enquanto alisa", "Para todos os tipos de cabelo"]} ctaText="ALISAR CABELO" ctaUrl="https://app.monetizze.com.br/r/AWW11504208" category="Beleza" image={hairTreatment} />

              <ProductCard title="Kit S.O.S Crescimento" description="Kit Nº 1 mais potente em crescimento capilar e combate à queda! Descubra o segredo do cabelo dos sonhos." benefits={["Para crescimento acelerado", "Combate queda eficazmente", "Fortalece fios fracos", "Resultados em 30 dias"]} ctaText="CRESCER CABELO" ctaUrl="https://app.monetizze.com.br/r/ACS21486499" category="Beleza" />

              <ProductCard title="Clareador Nutralfit" description="Acabe de vez com as manchas escuras da sua pele com nosso clareador revolucionário!" benefits={["Remove manchas escuras", "Uniformiza tom da pele", "Fórmula segura e eficaz", "Resultados duradouros"]} ctaText="CLAREAR PELE" ctaUrl="https://app.monetizze.com.br/r/AJX25503066" category="Beleza" />
            </div>
          </div>

          {/* Health Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              Saúde e Bem-estar
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard title="Nutra Vida" description="2 cápsulas ao dia para engravidar! Testado e aprovado para mulheres com diversos diagnósticos." benefits={["Indicado para laqueaduras", "Trata ovários policísticos", "Combate endometriose", "Equilibra hormônios naturalmente"]} ctaText="REALIZAR SONHO" ctaUrl="https://app.monetizze.com.br/r/AXC25503421" category="Saúde" />

              <ProductCard title="Fignar" description="Melhore a saúde do seu fígado com apenas 20 gotas! Desintoxique e regenere naturalmente." benefits={["Apenas 20 gotas por dia", "Desintoxica o fígado", "Melhora digestão", "Ingredientes 100% naturais"]} ctaText="CUIDAR DO FÍGADO" ctaUrl="https://app.monetizze.com.br/r/APP25503419" category="Saúde" />

              <ProductCard title="Kit Restart Intestinal" description="Comece sua jornada de desintoxicação e renascimento intestinal! Liberte-se das inflamações." benefits={["Desintoxica completamente", "Elimina inflamações", "Melhora imunidade", "Renova flora intestinal"]} ctaText="RENOVAR INTESTINO" ctaUrl="https://app.monetizze.com.br/r/ACN25503403" category="Saúde" />
            </div>
          </div>

          {/* Digital Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              Tecnologia e Negócios
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard title="Lovable IA" description="Crie códigos de SaaS e aplicativos em segundos com inteligência artificial avançada!" benefits={["Código automático com IA", "Crie SaaS profissionais", "Interface intuitiva", "Economia de tempo e dinheiro"]} ctaText="CRIAR COM IA" ctaUrl="https://lovable.dev/?via=marcelo-barbosa" category="Tecnologia" image={digitalWellness} />

              <ProductCard title="Fórmula Negócio Online" description="Todos começaram do zero e mudaram de vida! O método completo de Alex Vargas para o sucesso digital." benefits={["Método comprovado do zero", "Cases reais de sucesso", "Suporte especializado", "Mudança de vida garantida"]} ctaText="MUDAR DE VIDA" ctaUrl="https://go.hotmart.com/E11195793E?ap=305a" category="Negócios" />

              <ProductCard title="Agênciagram" description="Aumente seus seguidores no Instagram de forma orgânica e estratégica. Cresça com qualidade!" benefits={["Crescimento orgânico real", "Estratégias profissionais", "Engajamento qualificado", "Resultados duradouros"]} ctaText="CRESCER INSTAGRAM" ctaUrl="https://app.monetizze.com.br/r/ALZ12471991" category="Marketing" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              O que nossos <span className="bg-gradient-primary bg-clip-text text-zinc-400">clientes</span> dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard name="Maria Silva" location="São Paulo, SP" text="Perdi 12kg em 2 meses com o New Detox! Nunca imaginei que seria tão fácil e natural. Recomendo demais!" />
            
            <TestimonialCard name="Carlos Santos" location="Rio de Janeiro, RJ" text="O Lift Detox Black mudou minha vida! Mais energia, menos peso e muito mais disposição. Excelente produto!" />
            
            <TestimonialCard name="Ana Costa" location="Belo Horizonte, MG" text="Com o Hidraliso meu cabelo ficou liso e hidratado. Economia de tempo e dinheiro no salão!" />

            <TestimonialCard name="Roberto Lima" location="Brasília, DF" text="O Fórmula Negócio Online me deu toda base para empreender online. Hoje tenho minha renda extra!" />

            <TestimonialCard name="Fernanda Oliveira" location="Porto Alegre, RS" text="Nutra Vida realizou meu sonho de ser mãe! Após 3 anos tentando, em 4 meses estava grávida!" />

            <TestimonialCard name="João Pedro" location="Recife, PE" text="Super Green Black não só me ajudou a emagrecer, como melhorou minha concentração no trabalho!" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não perca essa oportunidade única!
            </h2>
            
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Milhares de pessoas já transformaram suas vidas com nossos produtos. 
              Chegou a sua vez de conquistar os resultados que sempre sonhou!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild variant="secondary" size="xl" className="shadow-premium hover:shadow-glow transform hover:scale-105">
                <a href="#produtos">
                  Ver Todos os Produtos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="https://renda-boost.lovable.app" target="_blank" rel="noopener noreferrer">
                  Ganhar R$ 20 Agora
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto opacity-90">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Produtos Testados</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% Seguros</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                <span>Garantia Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © 2024 Boost Benefits. Todos os direitos reservados. 
            Este site contém links de afiliado e podemos receber comissões pelas vendas.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
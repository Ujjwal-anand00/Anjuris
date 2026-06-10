import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, X, Pill, FlaskConical, Syringe, Droplets, Leaf, ChevronRight, Info } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';

// Dummy Product Data
const PRODUCT_DATA = [
  { id: 1, name: 'AnjuCetamol 500', category: 'Tablets', desc: 'Fast-acting paracetamol for fever and pain relief.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600', composition: 'Paracetamol 500mg', packaging: '10x10 Blister Pack' },
  { id: 2, name: 'NeuroVital', category: 'Nutraceuticals', desc: 'Advanced brain health and memory support supplement.', image: 'https://images.unsplash.com/photo-1550572017-ed34293e507b?auto=format&fit=crop&q=80&w=600', composition: 'Ginkgo Biloba Extract 120mg', packaging: 'Bottle of 60' },
  { id: 3, name: 'AnjuCillin', category: 'Capsules', desc: 'Broad-spectrum antibiotic for bacterial infections.', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600', composition: 'Amoxicillin 500mg', packaging: '10x10 Alu-Alu' },
  { id: 4, name: 'CoughSoothe', category: 'Syrups', desc: 'Non-drowsy cough suppressant and expectorant.', image: 'https://images.unsplash.com/photo-1607613009820-a29f4bb19289?auto=format&fit=crop&q=80&w=600', composition: 'Dextromethorphan HBr 15mg', packaging: '100ml Bottle' },
  { id: 5, name: 'VitoBoost B12', category: 'Injections', desc: 'High-dose Vitamin B12 injection for profound energy.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600', composition: 'Cyanocobalamin 1000mcg/ml', packaging: '5x2ml Ampoules' },
  { id: 6, name: 'OsteoFlex', category: 'Tablets', desc: 'Joint support and cartilage repair formula.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600', composition: 'Glucosamine 750mg', packaging: '10x10 Alu-Alu' },
  { id: 7, name: 'ImmuShield', category: 'Nutraceuticals', desc: 'Daily immune system booster with Zinc and Vitamin C.', image: 'https://images.unsplash.com/photo-1550572017-ed34293e507b?auto=format&fit=crop&q=80&w=600', composition: 'Vitamin C 1000mg, Zinc 50mg', packaging: 'Bottle of 30 Effervescent' },
  { id: 8, name: 'GastroCalm', category: 'Syrups', desc: 'Fast, long-lasting relief from acidity and heartburn.', image: 'https://images.unsplash.com/photo-1607613009820-a29f4bb19289?auto=format&fit=crop&q=80&w=600', composition: 'Magaldrate 400mg, Simethicone 20mg', packaging: '200ml Bottle' },
];

const CATEGORIES = ['All', 'Tablets', 'Capsules', 'Syrups', 'Injections', 'Nutraceuticals'];

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Tablets': return <Pill size={18} />;
    case 'Capsules': return <FlaskConical size={18} />;
    case 'Syrups': return <Droplets size={18} />;
    case 'Injections': return <Syringe size={18} />;
    case 'Nutraceuticals': return <Leaf size={18} />;
    default: return null;
  }
};

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCT_DATA[0] | null>(null);
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Dark Hero Section */}
      <Section className="relative bg-[#020617] text-white pt-32 pb-32 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto mt-25 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-primary-50 font-medium text-sm mb-6 shadow-lg mx-auto">
                <Pill size={16} className="text-accent" /> Premium Formulations
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Portfolio</span></h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Discover our comprehensive range of high-quality pharmaceutical and nutraceutical formulations designed to improve global health outcomes.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pb-20 relative -mt-16 z-20">
        <Container>
          {/* Search and Filter Controls */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-3xl p-4 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-4 mb-12">

              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products, compositions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 md:ml-auto">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {category !== 'All' && <CategoryIcon category={category} />}
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Product Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Image Area */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10"></div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur text-primary text-xs font-semibold rounded-full shadow-sm">
                          <CategoryIcon category={product.category} />
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{product.desc}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Details <ChevronRight size={16} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center text-slate-500"
                >
                  <Search size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="text-lg">No products found matching your criteria.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center p-4 sm:p-6 z-[101]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
              >
                {/* Modal Header/Image */}
                <div className="relative h-64 sm:h-72 bg-slate-100 shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-sm mb-3">
                      <CategoryIcon category={selectedProduct.category} />
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">{selectedProduct.name}</h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Info size={16} className="text-primary" /> Description
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {selectedProduct.desc}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Composition</h4>
                        <p className="text-slate-700 font-medium">{selectedProduct.composition}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Packaging</h4>
                        <p className="text-slate-700 font-medium">{selectedProduct.packaging}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => navigate('/contact')}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                      Inquire About Product
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  showCategories?: boolean;
}

const categories = [
  { id: 'servicios', name: '🔧 Servicios', icon: '🔧' },
  { id: 'precios', name: '💸 Precios y Pagos', icon: '💸' },
  { id: 'turnos', name: '📅 Turnos', icon: '📅' },
  { id: 'garantia', name: '🚗 Garantía y Seguridad', icon: '🚗' }
];

export function FAQSection({ items, title = "Preguntas Frecuentes", showCategories = true }: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  // Filter out items that have underscore properties (_question, _answer) or missing required fields
  const validItems = items.filter(item => 
    item.question && 
    item.answer && 
    item.category &&
    !('_question' in item) && 
    !('_answer' in item)
  );

  // Get unique categories from valid items
  const availableCategories = categories.filter(category => 
    validItems.some(item => item.category === category.id)
  );

  const filteredItems = selectedCategory === 'all' 
    ? validItems 
    : validItems.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encuentra respuestas a las dudas más comunes sobre nuestros servicios automotrices.
        </p>
      </div>

      {/* Category Filter */}
      {showCategories && availableCategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === 'all'
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            📋 Todas
          </button>
          {availableCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category.id
                  ? "bg-red-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <span className="font-medium text-gray-900 pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
                  openItems.has(item.id) && "rotate-180"
                )}
              />
            </button>
            {openItems.has(item.id) && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No hay preguntas disponibles en esta categoría.</p>
        </div>
      )}
    </div>
  );
}

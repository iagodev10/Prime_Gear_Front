import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function FilterSidebar({ filters, setFilters }) {
  const [expandedSections, setExpandedSections] = useState({
    categoria: true,
    marca: true,
    preco: false,
    ssd: false,
    avaliacoes: false,
    ram: false,
    sistema: false,
    tela: false,
    processador: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const brands = ["ACER", "ASUS", "APPLE", "DELL", "HP", "LENOVO", "SAMSUNG"];

  const handleBrandToggle = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands?.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...(prev.brands || []), brand]
    }));
  };

  return (
    <div className="sticky top-5 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-h-[calc(100vh-40px)] overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-black-900">Filtros</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Categoria */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('categoria')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Categoria</span>
            {expandedSections.categoria ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
          {expandedSections.categoria && (
            <div className="px-4 pb-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="notebooks" defaultChecked />
                <Label htmlFor="notebooks" className="text-sm cursor-pointer">
                  Notebooks
                </Label>
              </div>
            </div>
          )}
        </div>

        {/* Marca */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('marca')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Marca</span>
            {expandedSections.marca ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
          {expandedSections.marca && (
            <div className="px-4 pb-4 space-y-2">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={filters.brands?.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <Label htmlFor={brand} className="text-sm cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preço */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('preco')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Preço</span>
            {expandedSections.preco ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Capacidade SSD */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('ssd')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Capacidade SSD</span>
            {expandedSections.ssd ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Avaliações */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('avaliacoes')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Avaliações</span>
            {expandedSections.avaliacoes ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Memória RAM */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('ram')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Memória RAM</span>
            {expandedSections.ram ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Sistema Operacional */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('sistema')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Sistema Operacional</span>
            {expandedSections.sistema ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Tamanho da Tela */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('tela')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Tamanho da Tela</span>
            {expandedSections.tela ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Processador */}
        <div>
          <button
            onClick={() => toggleSection('processador')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900">Processador</span>
            {expandedSections.processador ? (
              <Minus className="w-4 h-4 text-gray-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
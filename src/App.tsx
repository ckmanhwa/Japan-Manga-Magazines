import React, { useState } from 'react';
import { MagazineGrid } from './components/MagazineGrid';
import { MagazineDetail } from './components/MagazineDetail';
import { SubmissionGuide } from './components/SubmissionGuide';
import { magazines } from './data/magazines';
import { Magazine } from './types';
import { BookMarked } from 'lucide-react';

export default function App() {
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-32">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookMarked className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900">
              일본 만화잡지 지형도
            </h1>
          </div>
          <div className="text-sm text-zinc-500 font-medium">
            출판사 및 연령/성별 타겟별 분류
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-auto">
        <div className="min-w-[1000px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-800 mb-2">한눈에 보는 만화잡지 매트릭스</h2>
            <p className="text-zinc-600">
              각 출판사별 주력 타겟층을 확인하고 잡지 표지를 클릭하여 상세 정보를 확인하세요.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
            <MagazineGrid 
              magazines={magazines} 
              onSelectMagazine={setSelectedMagazine}
              selectedMagazineId={selectedMagazine?.id || null}
            />
          </div>

          <SubmissionGuide />
        </div>
      </main>

      {/* Detail Drawer */}
      <MagazineDetail 
        magazine={selectedMagazine} 
        onClose={() => setSelectedMagazine(null)} 
      />
      
      {/* Overlay when detail is open */}
      {selectedMagazine && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedMagazine(null)}
        />
      )}
    </div>
  );
}

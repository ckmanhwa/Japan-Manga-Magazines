import React from 'react';
import { motion } from 'motion/react';
import { Magazine, Demographic, Publisher } from '../types';

interface MagazineGridProps {
  magazines: Magazine[];
  onSelectMagazine: (magazine: Magazine) => void;
  selectedMagazineId: string | null;
}

const demographics: { id: Demographic; label: string; gender: string; age: string; colorClass: string; borderColor: string; columnBg: string }[] = [
  { id: 'Shonen', label: '소년 (Shonen)', gender: '남성', age: '10대', colorClass: 'bg-blue-50 text-blue-800', borderColor: 'border-blue-200', columnBg: 'bg-blue-50/40' },
  { id: 'Seinen', label: '청년 (Seinen)', gender: '남성', age: '20대 이상', colorClass: 'bg-emerald-50 text-emerald-800', borderColor: 'border-emerald-200', columnBg: 'bg-emerald-50/40' },
  { id: 'Shojo', label: '소녀 (Shojo)', gender: '여성', age: '10대', colorClass: 'bg-pink-50 text-pink-800', borderColor: 'border-pink-200', columnBg: 'bg-pink-50/40' },
  { id: 'Josei', label: '여성 (Josei)', gender: '여성', age: '20대 이상', colorClass: 'bg-purple-50 text-purple-800', borderColor: 'border-purple-200', columnBg: 'bg-purple-50/40' },
];

const publishers: { id: Publisher; label: string; logoUrl?: string }[] = [
  { id: 'Shueisha', label: '슈에이샤 (집영사)', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Shueisha_logo.svg' },
  { id: 'Kodansha', label: '고단샤 (강담사)', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Kodansha_logo.svg' },
  { id: 'Shogakukan', label: '쇼가쿠칸 (소학관)', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Shogakukan_logo.svg' },
  { id: 'AkitaShoten', label: '아키타 쇼텐', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Akita_Shoten_logo.svg' },
  { id: 'SquareEnix', label: '스퀘어 에닉스', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Square_Enix_logo.svg' },
  { id: 'Kadokawa', label: '카도카와', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Kadokawa_Corporation_logo.svg' },
  { id: 'Hakusensha', label: '하쿠센샤', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Hakusensha_logo.svg' },
];

export const MagazineGrid: React.FC<MagazineGridProps> = ({ magazines, onSelectMagazine, selectedMagazineId }) => {
  return (
    <div className="w-full pb-8">
      <div className="min-w-[1000px]">
        {/* Grid Rows (Publishers) */}
        <div className="flex flex-col">
          {publishers.map((pub) => (
            <div key={pub.id} className="flex min-h-[180px] border-b-2 border-zinc-200 py-6 last:border-b-0">
              {/* Publisher Label */}
              <div className="w-40 shrink-0 flex flex-col items-center justify-center pr-6 border-r-2 border-zinc-200 gap-4">
                {pub.logoUrl && (
                  <img 
                    src={pub.logoUrl} 
                    alt={`${pub.label} logo`} 
                    className="w-24 object-contain opacity-90"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <h3 className="font-bold text-lg text-zinc-700 text-center">{pub.label}</h3>
              </div>

              {/* Right Side: Headers + Magazine Cells */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Repeated Demographics Header */}
                <div className="flex">
                  {demographics.map((demo) => (
                    <div key={demo.id} className="flex-1 px-2 text-center">
                      <div className={`rounded-xl p-2 border-2 ${demo.colorClass} ${demo.borderColor} shadow-sm bg-white`}>
                        <h4 className="font-bold text-sm">{demo.label}</h4>
                        <p className="text-[10px] mt-0.5 opacity-80">{demo.gender} · {demo.age}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Magazine Cells */}
                <div className="flex flex-1">
                  {demographics.map((demo) => {
                    const cellMagazines = magazines.filter(
                      (m) => m.publisher === pub.id && m.demographic === demo.id
                    );

                    return (
                      <div key={`${pub.id}-${demo.id}`} className="flex-1 px-2 flex">
                        <div className={`w-full min-h-full p-3 flex flex-wrap gap-3 items-start justify-center rounded-xl ${demo.columnBg}`}>
                          {cellMagazines.map((mag) => (
                            <motion.button
                              key={mag.id}
                              onClick={() => onSelectMagazine(mag)}
                              whileHover={{ y: -5, scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`relative group w-24 flex flex-col items-center gap-2 transition-all ${
                                selectedMagazineId === mag.id ? 'ring-4 ring-offset-2 ring-indigo-500 rounded-lg' : ''
                              }`}
                            >
                              <div 
                                className="w-full aspect-[2/3] rounded-md shadow-md overflow-hidden bg-zinc-200 relative"
                                style={{ borderTop: `4px solid ${mag.color}` }}
                              >
                                <img 
                                  src={mag.coverUrl} 
                                  alt={`${mag.name} cover`} 
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <span className="text-white text-xs font-bold px-2 text-center drop-shadow-md">
                                    자세히 보기
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-center gap-1 mt-1 w-full">
                                <span className="text-xs font-medium text-zinc-700 text-center leading-tight line-clamp-2">
                                  {mag.name}
                                </span>
                              </div>
                            </motion.button>
                          ))}
                          {cellMagazines.length === 0 && (
                            <div className="w-full h-full flex items-center justify-center opacity-20">
                              <span className="text-sm text-zinc-400">-</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

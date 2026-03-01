import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Calendar, Users, Building2, CalendarDays } from 'lucide-react';
import { Magazine, Publisher } from '../types';

interface MagazineDetailProps {
  magazine: Magazine | null;
  onClose: () => void;
}

const publisherLabels: Record<Publisher, string> = {
  Shueisha: '슈에이샤 (집영사)',
  Kodansha: '고단샤 (강담사)',
  Shogakukan: '쇼가쿠칸 (소학관)',
  AkitaShoten: '아키타 쇼텐',
  SquareEnix: '스퀘어 에닉스',
  Kadokawa: '카도카와',
  Hakusensha: '하쿠센샤',
  Others: '기타 출판사',
};

export const MagazineDetail: React.FC<MagazineDetailProps> = ({ magazine, onClose }) => {
  return (
    <AnimatePresence>
      {magazine && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-zinc-200"
          style={{ borderTop: `4px solid ${magazine.color}` }}
        >
          <div className="max-w-5xl mx-auto p-6 md:p-8 relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-500 hover:text-zinc-800"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column: Cover Image */}
              <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                <div 
                  className="w-full aspect-[2/3] rounded-xl shadow-xl overflow-hidden relative"
                >
                  <img
                    src={magazine.coverUrl}
                    alt={`${magazine.name} cover`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2 shadow-sm"
                      style={{ backgroundColor: magazine.color }}
                    >
                      {magazine.demographic}
                    </span>
                    <h2 className="text-white font-bold text-xl leading-tight drop-shadow-md">
                      {magazine.name}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
                    {magazine.name}
                  </h2>
                </div>
                
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  {magazine.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl">
                    <Building2 className="text-zinc-400" size={20} />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">출판사</p>
                      <p className="font-bold text-zinc-800">{publisherLabels[magazine.publisher]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl">
                    <Users className="text-zinc-400" size={20} />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">타겟 독자</p>
                      <p className="font-bold text-zinc-800">{magazine.targetAge}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl">
                    <CalendarDays className="text-zinc-400" size={20} />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">발행 주기</p>
                      <p className="font-bold text-zinc-800">{magazine.publicationFrequency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl">
                    <Calendar className="text-zinc-400" size={20} />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">창간 연도</p>
                      <p className="font-bold text-zinc-800">{magazine.foundedYear}년</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="text-indigo-500" size={20} />
                    <h3 className="font-bold text-zinc-800 text-lg">대표 연재작</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {magazine.representativeWorks.map((work, index) => (
                      <a 
                        key={index}
                        href={`https://namu.wiki/w/${encodeURIComponent(work)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                      >
                        {work}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Target, Lightbulb, TrendingUp, X, ChevronDown, ChevronUp } from 'lucide-react';

export const SubmissionGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'strategy' | 'cases'>('strategy');

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all text-white"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <BookOpen className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white text-left drop-shadow-sm">실무적 투고 전략 및 데뷔 사례</h2>
        </div>
        {isOpen ? <ChevronUp size={24} className="text-white/80" /> : <ChevronDown size={24} className="text-white/80" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-zinc-200"
          >
            <div className="p-6">
              <div className="flex border-b border-zinc-200 mb-6">
                <button
                  className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                    activeTab === 'strategy' ? 'text-indigo-600' : 'text-zinc-500 hover:text-zinc-700'
                  }`}
                  onClick={() => setActiveTab('strategy')}
                >
                  4가지 실무적 투고 전략 포인트
                  {activeTab === 'strategy' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
                  )}
                </button>
                <button
                  className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                    activeTab === 'cases' ? 'text-indigo-600' : 'text-zinc-500 hover:text-zinc-700'
                  }`}
                  onClick={() => setActiveTab('cases')}
                >
                  신인이 본지 연재까지 도달하는 구체적인 사례와 유형
                  {activeTab === 'cases' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
                  )}
                </button>
              </div>

              <div className="prose prose-zinc max-w-none">
                {activeTab === 'strategy' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1"><Target className="text-indigo-500" size={24} /></div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">1. "연령·성별"보다 "잡지의 정서"를 먼저 본다</h3>
                        <p className="text-zinc-600 leading-relaxed">
                          만화 잡지는 표면적으로 소년, 소녀, 청년 등으로 타깃을 나누지만, 실제로는 각 잡지가 오랜 시간 구축해 온 고유의 '정서'와 '분위기'가 매칭의 가장 중요한 기준이 됩니다.
                        </p>
                        <ul className="mt-3 space-y-2 text-zinc-600 list-disc pl-5">
                          <li><strong>주간 소년 점프 (슈에이샤):</strong> 표면적 타깃은 10대 남성이지만 실제로는 초등학생부터 30대 이상까지 폭넓게 읽는 국민 매체입니다. 철저하게 '우정, 노력, 승리'라는 보편적이고 직선적인 정서를 요구하며, 대중적인 배틀과 스포츠 서사에 압도적인 강점을 보입니다.</li>
                          <li><strong>주간 소년 선데이 (쇼가쿠칸):</strong> 점프와 같은 소년지이지만 정서가 사뭇 다릅니다. '가벼운 톤과 유머, 러브코미디'가 잘 섞인 균형 잡힌 정서를 선호합니다. 일상과 미스터리가 결합하거나, 기승전결이 깔끔한 캐릭터극을 기획한다면 선데이가 적합합니다.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1"><BookOpen className="text-indigo-500" size={24} /></div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">2. 같은 출판사 안에서도 "본지 vs 증간·디지털" 역할 분담</h3>
                        <p className="text-zinc-600 leading-relaxed">
                          출판사들은 리스크를 분산하고 다양한 독자 취향을 포섭하기 위해 본지와 스핀오프(증간/앱)의 역할을 명확히 나누고 있습니다. 내 작품이 대중적인 왕도물인지, 매니아틱한 실험작인지에 따라 투고처를 다르게 설정해야 합니다.
                        </p>
                        <ul className="mt-3 space-y-2 text-zinc-600 list-disc pl-5">
                          <li><strong>슈에이샤 (점프 계열):</strong> 대중적인 작품은 『주간 소년 점프』 본지를 노려야 합니다. 반면, 기존 점프 문법에서 벗어난 장르 혼종물이나 트렌디한 웹툰 형식은 『소년 점프+』가 적합합니다. 다크 판타지나 고딕 성향이 짙은 작품이라면 『점프 SQ』로 포지셔닝하는 것이 유리합니다.</li>
                          <li><strong>코단샤 및 스퀘어 에닉스:</strong> 정석적인 소년물은 『소년 매거진』에 맞지만, 실험적인 구조나 마이너한 취향을 정면으로 파고드는 SF/판타지는 『애프터눈』이 수용합니다. 스퀘어 에닉스 역시 RPG/게임 판타지는 『소년 강강』으로, 좀 더 탐미적이고 BL 뉘앙스가 섞인 다크 판타지는 『G판타지』로 역할을 분담하고 있습니다.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1"><Lightbulb className="text-indigo-500" size={24} /></div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">3. "1화 갈고리(Hook)"의 강도와 방향</h3>
                        <p className="text-zinc-600 leading-relaxed">
                          작품의 호흡과 연출 방식에 따라 유리한 잡지가 다릅니다. 이는 각 잡지의 독자 성향과 편집부의 평가 기준이 다르기 때문입니다.
                        </p>
                        <ul className="mt-3 space-y-2 text-zinc-600 list-disc pl-5">
                          <li><strong>점프·매거진 본지 (즉각적 반응형):</strong> 철저한 독자 앙케이트 중심주의로 인해 1~3화 안에 세계관의 규칙, 주인공의 목표, 캐릭터의 매력이 명확히 제시되어야 합니다. 도입부의 속도감이 매우 중요합니다.</li>
                          <li><strong>선데이·애프터눈·하루타 (서사 축적형):</strong> 즉각적인 자극보다는 설득력 있는 세계관과 정서의 깊이를 앞에 내세우는 것을 용인합니다. 서서히 깊어지는 서사를 구상한다면 이쪽 계열이 유리합니다.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1"><TrendingUp className="text-indigo-500" size={24} /></div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">4. 작가로서의 커리어 플랜</h3>
                        <p className="text-zinc-600 leading-relaxed">
                          투고할 잡지를 고르는 것은 단순한 데뷔를 넘어, '만화가로서 어떤 브랜드와 IP를 구축해 나갈 것인가'를 결정하는 중대한 커리어 플랜입니다.
                        </p>
                        <ul className="mt-3 space-y-2 text-zinc-600 list-disc pl-5">
                          <li><strong>캐릭터 상품·완구·아동 애니메이션 지향:</strong> 『코로코로 코믹스』, 『나카요시』, 『리본』 등은 애니메이션 타이업과 굿즈 전개에 특화되어 있습니다.</li>
                          <li><strong>글로벌 메가 IP 지향:</strong> 『소년 점프』나 『소년 강강』 출신 작가들은 글로벌 팬덤을 형성하기 쉬운 배틀, 판타지, 능력물 IP의 창조자로서 커리어를 쌓습니다.</li>
                          <li><strong>작가주의·문학성 지향:</strong> 『하루타』, 『애프터눈』, 『하나 토 유메』, 『LaLa』 등은 작가의 '장인 정신'과 '독창적 세계관'을 존중합니다.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'cases' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                      <h3 className="text-lg font-bold text-zinc-900 mb-3">1. '점프 GIGA' 및 증간지를 통한 검증 후 본지 진입 (카구라바치 모델)</h3>
                      <p className="text-zinc-600 mb-3">가장 정석적이면서도 최근 가장 큰 성공을 거둔 사례입니다. 본지 연재 전 '실험적 단편'을 통해 독자와 편집부의 눈도장을 찍는 방식입니다.</p>
                      <ul className="space-y-2 text-sm text-zinc-700 list-disc pl-5">
                        <li><strong>트랙:</strong> 대학 시절부터 투고 → 신인상 수상 및 '점프 GIGA' 단편 게재 → 본지 연재 확정.</li>
                        <li><strong>포인트:</strong> 데뷔 전 단편을 보고 "연출 능력이 이미 프로급"이라고 극찬받음.</li>
                        <li><strong>전략:</strong> 소년 점프 본지에 부재했던 '다크 히어로'와 '할리우드식 액션'이라는 빈틈을 공략하기 위해 1화 완성에만 1년 가까이 투자하며 완성도를 극단적으로 끌어올렸습니다.</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                      <h3 className="text-lg font-bold text-zinc-900 mb-3">2. 'Jump+' 디지털 선행 공개 후 본지/인기작 안착 (WITCHRIV 모델)</h3>
                      <p className="text-zinc-600 mb-3">디지털 플랫폼 'Jump+'가 단순히 웹툰 공간을 넘어, 본지 연재를 위한 '인큐베이터'이자 '시장 테스트기'로 작동하는 사례입니다.</p>
                      <ul className="space-y-2 text-sm text-zinc-700 list-disc pl-5">
                        <li><strong>트랙:</strong> Jump+에 단편 게재 → 독자 반응 확인 → 정식 연재 시작.</li>
                        <li><strong>포인트:</strong> '편집부 회의' 결과만으로 결정하는 것이 아니라, 디지털 지표(조회수, SNS 확산도)를 근거로 본지 연재나 대형 연재 여부를 결정하는 비중이 매우 높아졌습니다.</li>
                        <li><strong>전략:</strong> SNS에서 화제가 될 만한 '특색 있는 작화'와 '독특한 마법 설정'을 단편에서 먼저 검증한 뒤 장편화했습니다.</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                      <h3 className="text-lg font-bold text-zinc-900 mb-3">3. '협업형 트랙': 베테랑 스토리텔러 + 신인 작화가 (이치 더 위치 모델)</h3>
                      <p className="text-zinc-600 mb-3">신인 작가가 혼자서 모든 것을 감당하기보다, 검증된 스토리 작가와 협업하여 본지에 직행하는 사례가 늘고 있습니다.</p>
                      <ul className="space-y-2 text-sm text-zinc-700 list-disc pl-5">
                        <li><strong>트랙:</strong> 중견급 작가와 신인급 작화가의 매칭 → 본지 연재.</li>
                        <li><strong>포인트:</strong> 본지 연재의 높은 진입 장벽을 낮추기 위해 '작화력은 뛰어나나 연출/스토리가 약한 신인'을 '베테랑 스토리 작가'와 묶어 데뷔시키는 사례가 늘고 있습니다.</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                      <h3 className="text-lg font-bold text-zinc-900 mb-3">4. '스핀오프 및 세계관 확장' 트랙 (주술회전 Modulo 모델)</h3>
                      <p className="text-zinc-600 mb-3">인기 IP의 세계관을 잇거나 확장하는 단기 연재를 통해 신인을 본지에 데뷔시키는 방식입니다.</p>
                      <ul className="space-y-2 text-sm text-zinc-700 list-disc pl-5">
                        <li><strong>트랙:</strong> 인기작의 스핀오프/속편 담당 → 실력 증명 → 차기 독자 창작물 본지 연재권 획득.</li>
                        <li><strong>포인트:</strong> 신인 작가가 거대 팬덤을 보유한 IP를 안정적인 작화로 소화해내며 '실무적 역량'을 증명한 사례입니다. 실패 확률을 최소화하며 신인에게 본지 무대를 경험하게 하는 효율적 전략입니다.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

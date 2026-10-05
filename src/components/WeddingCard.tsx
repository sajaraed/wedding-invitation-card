import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

import envelopeBg from '../assets/pexels-merve-arli-842967267-38630429.jpg';
import contentBg from '../assets/pexels-hatice-796619215-27939987.jpg';
import ringsImg from '../assets/wedding-rings.png'; 

export const WeddingCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);

  return (
    <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center select-none bg-slate-950 px-[2vw]" style={{ fontFamily: "'Amiri', serif" }}>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={!isOpen ? envelopeBg : contentBg} 
          alt="Background Blur" 
          className="w-full h-full object-cover filter blur-md scale-110 opacity-40 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer relative z-30 w-full max-w-5xl h-[92vh] max-h-[920px] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-12 group border border-[#d4af37]/50"
          >
            <div className="absolute inset-0 z-0">
              <img src={envelopeBg} alt="Envelope BG" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            <div className="absolute inset-6 sm:inset-8 border border-[#d4af37]/70 rounded-2xl pointer-events-none z-10" />

            <div className="relative z-20 space-y-12">
              <span className="text-base sm:text-lg tracking-[0.2em] text-[#f3e5ab] italic font-normal block drop-shadow-md">بطاقة زفاف مباركة</span>
              
              <motion.h1 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="text-8xl sm:text-9xl italic font-normal text-[#f3e5ab] tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
              >
                دعوة زفاف
              </motion.h1>

              <div className="w-28 h-0.5 bg-[#d4af37] mx-auto opacity-90" />

              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c59b27] text-slate-900 rounded-full font-normal text-base sm:text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-white/40 transition-all italic"
              >
                <Sparkles className="w-6 h-6 text-slate-900 animate-spin" style={{ animationDuration: '4s' }} />
                <span>انقر هنا لفتح الدعوة</span>
                <Heart className="w-5 h-5 fill-slate-900/20" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-30 w-full max-w-5xl h-[92vh] max-h-[920px] rounded-3xl overflow-hidden shadow-2xl text-center flex flex-col justify-between p-8 sm:p-14 border border-[#d4af37]/60"
          >
            <div className="absolute inset-0 z-0">
              <img src={contentBg} alt="Content BG" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
            </div>

            <div className="absolute inset-6 sm:inset-8 border border-[#d4af37]/50 rounded-2xl pointer-events-none z-10" />

            <div className="relative z-20 flex flex-col justify-around h-full py-4">
              
              <div className="py-2.5 px-8 rounded-full bg-black/50 backdrop-blur-md border border-[#d4af37]/40 shadow-md inline-block mx-auto">
                <p className="text-xs sm:text-sm text-[#f3e5ab] italic font-normal tracking-wide">
                  "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا"
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl text-white italic font-normal drop-shadow">بسم الله الرحمن الرحيم</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-normal px-4 max-w-xl mx-auto drop-shadow">
                  بأجواء يملؤها الحب، يسرنا دعوتكم لحضور حفل زفافنا المبارك ومشاركتنا أجمل لحظات العمر.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-6 sm:gap-10">
                  <h1 className="text-4xl sm:text-6xl italic font-normal text-white tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                    أحمد
                  </h1>
                  
                  <div className="w-16 h-16 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
                    <img src={ringsImg} alt="Wedding Rings" className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]" />
                  </div>

                  <h1 className="text-4xl sm:text-6xl italic font-normal text-white tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                    مريم 
                  </h1>
                </div>
              </div>

              <div className="bg-black/65 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#d4af37]/40 text-right space-y-3 text-xs sm:text-sm text-slate-100 shadow-xl w-full max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#f3e5ab] shrink-0" />
                  <span className="italic font-normal">الجمعة، 25 أكتوبر 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#f3e5ab] shrink-0" />
                  <span className="italic font-normal">في تمام الساعة الثامنة مساءً</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#f3e5ab] shrink-0" />
                  <span className="italic font-normal">قاعة ليلتي الكبرى - الرياض</span>
                </div>
              </div>

              <div className="max-w-sm mx-auto w-full relative">
                {!rsvpSent ? (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setRsvpSent(true)}
                    className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#b87d71] text-white rounded-xl italic font-normal shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm border border-white/20"
                  >
                    <Heart className="w-4 h-4 fill-white text-rose-500" />
                    تأكيد الحضور (RSVP)
                  </motion.button>
                ) : (
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -30 }}
                      transition={{ duration: 1 }}
                      className="absolute -top-12 inset-x-0 flex justify-center gap-3 pointer-events-none"
                    >
                      <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-bounce" />
                      <Heart className="w-8 h-8 text-rose-600 fill-rose-600 animate-pulse" />
                      <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-bounce" />
                    </motion.div>

                    <div className="py-3 bg-rose-950/90 backdrop-blur-md text-rose-200 border border-rose-500/50 rounded-xl flex items-center justify-center gap-2 italic font-normal text-xs sm:text-sm shadow-lg shadow-rose-900/40">
                      <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                      شكراً لتأكيد حضورك، نسعد بلقائكم!
                    </div>
                  </div>
                )}
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
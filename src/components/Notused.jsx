import React from 'react';
// 1. 13초 분량의 오디오와 JPG 이미지를 상단에서 로드합니다.
import LUFS from "../assets/LUFS.png";
import guide from "../assets/waveform.png";
import manAudio from "../assets/manAudio.wav";
import woamanAudio from "../assets/womanAudio.wav"; 
import masterAudio from "../assets/masterAudio.wav";

function Notused() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white">
      {/* 포트폴리오 메인 카드 */}
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 p-6">
        
        {/* 상단 타이틀 부 */}
        <div className="text-center mb-6">
          <span className="bg-blue-500 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-blue-50">
            Audiobook Portfolio
          </span>
          <h1 className="text-2xl font-bold mt-3 tracking-tight">대화형 오디오북 샘플 (13s)</h1>
          <p className="text-slate-400 text-sm mt-1">프로툴스 마스터링 완료 (-15.8 LUFS)</p>
        </div>

        {/* 오디오북 가상 커버 이미지 (선택 사항) */}
        <div className="aspect-video w-full bg-slate-950 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-slate-800">
          <img src={guide} alt="Cover" className="w-full h-full object-cover opacity-80" />
        </div>

        {/* 2. 핵심 오디오 플레이어 유닛 */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <audio 
            controls 
            src={masterAudio} 
            className="w-full filter invert drop-shadow-md"
            preload="auto" // 면접관이 클릭하자마자 선 로딩되어 바로 재생되도록 설정
          >
            브라우저가 오디오 태그를 지원하지 않습니다.
          </audio>
        </div>

        {/* 하단 기술 스펙 표기 (신뢰감 부여) */}
        <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between text-xs text-slate-400">
          <div>Format: <span className="text-slate-200 font-medium">WAV (24bit)</span></div>
          <div>Target: <span className="text-slate-200 font-medium">-16 LUFS 기준</span></div>
        </div>

      </div>
    </div>
  );
}

export default Notused;

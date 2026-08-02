import React from 'react';
// 1. 13초 분량의 오디오와 JPG 이미지를 상단에서 로드합니다.
import LUFS from "../assets/LUFS.png";
import guide from "../assets/waveform.png";
import manAudio from "../assets/manAudio.wav";
import womanAudio from "../assets/womanAudio.wav"; 
import masterAudio from "../assets/masterAudio.wav";

function WavPlayer() {
  return (
    <div className="w-full bg-slate-800 rounded-xl shadow-2xl overflow-x-auto break-words border border-slate-700 p-6">
        <span className="flex justify-center bg-blue-500 text-xs font-semibold px-2.5 py-2 rounded-full uppercase tracking-wider text-blue-50">오디오 샘플</span>
        <br/><br/>

        <p>(작업 요약)</p>
        <img src={guide} alt="Cover" className="mt-1 w-full h-full object-cover rounded-sm" /> {/*object-cover 는 이미지가 영역을 가득 채우도록 함*/}
        <br/>

        {/* 작업 전 샘플 */}
        <div className="bg-slate-900 p-4 rounded-xl border border-blue-900 bg-gradient-to-b from-slate-900 to-slate-850">
            <div className="flex justify-between items-center mb-2">
            <span className="text-md font-bold text-rose-400 uppercase">Before</span>
            </div>
            <span className="ml-1 text-xs font-bold text-gray-200 uppercase">인물1 (여성 음성)</span>
            <audio controls src={womanAudio} className="w-full filter shadow-lg shadow-blue-500/5 mt-1" preload="auto" />
            <div className="mt-2 flex justify-end text-xs text-slate-400 mb-3">Format: <span className="text-slate-200 font-medium">WAV (24bit 48kHz)</span></div>
            <span className="ml-1 text-xs font-bold text-gray-200 uppercase">인물2 (남성 음성)</span>
            <audio controls src={manAudio} className="w-full filter shadow-lg shadow-blue-500/5 mt-1" preload="auto" />
            <div className="mt-2 flex justify-end text-xs text-slate-400">Format: <span className="text-slate-200 font-medium">WAV (24bit 48kHz)</span></div>   
        </div><br/>

        {/* 작업 후 샘플 */}
        <div className="bg-slate-900 p-4 rounded-xl border border-blue-900 bg-gradient-to-b from-slate-900 to-slate-850">
            <div className="flex justify-between items-center mb-2">
            <span className="text-md font-bold text-blue-400 uppercase">After (마스터링 완료)</span>
            <span className="text-[11px] text-blue-400/70 font-medium">-15.8 LUFS / -1.4 dBTP / 2.2 LU</span>
            </div>
            <div className="flex justify-center mt-2 mb-3"><img src={LUFS} className="w-45" /></div>
            <audio controls src={masterAudio} className="w-full filter shadow-lg shadow-blue-500/5" preload="auto" />
            <div className="mt-2 flex justify-end text-xs text-slate-400">Format: <span className="text-gray-200 font-medium">WAV (24bit 48kHz)</span></div>    
        </div>

    </div>
  );
}

export default WavPlayer;

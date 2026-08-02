
export default function Certficates(){
    const certificates = [
        {
            id: 1,
            title: "Avid Pro tools Specialist (2026.07.30)",
            text: "프로툴스 100레벨 Music & Post 자격증으로, 프로툴스의 기본적인 기능과 오디오 편집 및 믹싱에 대한 이해를 갖추고 있습니다.",
        },
        {
            id: 2,
            title: "Dante Certification Level 1 (Audinate) 수료 (2026.07.20)",
            text: "단테 네트워크 오디오 전송 기술에 대한 이해와 Dante Controller를 활용한 오디오 라우팅 및 설정 능력을 갖추고 있습니다.",
        },
        {
            id: 3,
            title: "컴퓨터활용능력 2급 (2022)",
            text: "MS word, MS Excel을 활용한 문서 작성 능력을 갖추고 있습니다.",
        },
        {
            id: 4,
            title: "MOS master 2010 (2013)",
            text: "MS word, MS Excel, MS Powerpoint, Access를 활용한 문서 작성 능력을 갖추고 있습니다.",
        },
        {
            id: 5,
            title: "ITQ 한글 A (2006)",
            text: "한컴오피스를 활용한 문서 작성 능력을 갖추고 있습니다.",
        },
        {
            id: 6,
            title: "무선설비산업기사 (2014)",
            text: "회로의 구성과 동작을 알고 고장 수리를 위한 계측기 장비를 다룰 수 있습니다. (과목: 디지털전자회로, 무선통신기기, 안테나개론)",
        },
        {
            id: 7,
            title: "자동차운전면허 2종 보통 (2017)",
            text: "자동변속기 자동차를 운전할 수 있습니다.",
        },
    ];
    //const certificates = ['ISTQB CTFL (2018)', '컴퓨터활용능력 2급 (2022)', 'MOS master 2010 (2013)', '무선설비산업기사 (2014)', 'ITQ 한글 A (2006)', '자동차운전면허 2종 보통 (2017)'];

    return(
        <div className="p-5 min-h-screen" id="skill">
            <div className="text-3xl">[자격증 / 수료]</div><br/>
            <div className="overflow-x-auto break-words">
            <table className="min-w-full table-auto border-collapse">
                {/* 테이블 헤더 */}
                <thead className="">
                <tr>
                    <th className="px-4 py-2 border-b text-left">No.</th>
                    <th className="px-4 py-2 border-b text-left">항목</th>
                    <th className="px-4 py-2 border-b text-left">설명</th>
                </tr>
                </thead>

                {/* 테이블 본문 */}
                <tbody>
                {certificates.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-800">
                    <td className="px-4 py-2 border-b">{row.id}</td>
                    <td className="px-4 py-2 border-b">{row.title}</td>
                    <td className="px-4 py-2 border-b">{row.text}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}
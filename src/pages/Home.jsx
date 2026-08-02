import { Link } from "react-router-dom";
//import Experience from "./Experience";
// import Projects from "../components/Projects";
import SkillPage from "./SkillPage";
import Certficates from "./Certficates";

export default function Home(){

    return(
        <div className="p-5">
            <p className="text-gray-200 text-2xl">
            안녕하세요 이수정입니다. <br/>
            <span className="text-orange-400 hover:text-emerald-500">포트폴리오 페이지</span>에 방문해주셔서 감사합니다!</p>
            <br/>
            {/*<div className="h-[600px] border-t-1">
            <div className="p-5 text-4xl h-screen">
                <Link to="/projectPage" className="mb-5">Project</Link><br/><br/>
                <Projects year="2025.09.26.~2025.10.22." title="TempBNB" text="숙박 예약 플랫폼" role="위시리스트 쿼리, 홈화면, 검색창, 검색결과, 위시리스트, 레이아웃 헤더/푸터" tag="React, TailwindCSS4, fetch, Spring Boot, MySQL" link="https://github.com/s4001j/tempBNB" src1="https://tempbnb.onrender.com/hotel/room" src2="https://temp-bnb-seven.vercel.app/" />
                <hr className="m-1 max-w-[410px]"/><Projects year="2025.11.27.~2025.12.04." title="IssueTracking" text="이슈 트랙킹 서비스" role="개인 프로젝트로 전부" tag="React, TailwindCSS4, axios, tanstack Query, Express, MySQL" link="https://github.com/s4001j/issuetracking" src1="https://issuetracking.onrender.com/issuelist" src2="https://issuetracking.vercel.app/" />
                </div>
            </div>
            <div className="h-100vh border-t-1">
            <SkillPage/></div><br/><br/>
            <div className="h-100vh border-t-1">
            <Experience/></div>*/}
            <div className="h-100vh border-t-1"><SkillPage/></div><br/>
            <div className="h-100vh border-t-1"><Certficates/></div>
        </div>
    );
}
//components
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h2 className="font-bold">History</h2>
      <section>
        <ul className="flex">
          <li className="border-2 rounded-xl flex-grow ml-3 mr-3 p-5">
            <h3 className="font-bold pt-3 pb-3">CAL 株式会社 🇯🇵</h3>
            <ul className="list-disc pl-3">
              <li>2020/01 ~ 2021/01</li>
              <li>Java 기반 금융계 코어 시스템 개발 및 유지보수</li>
              <li>React.js 기반 금융계 어드민 사이트 개발</li>
            </ul>
          </li>
          <li className="border-2 rounded-xl flex-grow ml-3 mr-3 p-5">
            <h3 className="font-bold pt-3 pb-3">CAL 株式会社 🇯🇵</h3>
            <ul className="list-disc pl-3">
              <li>2021/02 ~ 현재</li>
              <li>React.js기반 ERP 플랫폼 서비스 개발</li>
              <li>Vue.js기반 싱가폴 국가사업 웹뷰 개발</li>
            </ul>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

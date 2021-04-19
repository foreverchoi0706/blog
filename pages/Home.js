import Image from "next/image";
//components
import Layout from "../components/Layout";

const careers = [
  {
    company: "CAL 株式会社",
    term: "2020/01 ~ 2021/01",
    descriptions: [
      "Java 기반 금융계 코어 시스템 개발 및 유지보수",
      "React.js 기반 금융계 어드민 사이트 개발",
    ],
    position: "인턴",
  },
  {
    company: "Fatos Co.,Ltd ",
    term: "2021/02 ~",
    descriptions: [
      "React.js기반 ERP 플랫폼 서비스 개발",
      "Vue.js기반 싱가폴 국가사업 웹뷰 개발",
    ],
    position: "주임연구원",
  },
];

const stacks = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "vue",
  "express",
  "node-js",
  "docker",
  "jenkins",
  "sass",
  "tailwindcss",
  "postgresql",
];

const Wh96Image = ({ src }) => {
  return <Image src={src} width={96} height={96} />;
};

export default function Home() {
  return (
    <Layout>
      <section className="pl-1 pr-1 md:pl-3 md:pr-3 lg:pl-5 lg:pr-5">
        <h2 id="Intro" className="font-bold text-2xl mt-10 mb-10">
          Intro
        </h2>
        <Image
          alt="me"
          src="/images/me.jpg"
          layout="responsive"
          width={5}
          height={3}
        />
      </section>

      <section className="pl-1 pr-1 md:pl-3 md:pr-3 lg:pl-5 lg:pr-5">
        <h2 id="History" className="font-bold text-2xl mt-10 mb-10">
          History
        </h2>
        <ul className="list-none p-0 flex flex-col lg:flex-row ">
          {careers.map((career, index) => (
            <li
              key={career.company}
              className="border-2 border-solid border-gray-500 rounded-xl flex-grow mb-5 ml-3 mr-3 p-3 md:p-5"
            >
              <h3 className="flex justify-between font-bold m-3">
                <strong className="text-sm sm:text-base md:text-lg lg:text-xl">
                  {career.company}
                </strong>
                <strong className="text-sm sm:text-base md:text-lg lg:text-xl">
                  {career.term}
                </strong>
              </h3>
              <ul className="list-disc p-5 sm:p-7 md:p-9">
                {career.descriptions.map((description) => (
                  <li className="text-sm mt-5 mb-5 sm:text-base" key={index}>
                    {description}
                  </li>
                ))}
              </ul>
              <strong>{career.position}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="pl-1 pr-1 md:pl-3 md:pr-3 lg:pl-5 lg:pr-5">
        <h2 id="Stack" className="font-bold text-2xl mt-10 mb-10">
          Stack
        </h2>
        <ul className="list-none p-0 grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {stacks.map((stack, index) => (
            <li key={index}>
              <Wh96Image src={`/images/${stack}.png`} />
            </li>
          ))}
        </ul>
      </section>

      <section className="p-5">
        <h2 id="Portfolio" className="font-bold text-2xl mt-10 mb-10">
          Portfolio
        </h2>
        <ul className="list-none p-0 grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {stacks.map((stack, index) => (
            <li key={index}>
              <Wh96Image src={`/images/${stack}.png`} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

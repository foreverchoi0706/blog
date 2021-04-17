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
  },
  {
    company: "Fatos Co.,Ltd ",
    term: "2021/02 ~",
    descriptions: [
      "React.js기반 ERP 플랫폼 서비스 개발",
      "Vue.js기반 싱가폴 국가사업 웹뷰 개발",
    ],
  },
];

const stacks = [];

export default function Home() {
  return (
    <Layout>
      <section className="p-5">
        <h2 className="font-bold text-2xl m-3">Intro</h2>
        <Image
          className="w-full"
          src="/images/me.jpg"
          width={"auto"}
          height={"auto"}
        />
      </section>

      <hr />

      <section className="p-5">
        <h2 className="font-bold text-2xl m-3">History</h2>
        <ul className="flex">
          {careers.map((career) => (
            <li className="border-2 rounded-xl flex-grow ml-3 mr-3 p-5">
              <h3 className="flex justify-between font-bold">
                <strong>{career.company}</strong>
                <strong>{career.term}</strong>
              </h3>
              <ul className="list-disc p-3">
                {career.descriptions.map((description) => (
                  <li>{description}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section className="p-5">
        <h2 className="font-bold text-2xl m-3">Stack</h2>
        <ul className="grid justify-items-center gap-5 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
          <li>
            <Image src="/images/html.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/css.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/javascript.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/typescript.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/react.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/vue.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/express.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/docker.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/jenkins.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/sass.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/tailwindcss.png" width={96} height={96} />
          </li>
          <li>
            <Image src="/images/node-js.png" width={96} height={96} />
          </li>
        </ul>
      </section>

      <hr />


      <hr />
    </Layout>
  );
}

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 [&>section]:border-t [&>section]:py-8">
      <Hero />

      <Section title="Supervisor">
        <p>
          Professor:{" "}
          <Link
            href="https://www.lamda.nju.edu.cn/jiangy/"
            target="_blank"
          >
            Yuan Jiang
          </Link>
        </p>
      </Section>

      <Section title="Biography">
        <ul className="list-disc pl-4">
          <li>
            Currently a Ph.D. student at{" "}
            <Link
              href="https://ai.nju.edu.cn/"
              target="_blank"
            >
              Department of Artificial Intelligence
            </Link>
            in{" "}
            <Link
              href="https://www.nju.edu.cn/"
              target="_blank"
            >
              Nanjing University
            </Link>
            and a member of{" "}
            <Link
              href="https://www.lamda.nju.edu.cn/"
              target="_blank"
            >
              LAMDA Group
            </Link>
            , led by Professor{" "}
            <Link
              href="https://cs.nju.edu.cn/zhouzh/"
              target="_blank"
            >
              Zhi-Hua Zhou
            </Link>
            .
          </li>
          <li>
            I got my B.S. degree in <b>Statistics</b> from{" "}
            <Link
              href="http://maths.hust.edu.cn/"
              target="_blank"
            >
              School of Mathematics and Statistics
            </Link>
            ,{" "}
            <Link
              href="https://www.hust.edu.cn/"
              target="_blank"
            >
              Huazhong University of Science and Technology
            </Link>
            , China in June 2020.
          </li>
        </ul>
      </Section>

      <Section title="Research Interests">
        My research interests include:
        <ul className="list-inside list-disc">
          <li>Machine Learning Theory</li>
          <li>Decision Tree Learning and Theory</li>
          <li>Statistical Learning Theory</li>
        </ul>
      </Section>

      <Section title="Publications">
        <ul className="list-disc pl-4 font-serif">
          <li>
            <p>
              <b>
                On the Consistency Rate of Decision Tree Learning Algorithms
              </b>
              . <br />
              <b>Qin-Cheng Zheng</b>, Shen-Huan Lyu, Shao-Qun Zhang, Yuan Jiang,
              and Zhi-Hua Zhou.
              <br />
              In: Proceedings of the 26th International Conference on Artificial
              Intelligence and Statistics <b>(AISTATS&rsquo;23)</b> , Valencia,
              Spain, 2023. Page: 7824-7848.
            </p>
          </li>
        </ul>
      </Section>

      <Section title="Correspondence">
        <p>
          <b>Email:</b>
          <br />
          zhengqc [at] lamda [dot] nju [dot] edu [dot] cn
        </p>
        <p>
          <b>Laboratory:</b>
          <br />
          Room 912, Computer Science Building, Xianlin Campus of Nanjing
          University
          <br />
          <b>Address:</b>
          <br />
          Qin-Cheng Zheng <br />
          National Key Laboratory for Novel Software Technology,
          <br />
          Nanjing University, Xianlin Campus,
          <br />
          163 Xianlin Avenue, Qixia District,
          <br />
          Nanjing 210023, China
        </p>
        <p className="mt-2">
          (江苏省南京市栖霞区仙林大道163号, 南京大学仙林校区,
          软件新技术国家重点实验室, 210023)
        </p>
      </Section>
    </main>
  );
}

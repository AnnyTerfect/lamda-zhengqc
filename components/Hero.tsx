import React from "react";
import { Card, CardBody, Image, Link } from "@nextui-org/react";
import resolvePath from "@/utils/resolvePath";

export default function Hero() {
  return (
    <Card
      className="mt-4 bg-background/60 dark:bg-default-100/50"
      shadow="none"
      radius="none"
    >
      <CardBody>
        <div className="grid grid-cols-6 justify-center gap-6 md:grid-cols-16 md:gap-4">
          <div className="relative col-span-6 md:col-span-3">
            <Image
              alt="Name"
              className="object-cover"
              src="./zqc.jpg"
            />
          </div>

          <div className="col-span-6 flex flex-col md:col-span-10">
            <div className="flex flex-1 flex-col justify-between gap-0 [&>p]:mt-4">
              <h1 className="text-3xl font-bold">Qin-Cheng Zheng</h1>

              <p>
                Ph.D. Student,{" "}
                <Link
                  href="https://www.lamda.nju.edu.cn/"
                  target="_blank"
                >
                  LAMDA Grouop
                </Link>
                <br />
                <Link
                  href="https://ai.nju.edu.cn/"
                  target="_blank"
                >
                  Department of Artificial Intelligence
                </Link>
                <br />
                <Link
                  href="https://keysoftlab.nju.edu.cn/"
                  target="_blank"
                >
                  National Key Laboratory for Novel Software Technology
                </Link>
              </p>

              <p>
                Supervisor:{" "}
                <Link
                  href="https://www.lamda.nju.edu.cn/jiangy/"
                  target="_blank"
                >
                  Yuan Jiang
                </Link>
              </p>

              <p>
                Email: zhengqc [at] lamda [dot] nju [dot] edu [dot] cn
                <br />
                Laboratory: Computer Science Building, Xianlin Campus of Nanjing
                University
              </p>
            </div>
          </div>

          <div className="relative col-span-6 flex flex-col items-center justify-between md:col-span-3">
            <Image
              alt="Name"
              src="./lamda.jpg"
              width="100%"
              radius="sm"
            />
            <Image
              alt="Name"
              className="mx-auto text-center"
              src="./nju.jpg"
              width="80%"
              radius="sm"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

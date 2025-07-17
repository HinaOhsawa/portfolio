import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import skills from "@/data/skills.json";
import { Card } from "./ui/card";
export default function Profile() {
  return (
    <section id="profile" className="py-16 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Profile
        <p className="text-sm font-normal">自己紹介</p>
      </h2>
      <Card className="rounded-sm p-6 m-auto  max-w-xl gap-0">
        {/* <div className=" justify-between items-center gap-4"> */}
        <div className="flex flex-col items-center">
          <Avatar className="mx-auto w-24 h-24">
            <AvatarImage src="images/profile_icon.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm mt-2 text-center">オオサワ ヒナ</p>
        </div>

        <p className="mt-4 text-muted-foreground">
          前職ではPHPとMySQLを使ったバックエンド業務や、LPのサイトコーディングをしていました。
          ReactやTypeScriptなどのモダンなフロントエンド開発をしたく、転職を決断しました。
          3Dやアニメーションにも興味があります。
        </p>

        <hr className="mt-4" />
        <div className="sm:flex text-muted-foreground mt-4">
          <p className="w-1/4 whitespace-nowrap">2021年 6ヶ月間</p>
          <p className="">職業訓練校にてWeb制作、デザインを学ぶ</p>
        </div>

        <div className="sm:flex text-muted-foreground mt-4">
          <p className="w-1/4 whitespace-nowrap">2022年~2024年</p>
          <p className="">Web制作会社にて3年間勤務</p>
        </div>

        <div className="sm:flex text-muted-foreground mt-4">
          <p className="w-1/4 whitespace-nowrap">2025年3月</p>
          <p className="">基本情報技術者試験を取得</p>
        </div>
      </Card>

      <h3 className="text-xl mt-12 font-bold text-center">経験とスキル</h3>
      <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className=" rounded-sm md:aspect-[1.6/1] w-full flex px-4 gap-1"
          >
            <h4 className="mt-2 font-bold">{skill.skill}</h4>
            <p className="my-2 text-muted-foreground text-sm">
              {skill.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

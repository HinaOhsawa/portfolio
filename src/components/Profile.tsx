import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import skills from "@/data/skills.json";
import { Card, CardContent } from "./ui/card";
export default function Profile() {
  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Profile
        <p className="text-sm font-normal">自己紹介</p>
      </h2>
      <Card className="p-6 m-auto aspect-[1.6/1] max-w-xl">
        <div className="flex justify-between items-center gap-4">
          <Avatar className="mx-auto mb-8 w-24 h-24">
            <AvatarImage src="images/hiyoko.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="max-w-2/3">
            <h3 className="font-bold mb-2">オオサワ ヒナ</h3>
            <p className="text-muted-foreground mb-4">
              フロントエンドエンジニア
              <br />
              3Dモデリング
            </p>
            <p className="text-muted-foreground mb-4">
              2023年にフロントエンドエンジニアとして転職しました。
              <br />
              3Dモデリングやアニメーションにも興味があります。
            </p>
          </div>
        </div>
        <p>
          前職ではPHPとMySQLを使ったバックエンド業務や、LPのサイトコーディングをしていました。
          ReactやVueなどのモダンなフロントエンド開発をしたく、転職を決断しました。
        </p>
      </Card>

      <h3 className="mt-12 font-bold text-center">経験とスキル</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="mt-6 rounded-sm aspect-[1.6/1] w-full flex p-2"
          >
            <CardContent className="">
              <h4 className="mt-2 font-bold">{skill.skill}</h4>
              <p className="my-2 text-muted-foreground text-sm">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="mb-6 mt-8 font-bold text-center">興味のあること</h3>
      <p>箇条書き</p>
    </section>
  );
}

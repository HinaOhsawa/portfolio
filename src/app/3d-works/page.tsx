import Header from "@/components/Header";
import VideoSlider from "@/components/VideoSlider";
import Image from "next/image";

export default function HomePage() {
  const blenderImages = [
    "/images/blender_1.jpg",
    "/images/blender_2.jpg",
    "/images/blender_3.jpg",
    "/images/blender_4.jpg",
    "/images/blender_5.jpg",
    "/images/blender_6.jpg",
    "/images/blender_7.jpg",
    "/images/blender_8.jpg",
    "/images/blender_9.jpg",
    "/images/blender_10.jpg",
    "/images/blender_11.jpg",
    "/images/blender_12.jpg",
  ];
  const voxelImages = [
    "/images/voxel_1.jpg",
    "/images/voxel_2.jpg",
    "/images/voxel_3.jpg",
    "/images/voxel_4.jpg",
    "/images/voxel_5.jpg",
  ];

  return (
    <>
      <Header />
      <div className="mt-8 mx-auto max-w-5xl py-8 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          3D Works
          <p className="text-sm font-normal">3Dの制作物</p>
        </h2>

        {/* Blender作品 */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
          <div className="p-4 border flex-col relative aspect-square bg-gray-100 rounded flex items-center justify-center">
            <h3 className="font-bold text-xl xl:text-2xl">Blender</h3>
            <p className="text-sm mt-2 text-gray-500">
              オープンソースの統合型3DCG製作ソフト、Blenderで作成した3D作品です。
            </p>
          </div>

          {blenderImages.map((src, index) => (
            <div className="relative  aspect-square " key={index}>
              <Image src={src} alt="" fill className="object-cover rounded" />
            </div>
          ))}
        </div>

        {/* アニメーション */}
        <div className="mt-12 border bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl xl:text-3xl font-bold ">Animation</h3>

          <p className="mt-2 w-full  mx-auto">
            Blenderで作成したアニメーションです。
            キーフレームを打ってアニメーションを自作する方法と、モーションキャプチャのデータ（bvh形式）をモデルに適用してアニメーションを作成する方法があります。
          </p>
          <p className="mt-2 font-bold">モーションキャプチャについて</p>
          <p>
            OptiTrackのモーションキャプチャーシステムを使用し、
            マーカーのついたスーツを着て、専用カメラでを撮影します。
            その後、キャプチャーしたデータをBlenderに取り込み、キャラクターのボーンに割り当てることでアニメーションを作成することができます。
          </p>
        </div>

        {/* 動画スライダー */}
        <VideoSlider />

        {/* ボクセル作品 */}
        <div className="mt-20 grid gap-4 grid-cols-2 sm:grid-cols-3">
          <div className="p-4 border flex-col relative aspect-square bg-gray-100 rounded flex items-center justify-center">
            <h3 className="font-bold text-xl xl:text-2xl">MagicaVoxel</h3>
            <p className="text-sm mt-2 text-gray-500">
              ブロック積みの要領で積み重ねることで3Dモデルを制作できる、フリーのボクセル作成ソフトで制作した作品です。
            </p>
          </div>

          {voxelImages.map((src, index) => (
            <div className="relative  aspect-square " key={index}>
              <Image src={src} alt="" fill className="object-cover rounded" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요
          <br className="hidden lg:inline-block" />
          이서림 입니다
        </h1>
        <p className="mb-8 leading-relaxed">
          군영과 이상을 행복스럽고 곳으로 용감하고 끓는다. 속에 노래하며 아니한
          인생의 꽃 봄바람이다. 풀이 같으며, 열매를 가슴이 그러므로 굳세게
          거선의 싸인 피고 위하여서. 가는 위하여서, 설레는 돋고, 트고, 실현에
          것이다. 천하를 위하여 생생하며, 장식하는 용감하고 시들어 살았으며,
          듣는다. 있는 꽃 고행을 그림자는 위하여서 뼈 그들은 뿐이다. 낙원을
          그들의 있는 쓸쓸하랴? 뭇 그들의 주며, 풀이 구하지 놀이 피가 이것이다.
          굳세게 밝은 청춘이 불어 풀이 넣는 어디 피어나는 이상, 있으랴? 눈이
          온갖 얼마나 그리하였는가? 풍부하게 이상의 얼마나 얼음이 품에 타오르고
          피는 피가 이것이다.
        </p>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </div>
    </>
  );
}

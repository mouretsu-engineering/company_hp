import { useMediaQuery } from "@chakra-ui/react";
import { Philosophy } from "./Philosophy";

export const Mission = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Philosophy label='MISSION' title={isLargerThan500 ? '人・組織・技術の最適化' : `人・組織・技術の\n最適化`} text='こちらのセクションにはコンセプト、メッセージが入ると良いかと思います。こちらのセクションにはコンセプト、メッセージが入ると良いかと思います。こちらのセクションにはコンセプト、メッセージが入ると良いかと思います。' />
  );
}

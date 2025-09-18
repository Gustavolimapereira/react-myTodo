import Icon from "../components/icon";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";

export default function PageComponents() {
  return (
    <>
      <Text variant="body-sm-bold" className="text-pink-base">
        Olá Mundo
      </Text>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
      </div>
    </>
  );
}

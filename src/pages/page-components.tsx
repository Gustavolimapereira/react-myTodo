import Icon from "../components/icon";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";
import Badge from "../components/badge";
import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import ButtonIcon from "../components/button-icon";

export default function PageComponents() {
  return (
    <>
      <Text variant="body-sm-bold" className="text-pink-base">
        Olá Mundo
      </Text>
      <Text variant="body-sm-bold" className="text-green-base">
        Olá Mundo
      </Text>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={Pencil} className="fill-pink-base" />
      </div>

      <div className="flex gap-1">
        <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading></Badge>
      </div>

      <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
          <Button icon={PlusIcon} handling>
            Criando...
          </Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} disabled />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>
    </>
  );
}

import Icon from "../components/icon";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";
import Badge from "../components/badge";
import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import Container from "../components/container";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Skeleton from "../components/skeleton";

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text className="text-green-base">Olá mundo!</Text>
          <Text variant="body-md-bold">Olá mundo!</Text>
          <Text>Levar o dog pra passear</Text>
        </div>

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

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}

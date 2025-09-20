// Importando a função cva e o tipo VariantProps da biblioteca class-variance-authority (CVA)
// - cva: serve para criar estilos com variantes de forma reutilizável
// - VariantProps: gera automaticamente os tipos das variantes para usar no TypeScript
import { cva, type VariantProps } from "class-variance-authority";

// Importando React para criar o componente
import React from "react";

// Definindo as variantes para o Container usando cva
// - "mx-auto" centraliza horizontalmente o conteúdo
export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      // Variante "md" define largura máxima e padding lateral
      md: "max-w-[31.5rem] px-2",
    },
  },
  // Variante padrão quando nenhuma é passada
  defaultVariants: {
    size: "md",
  },
});

// Interface das props do componente Container
// - Estende os VariantProps do containerVariants (gera tipagem para "size")
// - Estende também todas as props que um <div> aceita
// - Adiciona a prop opcional "as" para permitir trocar a tag usada (ex: section, main, article, etc.)
interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

// Componente funcional Container
export default function Container({
  as = "div",   // Por padrão renderiza como <div>
  className,    // Permite passar classes extras
  children,     // Conteúdo dentro do container
  ...props      // Outras props nativas do elemento (id, style, etc.)
}: ContainerProps) {
  return React.createElement(
    as, // Cria dinamicamente o elemento (div, section, main, etc.)
    {
      // Aplica as classes do container (por padrão size = md)
      // OBS: aqui está passando className direto dentro do cva, mas não é o uso padrão do CVA.
      // O comum seria usar cx() para combinar (igual no InputText).
      className: containerVariants({ size: "md", className }),
      ...props, // Repassa todas as props para o elemento
    },
    children // Renderiza os elementos filhos
  );
}

// Importando funções e tipos da biblioteca class-variance-authority (CVA)
// - cva: cria variações de classes (útil para componentes reutilizáveis e estilos condicionais).
// - cx: combina várias classes em uma string final.
// - VariantProps: extrai os tipos de variantes criadas pelo cva, para tipagem no TypeScript.
import { cva, cx, type VariantProps } from "class-variance-authority";

// Importa as variantes de texto já definidas em outro arquivo.
import { textVariants } from "./text";

// Aqui definimos as variantes do componente InputText usando a função cva.
// Ela recebe classes base e depois define opções de variação (variants).
export const inputTextVariants = cva(
  `
    border-b border-solid border-gray-200 focus:border-pink-base
    bg-transparent outline-none
  `,
  {
    // Variantes que o input pode receber
    variants: {
      // Variante "size" para controlar o espaçamento interno
      size: {
        md: "pb-2 px-2", // padding inferior e lateral
      },
      // Variante "disabled" para desabilitar o campo
      disabled: {
        true: "pointer-events-none", // não permite interação
      },
    },
    // Valores padrão das variantes
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

// Interface de propriedades do componente InputText
// - Estende os VariantProps do inputTextVariants (tipagem automática para size e disabled).
// - Estende também as propriedades nativas de um <input>, mas remove "size" e "disabled"
//   (para evitar conflito com as variantes personalizadas).
interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

// Componente funcional InputText
export default function InputText({
  size,      // variante de tamanho
  disabled,  // variante de desabilitado
  className, // permite passar classes adicionais
  ...props   // todas as outras props padrão de <input>
}: InputTextProps) {
  return (
    <input
      // Define as classes finais do input combinando:
      // - inputTextVariants com as variantes escolhidas
      // - textVariants para aplicar estilos de texto
      // - className para possíveis classes extras vindas de fora
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props} // repassa todas as props extras para o <input>
    />
  );
}

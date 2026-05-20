export type TypographyProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
    as?: React.ElementType;
    children: React.ReactNode;
}

const Typography = ({ variant, as, children }: TypographyProps) => {

  const Component = as || variant || 'p';

  return (
    <Component>{children}</Component>
  )
}

export default Typography
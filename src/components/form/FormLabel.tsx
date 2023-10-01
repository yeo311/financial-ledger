interface Props {
  htmlFor?: string;
  name: string;
}

export default function FormLabel({ htmlFor, name }: Props) {
  return <label htmlFor={htmlFor}>{name}</label>;
}

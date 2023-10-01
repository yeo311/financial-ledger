interface Props {
  title: string;
}

export default function AppbarTitle({ title }: Props) {
  return (
    <div className="flex justify-center">
      <h1 className="text-xl">{title}</h1>
    </div>
  );
}

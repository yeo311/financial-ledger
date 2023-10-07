import UpdateForm from '@/components/UpdateForm';

interface Props {
  params: {
    id: string;
  };
}

export default async function UpdatePage({ params: { id } }: Props) {
  return <UpdateForm id={id} />;
}

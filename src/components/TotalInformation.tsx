interface InformationProps {
  title: string;
  amount: number;
}
function Information({ title, amount }: InformationProps) {
  return (
    <div className="flex items-center">
      <span className="text-sm text-gray-300">{title}</span>
      <span className="ml-1.5 font-bold">{amount.toLocaleString()}원</span>
    </div>
  );
}

export default function TotalInformation() {
  return (
    <div>
      <Information title="지출" amount={4845659} />
      <Information title="수입" amount={5177835} />
    </div>
  );
}

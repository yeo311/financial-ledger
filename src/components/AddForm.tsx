import { FormEventHandler } from 'react';

interface Props {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function AddForm({ onSubmit }: Props) {
  return (
    <form className="flex flex-col p-3 text-lg" onSubmit={onSubmit}>
      <div className="flex justify-between text-2xl mb-4">
        <label htmlFor="amount">금액</label>
        <input
          className="focus:outline-none flex-auto text-right px-1"
          type="number"
          name="amount"
          id="amount"
          placeholder="0"
        />{' '}
        원
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="isIncome">분류</label>
        <span className="flex gap-x-1">
          <input
            className="hidden peer/income"
            type="radio"
            id="income"
            name="isIncome"
            value="true"
          />
          <label
            className="cursor-pointer flex justify-center items-center peer-checked/income:bg-slate-100 peer-checked/income:text-blue-500"
            htmlFor="income"
          >
            수입
          </label>
          <input
            className="hidden peer/expenditure"
            type="radio"
            id="expenditure"
            name="isIncome"
            value="false"
            defaultChecked
          />
          <label
            className="cursor-pointer flex justify-center items-center peer-checked/expenditure:bg-slate-100 peer-checked/expenditure:text-blue-500"
            htmlFor="expenditure"
          >
            지출
          </label>
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="category">카테고리</label>
        <select name="category" id="category" className="focus:outline-none">
          <option value="1">식비</option>
          <option value="2">교통비</option>
        </select>
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          className="focus:outline-none flex-auto text-right"
        />
      </div>
      <div className="flex justify-between mb-2">
        <label htmlFor="day">날짜</label>
        <input type="date" name="day" id="day" className="focus:outline-none" />
      </div>
      <button
        type="submit"
        className="bg-gray-300 p-3 rounded active:bg-gray-400"
      >
        저장
      </button>
    </form>
  );
}

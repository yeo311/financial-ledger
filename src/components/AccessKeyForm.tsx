'use client';

import { useState } from 'react';
import FormContainer from './form/FormContainer';
import FormLabel from './form/FormLabel';
import FormRow from './form/FormRow';
import InputText from './form/InputText';
import { setCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';

export default function AccessKeyForm() {
  const [accessKey, setAccessKey] = useState('');
  const router = useRouter();
  const handleChange = (v: string) => {
    setAccessKey(v);
  };

  const handleSubmit = () => {
    setCookie('accessKey', accessKey, 365);
    router.push('/');
  };

  return (
    <>
      <FormContainer>
        <FormRow>
          <FormLabel name="엑세스키" />
          <InputText
            placeholder="엑세스키를 입력하세요"
            value={accessKey}
            onChange={handleChange}
          />
        </FormRow>
      </FormContainer>
      <div className="h-16 fixed bottom-0 left-0 right-0 p-2">
        <button
          type="button"
          className="bg-green-500 text-black p-3 rounded h-full w-full active:bg-green-600 disabled:text-white disabled:bg-gray-300"
          disabled={accessKey === ''}
          onClick={handleSubmit}
        >
          확인
        </button>
      </div>
    </>
  );
}

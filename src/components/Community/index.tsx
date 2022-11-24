import { ChangeEvent, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { cloudRef } from '../../firebase';
import { Input } from '../Input';

export const Community = () => {
  const [value, setValue] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = async () => {
    try {
      if (!value) return undefined;
      await addDoc(cloudRef, {
        word: value,
        timestamp: Date.now(),
      });
      setValue('');
      // Modal 만들어서 띄우기
      return undefined;
    } catch (err) {
      return (err as Error).message;
    }
  };

  return (
    <div className="flex flex-col">
      <span className="label-text text-lg my-2 mx-2">여러분이 생각하는 커뮤니티란 무엇인가요?</span>
      <Input
        label="community_value"
        onChange={onChange}
        value={value}
        placeholder="커뮤니티란?"
      />
      <button
        type="button"
        className="btn rounded-lg mt-6"
        onClick={onSubmit}
      >
        <span className="text-white">
          전송
        </span>
      </button>
    </div>
  );
};

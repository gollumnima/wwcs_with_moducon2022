import { ChangeEvent, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { docRef } from '../../firebase';

export const Community = () => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = async () => {
    try {
      if (!value) return undefined;
      await addDoc(docRef, {
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
      <label className="label" htmlFor="community_value">
        <input
          type="text"
          id="community_value"
          className="input input-bordered input-secondery w-full"
          onChange={onChange}
          value={value}
          placeholder="커뮤니티란?"
        />
      </label>
      <button
        type="button"
        className="btn btn-neutral mt-6"
        onClick={onSubmit}
      >
        <span className="text-white">
          전송
        </span>
      </button>
    </div>
  );
};

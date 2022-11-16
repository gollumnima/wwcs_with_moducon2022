import { ChangeEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '~/firebase';
// TODO: 경로문제 해결하고, DB에 값 제대로 들어오나 확인하기

export const Community = () => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const moduconDB = process.env.REACT_APP_FIRESTORE_DB_NAME ?? '';
      await addDoc(collection(db, moduconDB), {
        word: value,
      });
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
        className="btn btn-primary mt-6"
        onClick={onSubmit}
      >
        <span className="text-white">
          전송
        </span>
      </button>
    </div>
  );
};

import { ChangeEvent, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { cloudRef } from '../../firebase';
import { Input } from '../Input';
import { Modal } from '../Modal';

export const Community = () => {
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = async () => {
    if (!value) {
      setIsOpen(true);
      setMessage('입력칸을 채워주세요~ 🥹');
      return undefined;
    }
    try {
      await addDoc(cloudRef, {
        word: value,
        timestamp: Date.now(),
      });
      setValue('');
      setIsOpen(true);
      setMessage('전송 완료! 결과를 구름에서 확인해보세요!');
      return undefined;
    } catch (err) {
      return (err as Error).message;
    }
  };

  return (
    <>
      {isOpen && (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {message}
      </Modal>
      )}
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
          className="btn rounded-lg mt-6 btn-primary"
          onClick={onSubmit}
        >
          <span className="text-white">
            전송
          </span>
        </button>
      </div>
    </>
  );
};

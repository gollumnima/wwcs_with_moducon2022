/* eslint-disable no-undef */
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, getDocs } from 'firebase/firestore';
import { formatDate, useReducerState } from 'src/utils/index';
import { Input } from 'src/components/Input';
import { Modal } from 'src/components/Modal/index';
import { footPrintRef } from '../../firebase';
import { Prints, Users } from './types';

export const Footprint = () => {
  const navigate = useNavigate();
  const [state, setState] = useReducerState<Users>({
    username: '',
    content: '',
  });

  const [prints, setPrints] = useState<Prints[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return name === 'username'
      ? setState({ username: value })
      : setState({ content: value });
  };

  const { username, content } = state;
  const onSubmit = async () => {
    if (!username || !content) {
      setIsOpen(true);
      setMessage('모든 입력칸을 채워주세요~ 😭');
      return undefined;
    }
    try {
      await addDoc(footPrintRef, {
        username,
        content,
        timestamp: Date.now(),
      });
      setState({
        username: '',
        content: '',
      });
      setIsOpen(true);
      setMessage('발도장 쾅쾅! 남겨주셔서 감사합니다!');
      return undefined;
    } catch (err) {
      return (err as Error).message;
    }
  };

  const getFootPrint = async () => {
    const querySnapshot = await getDocs(footPrintRef);
    // eslint-disable-next-line prefer-const
    let document: any[] = [];
    querySnapshot.forEach((doc) => {
      document.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    document.sort((a, b) => b.timestamp - a.timestamp);
    setPrints(document);
  };

  const onClose = () => {
    setIsOpen(false);
    navigate(0);
  };

  useEffect(() => {
    getFootPrint();
    return () => setMessage('');
  }, []);

  return (
    <>
      {isOpen && (
      <Modal isOpen={isOpen} onClose={onClose}>
        {message}
      </Modal>
      )}
      <div className="flex flex-col">
        <Input
          label="username_value"
          name="username"
          onChange={onChange}
          value={username}
          placeholder="이름 혹은 닉네임을 입력해주세요"
        />
        <Input
          label="content_value"
          name="content"
          onChange={onChange}
          value={content}
          placeholder="발도장을 남겨주세요. 140자까지 입력 가능해요"
          error={content.length > 140}
        />
        <button
          type="button"
          className="btn rounded-lg mt-6 btn-primary bg-primary"
          onClick={onSubmit}
        >
          <span className="text-white">
            발도장 찍기
          </span>
        </button>
        {
        prints.map((print) => (
          <div className="mockup-window bg-stone-200 mt-5" key={print.timestamp}>
            <div className="flex flex-col justify-center px-8 py-4 bg-base-200">
              <div className="flex flex-row place-content-between items-center">
                <span className="font-semibold text-lg">{print.username}</span>
                <span className="text-xs">{formatDate(print.timestamp)}</span>
              </div>
              <p className="block">{print.content}</p>
            </div>
          </div>
        ))
      }
      </div>
    </>
  );
};

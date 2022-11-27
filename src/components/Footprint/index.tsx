import {
  ChangeEvent, useEffect, useReducer, useState,
} from 'react';
import { addDoc, getDocs } from 'firebase/firestore';
import { formatDate } from 'src/utils/index';
import { footPrintRef } from '../../firebase';
import { Input } from '../Input';
import { Modal } from '../Modal/index';
import { Prints, Users } from './types';

export const Footprint = () => {
  const useReducerState = <State extends object>(initialState: State) => {
    const reducer = (prev: State, next: Partial<State>): State => ({
      ...prev,
      ...next,
    });
    return useReducer(reducer, initialState);
  };

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
      setMessage('모든 입력칸을 채워주세요~ 🥹');
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

  useEffect(() => {
    getFootPrint();
    return () => setMessage('');
  }, []);

  return (
    <>
      {isOpen && (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
          className="btn rounded-lg mt-6 btn-primary"
          onClick={onSubmit}
        >
          <span className="text-white">
            발도장 찍기
          </span>
        </button>
        {
        prints.map((print) => (
          <div className="mockup-window bg-base-300 mt-5" key={print.timestamp}>
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

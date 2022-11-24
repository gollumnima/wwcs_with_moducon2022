import {
  addDoc, getDocs,
} from 'firebase/firestore';
import {
  ChangeEvent, useEffect, useReducer, useState,
} from 'react';
import { formatDate } from 'src/utils/index';
import { footPrintRef } from '../../firebase';
import { Input } from '../Input';

interface Users {
  username: string;
  content: string;
}

interface Prints extends Users {
  timestamp: number;
}

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return name === 'username'
      ? setState({ username: value })
      : setState({ content: value });
  };

  const { username, content } = state;
  const onSubmit = async () => {
    try {
      if (!username && !content) return undefined;
      await addDoc(footPrintRef, {
        username,
        content,
        timestamp: Date.now(),
      });
      setState({
        username: '',
        content: '',
      });
      // Modal 만들어서 띄우기
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
    setPrints(document);
  };

  useEffect(() => {
    getFootPrint();
  }, []);

  return (
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
        placeholder="한 문장으로 발도장을 남겨보아요"
      />
      <button
        type="button"
        className="btn rounded-lg mt-6"
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
  );
};

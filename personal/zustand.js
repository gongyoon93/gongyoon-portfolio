// - const usePersonStore = create<State & Action>((set) => ({
//     firstName: '',
//     lastName: '',
//     updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
//     updateLastName: (lastName) => set(() => ({ lastName: lastName })),
//    }))
//    App 내부
//    const firstName = usePersonStore((state) => state.firstName);
//    const updateFirstName = usePersonStore((state) => state.updateFirstName);
//  - 주스탠드는 flux패턴 원칙으로 만들어졌고 발행(pub)/구독(sub) 기반으로 이루어져 있다. 스토어의 상태 변경이 일어날 때 실행할 리스너
//    함수들을 모아두었다가(sub), 상태 변경이 일어났을 때 등록된 리스너에게 알려준다.(pub)
//  - 스토어를 생성하는 함수 호출시 클로져를 사용한다. 이런 점으로 변경, 조회, 구독하는 인터페이스를 통해서만 상태를 다룰 수 있고,
//    실제 상태는 생명주기에 따라 의도하지 않는 변경을 막을 수 있다.

// import { create } from 'zustand'

// const useStore = create((set) => ({
//  bears: 0,
//  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//  removeAllBears: set((state) => ({ bears: 0 })),
// }))

// export useMemoStore = create<State & Action>((set) => ({
//     memoList : [],
//     addMemo : (val) =>
//      set((prev) => ({
//       memoList: [...prev.memoList, { content: val, id: new Date().getMillisecond() + val }]
//       })),
//     removeMemo : (id) =>
//      set((prev) => ({
//       memoList: prev.memoList.filter((memo) => memo.id !== id) })),
//    }));

// 직관적이고 패키지 사이즈가 작다

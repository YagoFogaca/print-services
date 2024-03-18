import * as C from "./index.header.style";

export function Header({ children }) {
  return (
    <>
      <C.Header>
        <C.HeaderBlu></C.HeaderBlu>
        {children}
      </C.Header>
    </>
  );
}

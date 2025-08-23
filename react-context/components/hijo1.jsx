import { Hijo2 } from "./hijo2";

export function Hijo1({ nombre }) {
  return (
    <>
      <h2>Hijo 1</h2>
      <Hijo2 nombre={nombre} />
    </>
  );
}

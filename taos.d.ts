declare module 'taos' {
  const TAOS: {
    init: () => void;
  };
  export default TAOS;
}
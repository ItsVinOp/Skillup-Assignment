interface IProp {
  classname: string;
  children: React.ReactNode;
}
const Batch = ({ children, classname }: IProp) => {
  return <div className={classname}>{children}</div>;
};

export default Batch;

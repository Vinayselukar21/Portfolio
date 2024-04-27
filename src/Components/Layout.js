const Layout = (props) => {
  return (
    <div className="px-10 sm:px-20 md:px-40 lg:px-40 xl:px-60  w-full ">
      {props.children}
    </div>
  );
};
export default Layout;

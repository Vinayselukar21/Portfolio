import CursorFollower from "./UI/CursorFollower";

const Layout = (props) => {
  return (
    <>
      <div className="px-5 sm:px-20 md:px-40 lg:px-40 xl:px-60  w-full ">
        <CursorFollower />
        {props.children}
      </div>
    </>
  );
};
export default Layout;

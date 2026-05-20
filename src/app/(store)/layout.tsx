import Navbar from "./_components/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <div>layout</div>
        <div>{children}</div>
    </>
  )
}

export default layout
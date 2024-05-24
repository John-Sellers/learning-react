import Student from "./Student"

function App() {
  return (
    <>
      <Student name="John" age={25} student={false} canDrive={true} />
      <Student name="Chris" age={32} student={false} canDrive={true} />
      <Student name="Michael" age={18} student={false} canDrive={true} />
      <Student name="Michelle" age={15} student={true} canDrive={false} />
      <Student />
    </>
  )
}
export default App

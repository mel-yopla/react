/* function Ap() {
  return (
    <div>
      <h1>Hola team</h1>
    </div>
  );
} */

import Course from "./components/Course";

// import Header from "./components/Header";

/* const Ap = () => {
  return <Header />;
}; */

// const Ap = () => <Header />;
const Ap = () => (
  <>
    <Course title="REACT" description="Aprende React" />
    <Course title="HTML" description="Aprende Html" />
    <Course title="CSS" description="Aprende CSS" />
    <Course title="JS" description="Aprende JS" />
  </>
);

export default Ap;

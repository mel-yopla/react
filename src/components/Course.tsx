/* const Course = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{description}</h2>
    </div>
  );
}; */
const Course = ({ title, description }: CourseProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{description}</h2>
    </div>
  );
};

interface CourseProps {
  title: string;
  description: string;
}

export default Course;

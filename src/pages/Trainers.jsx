import ComplexLayout from '../components/layouts/ComplexLayout';
import ViewTrainers from '../components/Trainers/ViewTrainers';

export default function Trainers() {
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="Trainers"
      subtitle="Get Help From The Best"
    >
      <ViewTrainers />
    </ComplexLayout>
  );
}

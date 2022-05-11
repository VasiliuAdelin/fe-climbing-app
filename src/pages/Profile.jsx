import { useSelector } from 'react-redux';
import { selectState } from '../features/auth/authSlice';
import ComplexLayout from '../components/layouts/ComplexLayout';
// import ViewUserProfile from "../components/profile/ViewUserProfile";
export default function Profile() {
  const { user = {} } = useSelector(selectState);

  return (
    <ComplexLayout>
      {/* <ViewUserProfile {...user} /> */}
    </ComplexLayout>
  );
}

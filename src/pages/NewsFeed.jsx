import ComplexLayout from '../components/layouts/ComplexLayout';
import NewsFeedPostsSection from '../components/NewsFeed/NewsFeedPostsSection';

export default function NewsFeed() {
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title="News Feed"
      subtitle="See what others are doing"
    >
      <NewsFeedPostsSection />
    </ComplexLayout>
  );
}

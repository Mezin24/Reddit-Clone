import { GetServerSideProps } from 'next';

const CommunityPage = () => {
  return <div>CommunityPage</div>;
};
export default CommunityPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
  } catch (error) {}

  return {
    props: {
      data: null,
    },
  };
};

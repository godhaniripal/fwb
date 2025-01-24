import { auth } from '@clerk/nextjs';

export default function ProtectedPage() {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and only accessible to authenticated users.</p>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { userId } = auth(ctx);

  if (!userId) {
    return {
      redirect: {
        destination: '/sign-in', // Redirect to sign-in page if not authenticated
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Pass empty props if authenticated
  };
};
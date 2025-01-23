import { withAuth } from '@clerk/nextjs';

function ProtectedPage() {
  return (
    <div>
      <h1>Welcome to the Protected Page</h1>
      <p>Only authenticated users can see this content.</p>
    </div>
  );
}

export default withAuth(ProtectedPage);     
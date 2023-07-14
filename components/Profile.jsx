'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'nextnavigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const fetchUserPosts = async () => {
      const { data: session } = useSession();
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    session?.user.id && fetchUserPosts();
  }, []);

  const handleEdit = () => {};

  const handleDelete = async () => {};
  return (
    <div>
      <Profile
        name="My"
        desc="WElcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;

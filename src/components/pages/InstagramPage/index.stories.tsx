import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InstagramPage from '.';

interface UserData {
  name: string;
  imageSrc: string;
  postedAt: string;
}

async function getUserData(): Promise<Array<UserData>> {
  const response = await fetch(
    `http://localhost:3001/users`
  );

  if (!response.ok) {
    throw response;
  }

  return response.json();
}

const InstagramPageComponent = () => {
  const [userData, setUserData] = React.useState<Array<UserData>>([]);
  React.useEffect(() => {
    (async () => {
      const data = await getUserData();
      setUserData(data);
    })();
  }, []);

  return (
    <InstagramPage headerTitle={'Page'} data={userData} />

  )
}

export default {
  title: 'Pages/InstagramPage',
  component: InstagramPageComponent,
} as ComponentMeta<typeof InstagramPageComponent>;

export const InstagramScreen: ComponentStory<typeof InstagramPageComponent> = (args) => (
  <InstagramPageComponent />
);
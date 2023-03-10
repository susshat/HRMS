import * as Tabs from '@radix-ui/react-tabs';
import BasiInfo from './profile/UpdateProfile/BasicInfo';
import Address from './profile/UpdateProfile/Address';
import Relationship from './profile/UpdateProfile/Relationship';

const TAB_ITEMS = [
  { label: 'Basic', val: 'basicinfo', content: <BasiInfo /> },
  { label: 'Address', val: 'address', content: <Address /> },
  { label: 'Relationship', val: 'relation', content: <Relationship /> },
];

const UpdateProfile = () => {
  return (
    <>
      <div className='bg-[#fff] shadow-md rounded-md flex-1 '>
        <Tabs.Root defaultValue='basicinfo'>
          <Tabs.List
            className='flex space-x-1 px-4 border-b border-b-gray-7'
            aria-label='Manage your account'
          >
            {TAB_ITEMS.map((i) => (
              <Tabs.Trigger
                className='p-4 relative data-[state=active]:after:h-[2px] data-[state=active]:after:bg-primary-9 data-[state=active]:after:w-full data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:bottom-0 '
                value={i.val}
                key={i.val}
              >
                {i.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {TAB_ITEMS.map((i) => (
            <Tabs.Content key={i.val} className='p-4' value={i.val}>
              {i.content}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </>
  );
};
export default UpdateProfile;

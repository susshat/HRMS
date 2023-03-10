import AppTextField from '../../AppTextField';

import { Link, useNavigate } from 'react-router-dom';

import { useState, useContext, useEffect } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { ContainerContext } from '../../Dashboard';

const Relationship = () => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      test: [{}],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'test',
    }
  );

  const onFormSubmit = (data: any) => {
    console.log(data);
  };

  const { ref: containerRef } = useContext(ContainerContext);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [fields]);

  return (
    <>
      <header className='mb-4'>
        <h6 className='font-medium text-lg'>Relationship Information</h6>
        <p className='text-gray-11 italic'>
          Employees' personal relationship information generally refers to
          details about their relationships with family, friends, or significant
          others, which are not typically relevant or necessary for their
          employment.
        </p>
      </header>
      <div>
        <form
          className='m-4 p-4 space-y-4 rounded-lg items-center'
          onSubmit={handleSubmit(onFormSubmit)}
        >
          {fields.map(({ id }, index) => {
            return (
              <div
                key={id}
                // {...register(`test.${index}.value`)}
                className='mt-4 space-y-4 border border-gray-7  p-4 rounded-lg'
              >
                <button className='flex ml-auto space-x-4 '>
                  {
                    <PlusIcon
                      onClick={() => {
                        append({});
                      }}
                    />
                  }
                  {index > 0 && <Cross2Icon onClick={() => remove(index)} />}
                </button>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <AppTextField label='Name' />
                  <AppTextField label='Type of Relation' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <AppTextField label='Occupation' />
                  <AppTextField label='Date of Birth' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <AppTextField label='Contact No.' />
                </div>
              </div>
            );
          })}
        </form>
      </div>

      <div className='w-[50%] mx-auto'>
        <button
          type='submit'
          className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary-6 py-2 px-4 text-sm font-medium text-white hover:bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2'
        >
          Save changes
        </button>
        {/* <div className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary-6 py-2 px-4 text-sm font-medium text-white hover:bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2'>
          <Link
            className='h-2 w-2  text-white group-hover:text-indigo-400'
            to='..'
            relative='path'
          >
            Back
          </Link>
        </div> */}
      </div>
    </>
  );
};
export default Relationship;

import React from 'react';
import toast from 'react-hot-toast';
import { FactoryForm } from '@/features/application/_lib/components/factory-form';
import { jsonSchema, type JsonSchema } from '@/features/application/_lib/schemas/input-json';
import { isValidJSON } from '@/features/application/_lib/utils/is-valid-json';

import { Button } from '@/common/components/Button';
import { Textarea } from '@/common/components/textarea';

export const Component: React.FC = () => {
  const [schema, setSchema] = React.useState<JsonSchema | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const value = (e.currentTarget.elements.namedItem('schema') as HTMLTextAreaElement | null)?.value;
    if (value === undefined) {
      toast.error('Value is undefined');
      return;
    }

    const result = isValidJSON(value);
    if (!result.success) {
      toast.error(result.error);
      return;
    }

    const parsedSchema = jsonSchema.safeParse(result.data);
    if (!parsedSchema.success) {
      window.alert(`Invalid schema: ${parsedSchema.error.flatten().formErrors.join(', ')}`);
      return;
    }

    setSchema(parsedSchema.data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-black">
      <div className="container flex  items-center justify-center gap-12 px-4 py-16 ">

        <form className="flex   w-1/2 flex-col items-center justify-center gap-4" onSubmit={onSubmit}>
          <Textarea placeholder="Enter the JSON schema" id="schema" className="h-96 text-2xl" />

          <Button type="submit">Create Form</Button>
        </form>
        <div className="w-1/2">
          <pre id="jsonViewer" className="bg-gray-50 p-4 border border-gray-300 rounded overflow-auto max-h-96 text-sm text-gray-800">
            {
    JSON.stringify([
      {
        id: 'name',
        type: 'string',
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        length: {
          min: 1,
          max: 100,
        },
        defaultValue: 'John Doe',
      },
      {
        id: 'age',
        type: 'number',
        label: 'Age',
        placeholder: 'Enter your age',
        required: true,
        min: 1,
        max: 120,
        defaultValue: 30,
      },
      {
        id: 'newsletter',
        type: 'boolean',
        label: 'Subscribe to newsletter',
        required: false,
        defaultValue: false,
      },
      {
        id: 'gender',
        type: 'select',
        label: 'Gender',
        required: true,
        options: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
          {
            label: 'Other',
            value: 'other',
          },
        ],
        defaultValue: 'male',
      },
      {
        id: 'email',
        type: 'string',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
        length: {
          min: 5,
          max: 100,
        },
        defaultValue: 'johndoe@example.com',
      },
      {
        id: 'terms',
        type: 'boolean',
        label: 'Accept Terms and Conditions',
        required: true,
        defaultValue: false,
      },
    ])
}
          </pre>
        </div>
      </div>

      {schema !== null && <FactoryForm schema={schema} key={JSON.stringify(schema)} />}
    </main>
  );
};

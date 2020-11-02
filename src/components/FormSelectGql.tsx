import React from 'react';

import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';

import { FormItem, FormSelect } from '@erkenningen/ui/components/form';
import { Alert } from '@erkenningen/ui/components/alert';

const FormSelectGql: React.FC<
  {
    gqlQuery: DocumentNode;
    variables?: any;
    emptyMessage?: string;
    mapResult?: (data: any) => { label: string; value: string }[];
  } & Omit<React.ComponentProps<typeof FormSelect>, 'options'>
> = (props) => {
  const { loading, error, data } = useQuery(props.gqlQuery, {
    variables: props.variables,
  });

  if (error) {
    <FormItem>
      <Alert type="danger">Fout opgetreden bij het ophalen van de gegevens</Alert>
    </FormItem>;
  }

  if (
    props.emptyMessage &&
    !loading &&
    (!data[Object.keys(data)[0]] || !data[Object.keys(data)[0]].length)
  ) {
    return (
      <FormItem>
        <Alert type="warning">{props.emptyMessage}</Alert>
      </FormItem>
    );
  }

  return (
    <>
      <FormSelect
        {...props}
        loading={loading}
        options={
          data
            ? props.mapResult
              ? props.mapResult(data)
              : data[Object.keys(data)[0]].map((c: any) => ({ label: c.Text, value: c.Value }))
            : []
        }
      />
    </>
  );
};

export default FormSelectGql;
